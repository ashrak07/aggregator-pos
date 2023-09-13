// grpcClient.js
const grpc = require("@grpc/grpc-js");

const {UserServiceClient} = require("../generated_pb/user_grpc_pb");
const {ShopServiceClient} = require("../generated_pb/shop_grpc_pb");

exports.getUserInstance = () => {
  if (this.userClient == null) {
    this.userClient = new UserServiceClient(`localhost:${process.env.MS_USER_GRPC_PORT}`, grpc.credentials.createInsecure());
  }
  return this.userClient;

}

exports.getShopInstance = () => {
  if (this.shopClient == null) {
    this.shopClient = new ShopServiceClient(`localhost:${process.env.MS_SHOP_GRPC_PORT}`, grpc.credentials.createInsecure());
  }
  return this.shopClient;
}