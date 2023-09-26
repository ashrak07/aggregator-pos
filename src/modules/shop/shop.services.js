const clientGrpc = require("../../grpc-clients/client.grpc");
const {UserId} = require("../../generated_pb/shop_pb");
const {ListShopUserIdRequest} = require("../../generated_pb/shop_pb");

exports.getShopByUserId = async (shop_req,nb,page) => {
    console.log("invoking getShopByUserId");
    console.log("userId: ", shop_req);
    console.log("nb: ", nb);
    console.log("page: ", page);
    
    const req =  new ListShopUserIdRequest()
        .setUserId(shop_req)
        .setNb(nb)
        .setPage(page);
    console.log("req: ", req);

    const list = [];

    return new Promise((resolve, reject) => {
        const call = clientGrpc.getShopInstance().getShopByUserId(req, (err, res) => {
            if (!err) {
                const shops = res.getShopsList().map((shop) => ({
                    name: shop.getName(),
                    id: shop.getId(),
                    address: shop.getAddress(),
                    city: shop.getCity(),
                    opening_hour: shop.getOpeningHour(),
                    closing_hour: shop.getClosingHour(),
                    phone_number: shop.getPhoneNumber(),
                    active: shop.getActive(),
                    zip_code: shop.getZipCode(),
                    creator_uid: shop.getCreatorUid(),
                    parent_creator_uid: shop.getParentCreatorUid(),
                    show_lastname: shop.getShowLastname(),
                    show_firstname: shop.getShowFirstname(),
                    show_email: shop.getShowEmail(),
                    show_phone: shop.getShowPhone(),
                }));

                resolve(shops);
            }
            else{
                console.log("Error getShopByUserId: ", err);
                reject(err);
            }
        });
        
    });
    
    
};