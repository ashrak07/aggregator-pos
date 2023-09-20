// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var order_pb = require('./order_pb.js');

function serialize_orderline_CreateRequest(arg) {
  if (!(arg instanceof order_pb.CreateRequest)) {
    throw new Error('Expected argument of type orderline.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orderline_CreateRequest(buffer_arg) {
  return order_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_orderline_CreateResponse(arg) {
  if (!(arg instanceof order_pb.CreateResponse)) {
    throw new Error('Expected argument of type orderline.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orderline_CreateResponse(buffer_arg) {
  return order_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_orderline_DeleteRequest(arg) {
  if (!(arg instanceof order_pb.DeleteRequest)) {
    throw new Error('Expected argument of type orderline.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orderline_DeleteRequest(buffer_arg) {
  return order_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_orderline_DeleteResponse(arg) {
  if (!(arg instanceof order_pb.DeleteResponse)) {
    throw new Error('Expected argument of type orderline.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orderline_DeleteResponse(buffer_arg) {
  return order_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_orderline_OrderlineQuery(arg) {
  if (!(arg instanceof order_pb.OrderlineQuery)) {
    throw new Error('Expected argument of type orderline.OrderlineQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orderline_OrderlineQuery(buffer_arg) {
  return order_pb.OrderlineQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_orderline_OrderlineResponse(arg) {
  if (!(arg instanceof order_pb.OrderlineResponse)) {
    throw new Error('Expected argument of type orderline.OrderlineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orderline_OrderlineResponse(buffer_arg) {
  return order_pb.OrderlineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_orderline_UpdateRequest(arg) {
  if (!(arg instanceof order_pb.UpdateRequest)) {
    throw new Error('Expected argument of type orderline.UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orderline_UpdateRequest(buffer_arg) {
  return order_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_orderline_UpdateResponse(arg) {
  if (!(arg instanceof order_pb.UpdateResponse)) {
    throw new Error('Expected argument of type orderline.UpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orderline_UpdateResponse(buffer_arg) {
  return order_pb.UpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderlineService = exports.OrderlineService = {
  getOrderlines: {
    path: '/orderline.Orderline/getOrderlines',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.OrderlineQuery,
    responseType: order_pb.OrderlineResponse,
    requestSerialize: serialize_orderline_OrderlineQuery,
    requestDeserialize: deserialize_orderline_OrderlineQuery,
    responseSerialize: serialize_orderline_OrderlineResponse,
    responseDeserialize: deserialize_orderline_OrderlineResponse,
  },
  getOrderlinesByOrderId: {
    path: '/orderline.Orderline/getOrderlinesByOrderId',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.OrderlineQuery,
    responseType: order_pb.OrderlineResponse,
    requestSerialize: serialize_orderline_OrderlineQuery,
    requestDeserialize: deserialize_orderline_OrderlineQuery,
    responseSerialize: serialize_orderline_OrderlineResponse,
    responseDeserialize: deserialize_orderline_OrderlineResponse,
  },
  deleteOrderline: {
    path: '/orderline.Orderline/deleteOrderline',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.DeleteRequest,
    responseType: order_pb.DeleteResponse,
    requestSerialize: serialize_orderline_DeleteRequest,
    requestDeserialize: deserialize_orderline_DeleteRequest,
    responseSerialize: serialize_orderline_DeleteResponse,
    responseDeserialize: deserialize_orderline_DeleteResponse,
  },
  createOrderline: {
    path: '/orderline.Orderline/createOrderline',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.CreateRequest,
    responseType: order_pb.CreateResponse,
    requestSerialize: serialize_orderline_CreateRequest,
    requestDeserialize: deserialize_orderline_CreateRequest,
    responseSerialize: serialize_orderline_CreateResponse,
    responseDeserialize: deserialize_orderline_CreateResponse,
  },
  updateOrderline: {
    path: '/orderline.Orderline/updateOrderline',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.UpdateRequest,
    responseType: order_pb.UpdateResponse,
    requestSerialize: serialize_orderline_UpdateRequest,
    requestDeserialize: deserialize_orderline_UpdateRequest,
    responseSerialize: serialize_orderline_UpdateResponse,
    responseDeserialize: deserialize_orderline_UpdateResponse,
  },
};

exports.OrderlineClient = grpc.makeGenericClientConstructor(OrderlineService);
