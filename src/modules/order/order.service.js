const grpcClient = require("../../grpc-clients/client.grpc");
const eventService = require("../event/event.services");
const {CreateRequest} = require("../../generated_pb/order_pb");
const {OrderQuery} = require("../../generated_pb/order_pb");
const {UpdateRequest} = require("../../generated_pb/order_pb");
const {DeleteRequest} = require("../../generated_pb/order_pb");
const {CheckQuery} = require("../../generated_pb/order_pb");
const {FindRequest} = require("../../generated_pb/order_pb");

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
                    partner_id: res.getPartnerId(),
                    state: res.getState(),
                    date_order: res.getDateOrder(),
                    create_date: res.getCreateDate(),
                    create_uid: res.getCreateUid(),
                    write_uid: res.getWriteUid(),
                    write_date: res.getWriteDate(),
                    amount_total: res.getAmountTotal(),
                    note: res.getNote(),
                    source: res.getSource(),
                    buyer_name: res.getBuyerName(),
                    buyer_email: res.getBuyerEmail(),
                    buyer_phone: res.getBuyerPhone(),

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

exports.getOrders = async (id,page) => {
    console.log("invoking getOrder");

    const req = new OrderQuery()
    .setId(id)
    .setPage(page);

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
                    random_code_order : order.getRandomCodeOrder(),
                    // event_name: getEventName("116"),
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

 async function getEventName (id){
    console.log("invoking getEventName");
    const event_request = {
        "field_name": ["id"],
        "field_value": [id],
    };

    return new Promise( async (resolve, reject) => {   
        try {
            const event = await eventService.getEvents(event_request);
            console.log("event: ",event[0].name.toString());
            resolve(event[0].name.toString());
        } catch (error) {
            console.log("Error getEventName: ", error);
        reject(error);
        }
    })
    
};

exports.getOrdersByCreateUid = async (id,page,nb) => {
    console.log("invoking getOrderByCreateUid");

    const req = new OrderQuery()
    .setId(id)
    .setPage(page)
    .setItemsPerPage(nb);

    console.log("returning promise");
    return new Promise((resolve, reject) => {
        const call = grpcClient.getOrderInstance().getOrdersByCreateUid(req, (err, res) => {
            if (!err) {
                const orders = res.getOrderList().map((order) =>({
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
                    random_code_order : order.getRandomCodeOrder(),
                    event_name : order.getEventName(),
                    event_id : order.getEventId(),
                    promo_code_id : order.getPromoCodeId(),
                    user_id : order.getUserId(),
                    user_name : order.getUserName()
                    //event_name: getEventName("116"),
                }));

                resolve(orders);
            }
            else{
                console.log("Error getOrderByCreateUid: ", err);
                reject(err);
            }
        });
    });

};

exports.findOrder = async (id,buyer_name, page,field_name,field_value,dateFrom,DateTo) => {
    console.log("invoking findOrder");

    const req = new FindRequest();
    req.setId(id)
    .setBuyerName(buyer_name)
    .setPage(page)
    .setFieldNameList(field_name)
    .setFieldValueList(field_value)
    .setDateFrom(dateFrom)
    .setDateTo(DateTo);

    console.log("returning promise");

    return new Promise( (resolve, reject) => {
        const call = grpcClient.getOrderInstance().findOrder(req, (err, res) => {
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
                    random_code_order : order.getRandomCodeOrder(),
                    event_name : order.getEventName(),
                    event_id : order.getEventId(),
                    promo_code_id : order.getPromoCodeId(),
                    user_id : order.getUserId(),
                    user_name : order.getUserName()
                    // event_name: getEventName("116"),
                }));

                resolve(orders);
            }
            else{
                console.log("Error findOrder: ", err);
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
    .setCreateUid(order_req.create_uid)
    .setWriteUid(order_req.write_uid)
    .setAmountTotal(order_req.amount_total)
    .setNote(order_req.note)
    .setBuyerEmail(order_req.buyer_email)
    .setBuyerName(order_req.buyer_name)
    .setBuyerPhone(order_req.buyer_phone)
    .setSource(order_req.source);
    

    return new Promise((resolve, reject) => {
        console.log("grpc req",req);
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