// grpcClient.js
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = '../../proto/user.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const myPackage = grpc.loadPackageDefinition(packageDefinition).mypackage;

const createGRPCClient = (address) => {
  return new myPackage.MyGrpcService(address, grpc.credentials.createInsecure());
};

module.exports = createGRPCClient;
