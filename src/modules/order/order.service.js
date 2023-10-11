const grpcClient = require("../../grpc-clients/client.grpc");
const {CreateRequest} = require("../../generated_pb/order_pb");

exports.createOrder = async (order_req) => {
    console.log("invoking createOrder");
    console.log("order_req: ", order_req);
    
    const req =  new CreateRequest()
        .setName(order_req.name)
        .setPartnerid(order_req.partnerId)
        .setState(order_req.state)
        .setDateorder(order_req.dateOrder)
        .setCreatedate(order_req.createDate)
        .setCreateuid(order_req.createUid)
        .setWritedate(order_req.writeDate)
        .setAmounttotal(order_req.amountTotal)
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
                    partnerId: res.getPartnerid(),
                    state: res.getState(),
                    dateOrder: res.getDateorder(),
                    createDate: res.getCreatedate(),
                    createUid: res.getCreateuid(),
                    writeDate: res.getWritedate(),
                    amountTotal: res.getAmounttotal(),
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