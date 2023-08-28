// grpcClient.js
const grpc = require("@grpc/grpc-js");

const {UserServiceClient} = require("../generated_pb/user_grpc_pb");

exports.getUserInstance = () => {
  if (this.userClient == null) {
    this.userClient = new UserServiceClient("localhost:50051", grpc.credentials.createInsecure());
  }
  return this.userClient;

}
