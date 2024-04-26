// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var shop_pb = require('./shop_pb.js');
var event_pb = require('./event_pb.js');

function serialize_event_EventsInformations(arg) {
  if (!(arg instanceof event_pb.EventsInformations)) {
    throw new Error('Expected argument of type event.EventsInformations');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_EventsInformations(buffer_arg) {
  return event_pb.EventsInformations.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_shop_FindRequest(arg) {
  if (!(arg instanceof shop_pb.FindRequest)) {
    throw new Error('Expected argument of type shop.FindRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_FindRequest(buffer_arg) {
  return shop_pb.FindRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_ListEventRequest(arg) {
  if (!(arg instanceof shop_pb.ListEventRequest)) {
    throw new Error('Expected argument of type shop.ListEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_ListEventRequest(buffer_arg) {
  return shop_pb.ListEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_ListShop(arg) {
  if (!(arg instanceof shop_pb.ListShop)) {
    throw new Error('Expected argument of type shop.ListShop');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_ListShop(buffer_arg) {
  return shop_pb.ListShop.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_ListShopEventIdRequest(arg) {
  if (!(arg instanceof shop_pb.ListShopEventIdRequest)) {
    throw new Error('Expected argument of type shop.ListShopEventIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_ListShopEventIdRequest(buffer_arg) {
  return shop_pb.ListShopEventIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_ListShopRequest(arg) {
  if (!(arg instanceof shop_pb.ListShopRequest)) {
    throw new Error('Expected argument of type shop.ListShopRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_ListShopRequest(buffer_arg) {
  return shop_pb.ListShopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_ListShopUserIdRequest(arg) {
  if (!(arg instanceof shop_pb.ListShopUserIdRequest)) {
    throw new Error('Expected argument of type shop.ListShopUserIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_ListShopUserIdRequest(buffer_arg) {
  return shop_pb.ListShopUserIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
    responseStream: false,
    requestType: shop_pb.ListShopRequest,
    responseType: shop_pb.ListShop,
    requestSerialize: serialize_shop_ListShopRequest,
    requestDeserialize: deserialize_shop_ListShopRequest,
    responseSerialize: serialize_shop_ListShop,
    responseDeserialize: deserialize_shop_ListShop,
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
    responseStream: false,
    requestType: shop_pb.ListShopUserIdRequest,
    responseType: shop_pb.ListShop,
    requestSerialize: serialize_shop_ListShopUserIdRequest,
    requestDeserialize: deserialize_shop_ListShopUserIdRequest,
    responseSerialize: serialize_shop_ListShop,
    responseDeserialize: deserialize_shop_ListShop,
  },
  getShopByEventId: {
    path: '/shop.ShopService/getShopByEventId',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.ListShopEventIdRequest,
    responseType: shop_pb.ListShop,
    requestSerialize: serialize_shop_ListShopEventIdRequest,
    requestDeserialize: deserialize_shop_ListShopEventIdRequest,
    responseSerialize: serialize_shop_ListShop,
    responseDeserialize: deserialize_shop_ListShop,
  },
  getEventByShopId: {
    path: '/shop.ShopService/getEventByShopId',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.ListEventRequest,
    responseType: event_pb.EventsInformations,
    requestSerialize: serialize_shop_ListEventRequest,
    requestDeserialize: deserialize_shop_ListEventRequest,
    responseSerialize: serialize_event_EventsInformations,
    responseDeserialize: deserialize_event_EventsInformations,
  },
  findShop: {
    path: '/shop.ShopService/findShop',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.FindRequest,
    responseType: shop_pb.ListShop,
    requestSerialize: serialize_shop_FindRequest,
    requestDeserialize: deserialize_shop_FindRequest,
    responseSerialize: serialize_shop_ListShop,
    responseDeserialize: deserialize_shop_ListShop,
  },
};

exports.ShopServiceClient = grpc.makeGenericClientConstructor(ShopServiceService);
