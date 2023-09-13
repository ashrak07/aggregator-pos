const clientGrpc = require("../../grpc-clients/client.grpc");
const {UserId} = require("../../generated_pb/shop_pb");

exports.getShopByUserId = async (shop_req) => {
    console.log("invoking getShopByUserId");
    console.log("userId: ", shop_req);
    
    const req =  new UserId()
        .setUserId(shop_req);
    console.log("req: ", req.getUserId());

    const list = [];

    return new Promise((resolve, reject) => {
        const call = clientGrpc.getShopInstance().getShopByUserId(req);
        call.on("data", (res) => {

            const shop = {
            id: res.getId(),
            name: res.getName(),
            address: res.getAddress(),
            city: res.getCity(),
            opening_hour: res.getOpeningHour(),
            closing_hour: res.getClosingHour(),
            phone_number: res.getPhoneNumber(),
            active: res.getActive(),
            zip_code: res.getZipCode(),
            creator_uid: res.getCreatorUid(),
            parent_creator_uid: res.getParentCreatorUid(),
            show_lastname: res.getShowLastname(),
            show_firstname: res.getShowFirstname(),
            show_email: res.getShowEmail(),
            show_phone: res.getShowPhone(),
        }
            list.push(shop);
        });

        call.on("end", () => {
            resolve(list);
        });
    });
    
    
};