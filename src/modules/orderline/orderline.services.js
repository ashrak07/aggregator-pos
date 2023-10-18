const grpcClient = require("../../grpc-clients/client.grpc");
const {CreateRequest} = require("../../generated_pb/orderline_pb");
const {OrderlineQuery} = require("../../generated_pb/orderline_pb");
const {UpdateRequest} = require("../../generated_pb/orderline_pb");
const {DeleteRequest} = require("../../generated_pb/orderline_pb");

exports.createOrderline = async (order_req) => {
    console.log("invoking createOrderline");
    console.log("order_req: ", order_req);
    
    const req =  new CreateRequest()
        .setPlace(order_req.place)
        .setSection(order_req.section)
        .setOrderId(order_req.order_id)
        .setEventId(order_req.event_id)
        .setIsAdmission(order_req.is_admission)
        .setCreateDate(order_req.create_date)
        .setWriteDate(order_req.write_date)
        .setCreateUid(order_req.create_uid)
        .setWriteUid(order_req.write_uid)
        .setTicketTypeId(order_req.ticket_type_id)
        .setQty(order_req.qty)
        .setPriceUnit(order_req.price_unit)
        .setPriceReduce(order_req.price_reduce)
        .setPriceSubTotal(order_req.price_sub_total)
        .setDiscount(order_req.discount)
        ;
    console.log("req: ", req);

    return new Promise((resolve, reject) => {
        grpcClient.getOrderlineInstance().createOrderline(req, (err, res) => {
            if (!err) {
                console.log("res: ", res);
                const order_res = {
                    id: res.getId(),
                    place: res.getPlace(),
                    section: res.getSection(),
                    orderId: res.getOrderId(),
                    eventId: res.getEventId(),
                    isAdmission: res.getIsAdmission(),
                    createDate: res.getCreateDate(),
                    writeDate: res.getWriteDate(),
                    createUid: res.getCreateUid(),
                    writeUid: res.getWriteUid(),
                    ticketTypeId: res.getTicketTypeId(),
                    qty: res.getQty(),
                    priceUnit: res.getPriceUnit(),
                    priceReduce: res.getPriceReduce(),
                    priceSubTotal: res.getPriceSubTotal(),
                    discount: res.getDiscount(),
                };
                resolve(order_res);
            }
            else{
                console.log("Error createOrder: ", err);
                reject(err);
            }
        });
        
    });
    

}

exports.getOrderlinesByOrderId = async (id) => {
    console.log("invoking getOrderlinesyOrderId");

    const req = new OrderlineQuery()
    .setId(id);

    console.log("returning promise");
    return new Promise((resolve, reject) => {
        const call = grpcClient.getOrderlineInstance().getOrderlinesByOrderId(req, (err, res) => {
            if (!err) {
                const orders = res.getOrderlineList().map((order) => ({
                    id: order.getId(),
                    place: order.getPlace(),
                    section: order.getSection(),
                    orderId: order.getOrderId(),
                    eventId: order.getEventId(),
                    isAdmission: order.getIsAdmission(),
                    createDate: order.getCreateDate(),
                    writeDate: order.getWriteDate(),
                    createUid: order.getCreateUid(),
                    writeUid: order.getWriteUid(),
                    ticketTypeId: order.getTicketTypeId(),
                    qty: order.getQty(),
                    priceUnit: order.getPriceUnit(),
                    priceReduce: order.getPriceReduce(),
                    priceSubTotal: order.getPriceSubTotal(),
                    discount: order.getDiscount(),
                }));

                resolve(orders);
            }
            else{
                console.log("Error getOrder: ", err);
                reject(err);
            }
        });
    });

};

exports.updateOrderline = async (order_req) => {
    console.log('invoking updateOrderline');

    const req = new UpdateRequest()
    .setId(order_req.id)
    .setPlace(order_req.place)
    .setSection(order_req.section)
    .setOrderId(order_req.order_id)
    .setEventId(order_req.event_id)
    .setIsAdmission(order_req.is_admission)
    .setCreateDate(order_req.create_date)
    .setWriteDate(order_req.write_date)
    .setCreateUid(order_req.create_uid)
    .setWriteUid(order_req.write_uid)
    .setTicketTypeId(order_req.ticket_type_id)
    .setQty(order_req.qty)
    .setPriceUnit(order_req.price_unit)
    .setPriceReduce(order_req.price_reduce)
    .setPriceSubTotal(order_req.price_sub_total)
    .setDiscount(order_req.discount)

    ;

    return new Promise((resolve, reject) => {
        grpcClient.getOrderlineInstance().updateOrderline(req, (err, res) => {
            if (!err) {
                const order_res = {
                    id: res.getId(),
                    place: res.getPlace(),
                    section: res.getSection(),
                    orderId: res.getOrderId(),
                    eventId: res.getEventId(),
                    isAdmission: res.getIsAdmission(),
                    createDate: res.getCreateDate(),
                    writeDate: res.getWriteDate(),
                    createUid: res.getCreateUid(),
                    writeUid: res.getWriteUid(),
                    ticketTypeId: res.getTicketTypeId(),
                    qty: res.getQty(),
                    priceUnit: res.getPriceUnit(),
                    priceReduce: res.getPriceReduce(),
                    priceSubTotal: res.getPriceSubTotal(),
                    discount: res.getDiscount(),
                };
                resolve(order_res);
            }
            else{
                console.log("Error updateOrder: ", err);
                reject(err);
            }
        });
    });
}

exports.deleteOrderline = async (id) => {
    console.log('invoking deleteOrderline');

    const req = new DeleteRequest()
    .setId(id);

    return new Promise((resolve, reject) => {
        grpcClient.getOrderlineInstance().deleteOrderline(req, (err, res) => {
            if (!err) {
                const order_res = {
                    id: res.getId(),
                };
                resolve(order_res);
            }
            else{
                console.log("Error deleteOrder: ", err);
                reject(err);
            }
        });
    });
};
