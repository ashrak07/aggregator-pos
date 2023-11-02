// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var partner_pb = require('./partner_pb.js');

function serialize_user_CreatePartnerResponse(arg) {
  if (!(arg instanceof partner_pb.CreatePartnerResponse)) {
    throw new Error('Expected argument of type user.CreatePartnerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreatePartnerResponse(buffer_arg) {
  return partner_pb.CreatePartnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetByFieldRequest(arg) {
  if (!(arg instanceof partner_pb.GetByFieldRequest)) {
    throw new Error('Expected argument of type user.GetByFieldRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetByFieldRequest(buffer_arg) {
  return partner_pb.GetByFieldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_PartnerInformations(arg) {
  if (!(arg instanceof partner_pb.PartnerInformations)) {
    throw new Error('Expected argument of type user.PartnerInformations');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_PartnerInformations(buffer_arg) {
  return partner_pb.PartnerInformations.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_PartnerModels(arg) {
  if (!(arg instanceof partner_pb.PartnerModels)) {
    throw new Error('Expected argument of type user.PartnerModels');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_PartnerModels(buffer_arg) {
  return partner_pb.PartnerModels.deserializeBinary(new Uint8Array(buffer_arg));
}


var PartnerService = exports.PartnerService = {
  createPartner: {
    path: '/user.Partner/CreatePartner',
    requestStream: false,
    responseStream: false,
    requestType: partner_pb.PartnerInformations,
    responseType: partner_pb.CreatePartnerResponse,
    requestSerialize: serialize_user_PartnerInformations,
    requestDeserialize: deserialize_user_PartnerInformations,
    responseSerialize: serialize_user_CreatePartnerResponse,
    responseDeserialize: deserialize_user_CreatePartnerResponse,
  },
  getPartnerByField: {
    path: '/user.Partner/GetPartnerByField',
    requestStream: false,
    responseStream: false,
    requestType: partner_pb.GetByFieldRequest,
    responseType: partner_pb.PartnerModels,
    requestSerialize: serialize_user_GetByFieldRequest,
    requestDeserialize: deserialize_user_GetByFieldRequest,
    responseSerialize: serialize_user_PartnerModels,
    responseDeserialize: deserialize_user_PartnerModels,
  },
};

exports.PartnerClient = grpc.makeGenericClientConstructor(PartnerService);
