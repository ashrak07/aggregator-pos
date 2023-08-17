// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var badge_pb = require('./badge_pb.js');

function serialize_badge_BadgeQuery(arg) {
  if (!(arg instanceof badge_pb.BadgeQuery)) {
    throw new Error('Expected argument of type badge.BadgeQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_badge_BadgeQuery(buffer_arg) {
  return badge_pb.BadgeQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_badge_BadgeRequest(arg) {
  if (!(arg instanceof badge_pb.BadgeRequest)) {
    throw new Error('Expected argument of type badge.BadgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_badge_BadgeRequest(buffer_arg) {
  return badge_pb.BadgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_badge_BadgeResponse(arg) {
  if (!(arg instanceof badge_pb.BadgeResponse)) {
    throw new Error('Expected argument of type badge.BadgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_badge_BadgeResponse(buffer_arg) {
  return badge_pb.BadgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_badge_CreateBadgeRequest(arg) {
  if (!(arg instanceof badge_pb.CreateBadgeRequest)) {
    throw new Error('Expected argument of type badge.CreateBadgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_badge_CreateBadgeRequest(buffer_arg) {
  return badge_pb.CreateBadgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_badge_CreateBadgeResponse(arg) {
  if (!(arg instanceof badge_pb.CreateBadgeResponse)) {
    throw new Error('Expected argument of type badge.CreateBadgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_badge_CreateBadgeResponse(buffer_arg) {
  return badge_pb.CreateBadgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BadgeService = exports.BadgeService = {
  createBadge: {
    path: '/badge.Badge/CreateBadge',
    requestStream: false,
    responseStream: false,
    requestType: badge_pb.CreateBadgeRequest,
    responseType: badge_pb.CreateBadgeResponse,
    requestSerialize: serialize_badge_CreateBadgeRequest,
    requestDeserialize: deserialize_badge_CreateBadgeRequest,
    responseSerialize: serialize_badge_CreateBadgeResponse,
    responseDeserialize: deserialize_badge_CreateBadgeResponse,
  },
  getBadges: {
    path: '/badge.Badge/GetBadges',
    requestStream: false,
    responseStream: true,
    requestType: badge_pb.BadgeQuery,
    responseType: badge_pb.BadgeResponse,
    requestSerialize: serialize_badge_BadgeQuery,
    requestDeserialize: deserialize_badge_BadgeQuery,
    responseSerialize: serialize_badge_BadgeResponse,
    responseDeserialize: deserialize_badge_BadgeResponse,
  },
  getBadgeById: {
    path: '/badge.Badge/GetBadgeById',
    requestStream: false,
    responseStream: false,
    requestType: badge_pb.BadgeRequest,
    responseType: badge_pb.BadgeResponse,
    requestSerialize: serialize_badge_BadgeRequest,
    requestDeserialize: deserialize_badge_BadgeRequest,
    responseSerialize: serialize_badge_BadgeResponse,
    responseDeserialize: deserialize_badge_BadgeResponse,
  },
};

exports.BadgeClient = grpc.makeGenericClientConstructor(BadgeService);
