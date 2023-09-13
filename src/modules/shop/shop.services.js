const clientGrpc = require("../../grpc-clients/client.grpc");
const {UserId} = require("../../generated_pb/shop_pb");

exports.getShopByUserId = async (shop_req) => {
    console.log("invoking getShopByUserId");
    console.log("userId: ", shop_req);
    
    const req =  new UserId()
        .setUserId(shop_req);
    console.log("req: ", req.getUserId());

    const list = [];

    /*clientGrpc.getShopInstance().getShopByUserId(req, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return(err);
        } 
    })*/
    
    return new Promise((resolve, reject) => {
        const call = clientGrpc.getShopInstance().getShopByUserId(req);
        call.on("data", (res) => {
            list.push(res.array);
        });

        call.on("end", () => {
            resolve(list);
        });
    });
    
    
};