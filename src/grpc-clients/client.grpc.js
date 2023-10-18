// grpcClient.js
const grpc = require("@grpc/grpc-js");

const {UserServiceClient} = require("../generated_pb/user_grpc_pb");
const {ShopServiceClient} = require("../generated_pb/shop_grpc_pb");
const {EventClient} = require("../generated_pb/event_grpc_pb");
const {OrderClient} = require("../generated_pb/order_grpc_pb");
const {OrderlineClient} = require("../generated_pb/orderline_grpc_pb");

exports.getUserInstance = () => {
  if (this.userClient == null) {
    this.userClient = new UserServiceClient(`node_ms-user:${process.env.MS_USER_GRPC_PORT}`, grpc.credentials.createInsecure());
  }
  return this.userClient;

}

exports.getShopInstance = () => {
  if (this.shopClient == null) {
    this.shopClient = new ShopServiceClient(`node_ms-shop:${process.env.MS_SHOP_GRPC_PORT}`, grpc.credentials.createInsecure());
  }
  return this.shopClient;
}

exports.getEventInstance = () => {
  if (this.eventClient == null) {
    this.eventClient = new EventClient(`${process.env.MS_EVENT_IP}:${process.env.MS_EVENT_GRPC_PORT}`, grpc.credentials.createInsecure());
  }
  return this.eventClient;
}

exports.getOrderInstance = () => {
  if (this.orderClient == null) {
    this.orderClient = new OrderClient(`${process.env.MS_ORDER_IP}:${process.env.MS_ORDER_GRPC_PORT}`, grpc.credentials.createInsecure());
  }
  return this.orderClient;
}

exports.getOrderlineInstance = () => {
  if (this.orderlineClient == null) {
    this.orderlineClient = new OrderlineClient(`${process.env.MS_ORDER_IP}:${process.env.MS_ORDER_GRPC_PORT}`, grpc.credentials.createInsecure());
  }
  return this.orderlineClient;
}