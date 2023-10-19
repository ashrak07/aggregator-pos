const clientGrpc = require("../../grpc-clients/client.grpc");

const {GetTicketTypeRequest} = require("../../generated_pb/event_pb");

exports.getTicketTypes = async (name,value,page) => {
    console.log("invoking getTicketTypes");
    console.log("name: ", name);
    console.log("Id: ", value);
    console.log("page: ", page);
    
    const req =  new GetTicketTypeRequest()
        .setFieldName(name)
        .setFieldValue(value)
        .setPage(page);
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