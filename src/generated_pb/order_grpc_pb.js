// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var order_pb = require('./order_pb.js');

function serialize_order_ApplyQuery(arg) {
  if (!(arg instanceof order_pb.ApplyQuery)) {
    throw new Error('Expected argument of type order.ApplyQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_ApplyQuery(buffer_arg) {
  return order_pb.ApplyQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_ApplyResponse(arg) {
  if (!(arg instanceof order_pb.ApplyResponse)) {
    throw new Error('Expected argument of type order.ApplyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_ApplyResponse(buffer_arg) {
  return order_pb.ApplyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_CheckQuery(arg) {
  if (!(arg instanceof order_pb.CheckQuery)) {
    throw new Error('Expected argument of type order.CheckQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CheckQuery(buffer_arg) {
  return order_pb.CheckQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_CheckResponse(arg) {
  if (!(arg instanceof order_pb.CheckResponse)) {
    throw new Error('Expected argument of type order.CheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CheckResponse(buffer_arg) {
  return order_pb.CheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_order_FindRequest(arg) {
  if (!(arg instanceof order_pb.FindRequest)) {
    throw new Error('Expected argument of type order.FindRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_FindRequest(buffer_arg) {
  return order_pb.FindRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_GetQuery(arg) {
  if (!(arg instanceof order_pb.GetQuery)) {
    throw new Error('Expected argument of type order.GetQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_GetQuery(buffer_arg) {
  return order_pb.GetQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_MaxUsageResponse(arg) {
  if (!(arg instanceof order_pb.MaxUsageResponse)) {
    throw new Error('Expected argument of type order.MaxUsageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_MaxUsageResponse(buffer_arg) {
  return order_pb.MaxUsageResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_order_PosResponse(arg) {
  if (!(arg instanceof order_pb.PosResponse)) {
    throw new Error('Expected argument of type order.PosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_PosResponse(buffer_arg) {
  return order_pb.PosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_Response(arg) {
  if (!(arg instanceof order_pb.Response)) {
    throw new Error('Expected argument of type order.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_Response(buffer_arg) {
  return order_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_order_WebsiteResponse(arg) {
  if (!(arg instanceof order_pb.WebsiteResponse)) {
    throw new Error('Expected argument of type order.WebsiteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_WebsiteResponse(buffer_arg) {
  return order_pb.WebsiteResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  getMaximumUsage: {
    path: '/order.Order/getMaximumUsage',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.FindRequest,
    responseType: order_pb.MaxUsageResponse,
    requestSerialize: serialize_order_FindRequest,
    requestDeserialize: deserialize_order_FindRequest,
    responseSerialize: serialize_order_MaxUsageResponse,
    responseDeserialize: deserialize_order_MaxUsageResponse,
  },
  getWebsiteDiscount: {
    path: '/order.Order/getWebsiteDiscount',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.FindRequest,
    responseType: order_pb.WebsiteResponse,
    requestSerialize: serialize_order_FindRequest,
    requestDeserialize: deserialize_order_FindRequest,
    responseSerialize: serialize_order_WebsiteResponse,
    responseDeserialize: deserialize_order_WebsiteResponse,
  },
  getMontantPosDiscount: {
    path: '/order.Order/getMontantPosDiscount',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.FindRequest,
    responseType: order_pb.PosResponse,
    requestSerialize: serialize_order_FindRequest,
    requestDeserialize: deserialize_order_FindRequest,
    responseSerialize: serialize_order_PosResponse,
    responseDeserialize: deserialize_order_PosResponse,
  },
  getMontantRemise: {
    path: '/order.Order/getMontantRemise',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.FindRequest,
    responseType: order_pb.OrderResponse,
    requestSerialize: serialize_order_FindRequest,
    requestDeserialize: deserialize_order_FindRequest,
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
  findOrder: {
    path: '/order.Order/findOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.FindRequest,
    responseType: order_pb.OrderResponse,
    requestSerialize: serialize_order_FindRequest,
    requestDeserialize: deserialize_order_FindRequest,
    responseSerialize: serialize_order_OrderResponse,
    responseDeserialize: deserialize_order_OrderResponse,
  },
  checkDiscount: {
    path: '/order.Order/checkDiscount',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.CheckQuery,
    responseType: order_pb.CheckResponse,
    requestSerialize: serialize_order_CheckQuery,
    requestDeserialize: deserialize_order_CheckQuery,
    responseSerialize: serialize_order_CheckResponse,
    responseDeserialize: deserialize_order_CheckResponse,
  },
  applyPromocode: {
    path: '/order.Order/applyPromocode',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.ApplyQuery,
    responseType: order_pb.ApplyResponse,
    requestSerialize: serialize_order_ApplyQuery,
    requestDeserialize: deserialize_order_ApplyQuery,
    responseSerialize: serialize_order_ApplyResponse,
    responseDeserialize: deserialize_order_ApplyResponse,
  },
  getOrderById: {
    path: '/order.Order/getOrderById',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.GetQuery,
    responseType: order_pb.Response,
    requestSerialize: serialize_order_GetQuery,
    requestDeserialize: deserialize_order_GetQuery,
    responseSerialize: serialize_order_Response,
    responseDeserialize: deserialize_order_Response,
  },
  filterOrder: {
    path: '/order.Order/filterOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.FindRequest,
    responseType: order_pb.OrderResponse,
    requestSerialize: serialize_order_FindRequest,
    requestDeserialize: deserialize_order_FindRequest,
    responseSerialize: serialize_order_OrderResponse,
    responseDeserialize: deserialize_order_OrderResponse,
  },
};

exports.OrderClient = grpc.makeGenericClientConstructor(OrderService);
