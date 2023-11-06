const grpcClient = require("../../grpc-clients/client.grpc");
const {CreateRequest} = require("../../generated_pb/order_pb");
const {OrderQuery} = require("../../generated_pb/order_pb");
const {UpdateRequest} = require("../../generated_pb/order_pb");
const {DeleteRequest} = require("../../generated_pb/order_pb");
const {CheckQuery} = require("../../generated_pb/order_pb");

exports.createOrder = async (order_req) => {
    console.log("invoking createOrder");
    console.log("order_req: ", order_req);
    
    const req =  new CreateRequest()
        .setName(order_req.name)
        .setPartnerId(order_req.partner_id)
        .setState(order_req.state)
        //.setDateOrder(order_req.date_order)
        //.setCreateDate(order_req.create_date)
        .setCreateUid(order_req.create_uid)
        //.setWriteDate(order_req.write_date )
        .setAmountTotal(order_req.amount_total)
        .setNote(order_req.note)
        .setSource(order_req.source)
        .setBuyerName(order_req.buyer_name)
        .setBuyerEmail(order_req.buyer_email)
        .setBuyerPhone(order_req.buyer_phone)
        ;
    console.log("req: ", req);

    return new Promise((resolve, reject) => {
        grpcClient.getOrderInstance().createOrder(req, (err, res) => {
            if (!err) {
                console.log("res: ", res);
                const order_res = {
                    id: res.getId(),
                    name: res.getName(),
                    partnerId: res.getPartnerId(),
                    state: res.getState(),
                    dateOrder: res.getDateOrder(),
                    createDate: res.getCreateDate(),
                    createUid: res.getCreateUid(),
                    writeDate: res.getWriteDate(),
                    amountTotal: res.getAmountTotal(),
                    note: res.getNote(),
                    source: res.getSource(),
                    buyerName: res.getBuyerName(),
                    buyerEmail: res.getBuyerEmail(),
                    buyerPhone: res.getBuyerPhone(),

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

exports.getOrders = async (id) => {
    console.log("invoking getOrder");

    const req = new OrderQuery()
    .setId(id);

    console.log("returning promise");
    return new Promise((resolve, reject) => {
        const call = grpcClient.getOrderInstance().getOrders(req, (err, res) => {
            if (!err) {
                const orders = res.getOrderList().map((order) => ({
                    id: order.getId(),
                    name: order.getName(),
                    partner_id: order.getPartnerId(),
                    state: order.getState(),
                    date_order: order.getDateOrder(),
                    create_date: order.getCreateDate(),
                    create_did: order.getCreateUid(),
                    write_date: order.getWriteDate(),
                    amount_total: order.getAmountTotal(),
                    note: order.getNote(),
                    source: order.getSource(),
                    buyer_name: order.getBuyerName(),
                    buyer_email: order.getBuyerEmail(),
                    buyer_phone: order.getBuyerPhone(),
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

exports.getOrdersByCreateUid = async (id) => {
    console.log("invoking getOrder");

    const req = new OrderQuery()
    .setId(id);

    console.log("returning promise");
    return new Promise((resolve, reject) => {
        const call = grpcClient.getOrderInstance().getOrdersByCreateUid(req, (err, res) => {
            if (!err) {
                const orders = res.getOrderList().map((order) => ({
                    id: order.getId(),
                    name: order.getName(),
                    partner_id: order.getPartnerId(),
                    state: order.getState(),
                    date_order: order.getDateOrder(),
                    create_date: order.getCreateDate(),
                    create_uid: order.getCreateUid(),
                    write_date: order.getWriteDate(),
                    amount_total: order.getAmountTotal(),
                    note: order.getNote(),
                    source: order.getSource(),
                    buyer_name: order.getBuyerName(),
                    buyer_email: order.getBuyerEmail(),
                    buyer_phone: order.getBuyerPhone(),
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

exports.updateOrder = async (order_req) => {
    console.log('invoking updateOrder');

    const req = new UpdateRequest()
    .setId(order_req.id)
    .setName(order_req.name)
    .setPartnerId(order_req.partner_id)
    .setState(order_req.state)
    //.setDateOrder(order_req.date_order)
    //.setCreateDate(order_req.create_date)
    .setCreateUid(order_req.create_uid)
    //.setWriteDate(order_req.write_date)
    .setAmountTotal(order_req.amount_total)
    .setNote(order_req.note);

    return new Promise((resolve, reject) => {
        grpcClient.getOrderInstance().updateOrder(req, (err, res) => {
            if (!err) {
                const order_res = {
                    id: res.getId(),
                    name: res.getName(),
                    partner_id: res.getPartnerId(),
                    state: res.getState(),
                    date_order: res.getDateOrder(),
                    create_date: res.getCreateDate(),
                    create_uid: res.getCreateUid(),
                    write_date: res.getWriteDate(),
                    amount_total: res.getAmountTotal(),
                    note: res.getNote(),
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

exports.deleteOrder = async (id) => {
    console.log('invoking deleteOrder');

    const req = new DeleteRequest()
    .setId(id);

    return new Promise((resolve, reject) => {
        grpcClient.getOrderInstance().deleteOrder(req, (err, res) => {
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

exports.checkDiscount = async (check_req) => {
    console.log("invoking checkDiscount");

    const req = new CheckQuery().setName(check_req.name)
    .setIdOrder(check_req.id_order);

    console.log("returning promise");
    return new Promise((resolve, reject) => {
        const call = grpcClient.getOrderInstance().checkDiscount(req, (err, res) => {
            if (!err) {
                const check_res = {
                    status: res.getStatus(),
                    id_promocode: res.getIdPromocode(),
                    alert_message: res.getAlertMessage(),
                };

                resolve(check_res);
            }
            else{
                console.log("Error checkDiscount: ", err);
                reject(err);
            }
        });
    });
};