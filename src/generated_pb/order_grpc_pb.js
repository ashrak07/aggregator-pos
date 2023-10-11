// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var order_pb = require('./order_pb.js');

function serialize_order_CreateRequest(arg) {
  if (!(arg instanceof order_pb.CreateRequest)) {
    throw new Error('Expected argument of type order.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CreateRequest(buffer_arg) {
  return order_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_CreateResponse(arg) {
  if (!(arg instanceof order_pb.CreateResponse)) {
    throw new Error('Expected argument of type order.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CreateResponse(buffer_arg) {
  return order_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_DeleteRequest(arg) {
  if (!(arg instanceof order_pb.DeleteRequest)) {
    throw new Error('Expected argument of type order.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_DeleteRequest(buffer_arg) {
  return order_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_DeleteResponse(arg) {
  if (!(arg instanceof order_pb.DeleteResponse)) {
    throw new Error('Expected argument of type order.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_DeleteResponse(buffer_arg) {
  return order_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_OrderQuery(arg) {
  if (!(arg instanceof order_pb.OrderQuery)) {
    throw new Error('Expected argument of type order.OrderQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_OrderQuery(buffer_arg) {
  return order_pb.OrderQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_OrderResponse(arg) {
  if (!(arg instanceof order_pb.OrderResponse)) {
    throw new Error('Expected argument of type order.OrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_OrderResponse(buffer_arg) {
  return order_pb.OrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_UpdateRequest(arg) {
  if (!(arg instanceof order_pb.UpdateRequest)) {
    throw new Error('Expected argument of type order.UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_UpdateRequest(buffer_arg) {
  return order_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_UpdateResponse(arg) {
  if (!(arg instanceof order_pb.UpdateResponse)) {
    throw new Error('Expected argument of type order.UpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_UpdateResponse(buffer_arg) {
  return order_pb.UpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderService = exports.OrderService = {
  getOrders: {
    path: '/order.Order/getOrders',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.OrderQuery,
    responseType: order_pb.OrderResponse,
    requestSerialize: serialize_order_OrderQuery,
    requestDeserialize: deserialize_order_OrderQuery,
    responseSerialize: serialize_order_OrderResponse,
    responseDeserialize: deserialize_order_OrderResponse,
  },
  getOrdersByCreateUid: {
    path: '/order.Order/getOrdersByCreateUid',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.OrderQuery,
    responseType: order_pb.OrderResponse,
    requestSerialize: serialize_order_OrderQuery,
    requestDeserialize: deserialize_order_OrderQuery,
    responseSerialize: serialize_order_OrderResponse,
    responseDeserialize: deserialize_order_OrderResponse,
  },
  deleteOrder: {
    path: '/order.Order/deleteOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.DeleteRequest,
    responseType: order_pb.DeleteResponse,
    requestSerialize: serialize_order_DeleteRequest,
    requestDeserialize: deserialize_order_DeleteRequest,
    responseSerialize: serialize_order_DeleteResponse,
    responseDeserialize: deserialize_order_DeleteResponse,
  },
  createOrder: {
    path: '/order.Order/createOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.CreateRequest,
    responseType: order_pb.CreateResponse,
    requestSerialize: serialize_order_CreateRequest,
    requestDeserialize: deserialize_order_CreateRequest,
    responseSerialize: serialize_order_CreateResponse,
    responseDeserialize: deserialize_order_CreateResponse,
  },
  updateOrder: {
    path: '/order.Order/updateOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.UpdateRequest,
    responseType: order_pb.UpdateResponse,
    requestSerialize: serialize_order_UpdateRequest,
    requestDeserialize: deserialize_order_UpdateRequest,
    responseSerialize: serialize_order_UpdateResponse,
    responseDeserialize: deserialize_order_UpdateResponse,
  },
};

exports.OrderClient = grpc.makeGenericClientConstructor(OrderService);
