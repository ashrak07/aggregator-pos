// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var shop_pb = require('./shop_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_EventShopCreate(arg) {
  if (!(arg instanceof shop_pb.EventShopCreate)) {
    throw new Error('Expected argument of type shop.EventShopCreate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_EventShopCreate(buffer_arg) {
  return shop_pb.EventShopCreate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_Message(arg) {
  if (!(arg instanceof shop_pb.Message)) {
    throw new Error('Expected argument of type shop.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_Message(buffer_arg) {
  return shop_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_Shop(arg) {
  if (!(arg instanceof shop_pb.Shop)) {
    throw new Error('Expected argument of type shop.Shop');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_Shop(buffer_arg) {
  return shop_pb.Shop.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_ShopCreate(arg) {
  if (!(arg instanceof shop_pb.ShopCreate)) {
    throw new Error('Expected argument of type shop.ShopCreate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_ShopCreate(buffer_arg) {
  return shop_pb.ShopCreate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_ShopId(arg) {
  if (!(arg instanceof shop_pb.ShopId)) {
    throw new Error('Expected argument of type shop.ShopId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_ShopId(buffer_arg) {
  return shop_pb.ShopId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_UserId(arg) {
  if (!(arg instanceof shop_pb.UserId)) {
    throw new Error('Expected argument of type shop.UserId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_UserId(buffer_arg) {
  return shop_pb.UserId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_UserShopCreate(arg) {
  if (!(arg instanceof shop_pb.UserShopCreate)) {
    throw new Error('Expected argument of type shop.UserShopCreate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_UserShopCreate(buffer_arg) {
  return shop_pb.UserShopCreate.deserializeBinary(new Uint8Array(buffer_arg));
}


var ShopServiceService = exports.ShopServiceService = {
  createShop: {
    path: '/shop.ShopService/createShop',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.ShopCreate,
    responseType: shop_pb.ShopId,
    requestSerialize: serialize_shop_ShopCreate,
    requestDeserialize: deserialize_shop_ShopCreate,
    responseSerialize: serialize_shop_ShopId,
    responseDeserialize: deserialize_shop_ShopId,
  },
  getShop: {
    path: '/shop.ShopService/getShop',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.ShopId,
    responseType: shop_pb.Shop,
    requestSerialize: serialize_shop_ShopId,
    requestDeserialize: deserialize_shop_ShopId,
    responseSerialize: serialize_shop_Shop,
    responseDeserialize: deserialize_shop_Shop,
  },
  listShop: {
    path: '/shop.ShopService/listShop',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: shop_pb.Shop,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_shop_Shop,
    responseDeserialize: deserialize_shop_Shop,
  },
  updateShop: {
    path: '/shop.ShopService/updateShop',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.Shop,
    responseType: shop_pb.ShopId,
    requestSerialize: serialize_shop_Shop,
    requestDeserialize: deserialize_shop_Shop,
    responseSerialize: serialize_shop_ShopId,
    responseDeserialize: deserialize_shop_ShopId,
  },
  createUserShop: {
    path: '/shop.ShopService/createUserShop',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.UserShopCreate,
    responseType: shop_pb.ShopId,
    requestSerialize: serialize_shop_UserShopCreate,
    requestDeserialize: deserialize_shop_UserShopCreate,
    responseSerialize: serialize_shop_ShopId,
    responseDeserialize: deserialize_shop_ShopId,
  },
  deleteUserShop: {
    path: '/shop.ShopService/deleteUserShop',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.ShopId,
    responseType: shop_pb.Message,
    requestSerialize: serialize_shop_ShopId,
    requestDeserialize: deserialize_shop_ShopId,
    responseSerialize: serialize_shop_Message,
    responseDeserialize: deserialize_shop_Message,
  },
  createEventShop: {
    path: '/shop.ShopService/createEventShop',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.EventShopCreate,
    responseType: shop_pb.ShopId,
    requestSerialize: serialize_shop_EventShopCreate,
    requestDeserialize: deserialize_shop_EventShopCreate,
    responseSerialize: serialize_shop_ShopId,
    responseDeserialize: deserialize_shop_ShopId,
  },
  deleteEventShop: {
    path: '/shop.ShopService/deleteEventShop',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.ShopId,
    responseType: shop_pb.Message,
    requestSerialize: serialize_shop_ShopId,
    requestDeserialize: deserialize_shop_ShopId,
    responseSerialize: serialize_shop_Message,
    responseDeserialize: deserialize_shop_Message,
  },
  getShopByUserId: {
    path: '/shop.ShopService/getShopByUserId',
    requestStream: false,
    responseStream: true,
    requestType: shop_pb.UserId,
    responseType: shop_pb.Shop,
    requestSerialize: serialize_shop_UserId,
    requestDeserialize: deserialize_shop_UserId,
    responseSerialize: serialize_shop_Shop,
    responseDeserialize: deserialize_shop_Shop,
  },
};

exports.ShopServiceClient = grpc.makeGenericClientConstructor(ShopServiceService);
