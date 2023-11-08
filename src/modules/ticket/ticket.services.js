const clientGrpc = require("../../grpc-clients/client.grpc");

const {GetTicketTypeRequest} = require("../../generated_pb/event_pb");
const {Order} = require("../../generated_pb/ticket_pb");
const {TicketQuery} = require("../../generated_pb/ticket_pb");

exports.getTicketTypes = async (name,value,page) => {
    console.log("invoking getTicketTypes");
    console.log("name: ", name);
    console.log("Id: ", value);
    console.log("page: ", page);
    
    const req =  new GetTicketTypeRequest()
        .setPage(page);
    
    for (let index = 0; index < name.length; index++) {
        req.addFieldName(name[index]);
    }

    for (let index = 0; index < value.length; index++) {
        req.addFieldValue(value[index]);
        
    }
    console.log("req: ", req);

    return new Promise((resolve, reject) => {
        const call = clientGrpc.getEventInstance().getTicketTypes(req, (err, res) => {
            if (!err) {
                const tickets = res.getTickettypesList().map((ticket) => ({
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
                    
                }));
                console.log("tickets: ", tickets);

                resolve(tickets);
            }
            else{
                console.log("Error getTicketTypes: ", err);
                reject(err);
            }
        });
        
    });
    

};

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