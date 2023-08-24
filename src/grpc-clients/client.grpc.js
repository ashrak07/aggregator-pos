// grpcClient.js
const grpc = require("@grpc/grpc-js");
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = 'proto/user.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const user = grpc.loadPackageDefinition(packageDefinition).user;

exports.getUserInstance = () => {
  if (this.userClient == null) {
    this.userClient = new user.UserService("localhost:50051", grpc.credentials.createInsecure());
  }
  return this.userClient;

}
