const clientGrpc = require("../../grpc-clients/client.grpc");

const {GetTicketTypeRequest} = require("../../generated_pb/event_pb");
const {Order} = require("../../generated_pb/ticket_pb");
const {TicketQuery} = require("../../generated_pb/ticket_pb");
const {TicketPdfRequest} = require("../../generated_pb/ticket_pb");
const {CurrencyRequest} = require('../../generated_pb/base_pb')

exports.getTicketTypes = async (eventId, page) => {
    console.log("invoking getTicketTypes");
    console.log('EVENT_ID ==> ' + eventId)
    
    const req =  new GetTicketTypeRequest()
        .setPage(page || 1)
        .setFieldNameList(['event'])
        .setFieldValueList([eventId+''])

    return new Promise((resolve, reject) => {
        clientGrpc.getEventInstance().getTicketTypes(req, async (err, res) => {
            if (!err) {
                const tickets = res.getTickettypesList().map(async (ticket) => ({
                    id: ticket.getId(),
                    reference: ticket.getReference(),
                    name: ticket.getName(),
                    color: ticket.getColor(),
                    price_unit: ticket.getPriceUnit(),
                    currency_id: ticket.getCurrencyId(),
                    is_admission: ticket.getIsAdmission(),
                    seatsio_best_categ_key: ticket.getSeatsioCategKey(),
                    seatsio_best_available: ticket.getSeatsioBestAvailable(),
                    is_free: ticket.getIsFree(),
                    description: ticket.getDescription(),
                    qty: ticket.getQty(),
                    date_from: ticket.getDateFrom(),
                    date_to: ticket.getDateTo(),
                    door: ticket.getDoor(),
                    sale_online: ticket.getSaleOnline(),
                    sale_messenger: ticket.getSaleMessenger(),
                    sale_pos: ticket.getSalePos(),
                    createUid: ticket.getCreateuid(),
                    writeUid: ticket.getWriteuid(),
                    event_id: ticket.getEventId(),
                    active: ticket.getActive(),
                    write_date: ticket.getWriteDate(),
                    create_date: ticket.getCreateDate(),
                    currency: await this.getCurrency(ticket.getCurrencyId())
                }));

                resolve(await Promise.all(tickets));
            }
            else{
                console.log("Error getTicketTypes: ", err);
                reject(err);
            }
        });
        
    });
    

};

exports.getCurrency = (id) => {
  const req = new CurrencyRequest()
    .setPage(1)
    .setPageSize(5)
    .setFieldNameList(['id'])
    .setFieldValueList([id+''])

  return new Promise((resolve, reject) => {
    clientGrpc.getBaseInstance().getCurrencies(req, (err, res) => {
      if (err) {
        console.error(err)
        reject(err)
      }
      else {
        const currency = res.getCurrenciesList()[0]
        
        resolve({
          name: currency.getName(),
          symbol: currency.getSymbol(),
          fullName: currency.getFullName(),
          currencyUnitLabel: currency.getCurrencyUnitLabel(),
          currencySubunitLabel: currency.getCurrencySubunitLabel()
        })
      }
    })
  })
}

exports.createOrderTicket = async (order_id) => {
    console.log("invoking createOrderTicket");
    console.log("order id: ", order_id);

    const req = new Order();
    req.setOrderId(order_id);

    return new Promise((resolve, reject) => {
        clientGrpc.getTicketInstance().createOrderTicket(req, (err, res) => {
            if (!err) {
                console.log("res: ", res);
                const result= {
                    success: res.getSuccess(),
                    message: res.getMessage(),
                }
                resolve(res);
            }
            else{
                console.log("Error createOrderTicket: ", err);
                reject(err);
            }
        });
    });
};


exports.getTickets = async (req) => {
    console.log("invoking getTickets");
    console.log("req: ", req);

    const reqticket = new TicketQuery();
    reqticket.setFieldName(req.field_name);
    reqticket.setFieldValue(req.field_value);

    return new Promise((resolve, reject) => {
        const call = clientGrpc.getTicketInstance().getTickets(reqticket, (err, res) => {
            if (!err) {
                const tickets = res.getTicketsList().map((ticket) => ({
                    id: ticket.getTicketId(),
                    event_id: ticket.getEventId(),
                    ticket_type_id: ticket.getTicketTypeId(),
                    ticket_type_name: ticket.getTicketTypeName(),
                    order_id: ticket.getOrderId(),
                    order_line_id: ticket.getOrderLineId(),
                    section: ticket.getSection(),
                    place: ticket.getPlace(),
                    is_admission: ticket.getIsAdmission(),
                    price: ticket.getPrice()
                }));
                resolve(tickets);
            }
            else{
                console.log("Error getTickets: ", err);
                reject(err);
            }
        });
    });
};

exports.generateTicketPdf = async (ticket_id) => {
    console.log("invoking generateTicketPdf");

    const req = new TicketPdfRequest()
    .setTicketsIdsList(ticket_id.id)
    .setOrderId(ticket_id.order_id);

    return new Promise((resolve, reject) => {
        clientGrpc.getTicketInstance().generateTicketPdf(req, (err, res) => {
            if (!err) {
                
                const response = {
                    pdf: res.getPdf()
                }
                resolve(response);
            }
            else{
                console.log("Error generateTicketPdf: ", err);
                reject(err);
            }
        });
    });

};
