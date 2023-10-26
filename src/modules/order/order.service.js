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
        .setPartnerId(order_req.partnerId)
        .setState(order_req.state)
        .setDateOrder(order_req.dateOrder)
        .setCreateDate(order_req.createDate)
        .setCreateUid(order_req.createUid)
        .setWriteDate(order_req.writeDate )
        .setAmountTotal(order_req.amountTotal)
        .setNote(order_req.note)
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
                    partnerId: order.getPartnerId(),
                    state: order.getState(),
                    dateOrder: order.getDateOrder(),
                    createDate: order.getCreateDate(),
                    createUid: order.getCreateUid(),
                    writeDate: order.getWriteDate(),
                    amountTotal: order.getAmountTotal(),
                    note: order.getNote(),
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
                    partnerId: order.getPartnerId(),
                    state: order.getState(),
                    dateOrder: order.getDateOrder(),
                    createDate: order.getCreateDate(),
                    createUid: order.getCreateUid(),
                    writeDate: order.getWriteDate(),
                    amountTotal: order.getAmountTotal(),
                    note: order.getNote(),
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
    .setPartnerId(order_req.partnerId)
    .setState(order_req.state)
    .setDateOrder(order_req.dateOrder)
    .setCreateDate(order_req.createDate)
    .setCreateUid(order_req.createUid)
    .setWriteDate(order_req.writeDate)
    .setAmountTotal(order_req.amountTotal)
    .setNote(order_req.note);

    return new Promise((resolve, reject) => {
        grpcClient.getOrderInstance().updateOrder(req, (err, res) => {
            if (!err) {
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
    .setIdOrder(check_req.idorder);

    console.log("returning promise");
    return new Promise((resolve, reject) => {
        const call = grpcClient.getOrderInstance().checkDiscount(req, (err, res) => {
            if (!err) {
                const check_res = {
                    status: res.getStatus(),
                    idPromocode: res.getIdPromocode(),
                    alertMessage: res.getAlertMessage(),
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