// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var base_pb = require('./base_pb.js');

function serialize_base_AllCurrencies(arg) {
  if (!(arg instanceof base_pb.AllCurrencies)) {
    throw new Error('Expected argument of type base.AllCurrencies');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_base_AllCurrencies(buffer_arg) {
  return base_pb.AllCurrencies.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_base_AllCurrencyRates(arg) {
  if (!(arg instanceof base_pb.AllCurrencyRates)) {
    throw new Error('Expected argument of type base.AllCurrencyRates');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_base_AllCurrencyRates(buffer_arg) {
  return base_pb.AllCurrencyRates.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_base_CreateCurrencyRequest(arg) {
  if (!(arg instanceof base_pb.CreateCurrencyRequest)) {
    throw new Error('Expected argument of type base.CreateCurrencyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_base_CreateCurrencyRequest(buffer_arg) {
  return base_pb.CreateCurrencyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_base_CreateCurrencyResponse(arg) {
  if (!(arg instanceof base_pb.CreateCurrencyResponse)) {
    throw new Error('Expected argument of type base.CreateCurrencyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_base_CreateCurrencyResponse(buffer_arg) {
  return base_pb.CreateCurrencyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_base_CurrencyRateRequest(arg) {
  if (!(arg instanceof base_pb.CurrencyRateRequest)) {
    throw new Error('Expected argument of type base.CurrencyRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_base_CurrencyRateRequest(buffer_arg) {
  return base_pb.CurrencyRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_base_CurrencyRequest(arg) {
  if (!(arg instanceof base_pb.CurrencyRequest)) {
    throw new Error('Expected argument of type base.CurrencyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_base_CurrencyRequest(buffer_arg) {
  return base_pb.CurrencyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var BaseService = exports.BaseService = {
  getCurrencies: {
    path: '/base.Base/GetCurrencies',
    requestStream: false,
    responseStream: false,
    requestType: base_pb.CurrencyRequest,
    responseType: base_pb.AllCurrencies,
    requestSerialize: serialize_base_CurrencyRequest,
    requestDeserialize: deserialize_base_CurrencyRequest,
    responseSerialize: serialize_base_AllCurrencies,
    responseDeserialize: deserialize_base_AllCurrencies,
  },
  getCurrencyRates: {
    path: '/base.Base/GetCurrencyRates',
    requestStream: false,
    responseStream: false,
    requestType: base_pb.CurrencyRateRequest,
    responseType: base_pb.AllCurrencyRates,
    requestSerialize: serialize_base_CurrencyRateRequest,
    requestDeserialize: deserialize_base_CurrencyRateRequest,
    responseSerialize: serialize_base_AllCurrencyRates,
    responseDeserialize: deserialize_base_AllCurrencyRates,
  },
  createCurrency: {
    path: '/base.Base/CreateCurrency',
    requestStream: false,
    responseStream: false,
    requestType: base_pb.CreateCurrencyRequest,
    responseType: base_pb.CreateCurrencyResponse,
    requestSerialize: serialize_base_CreateCurrencyRequest,
    requestDeserialize: deserialize_base_CreateCurrencyRequest,
    responseSerialize: serialize_base_CreateCurrencyResponse,
    responseDeserialize: deserialize_base_CreateCurrencyResponse,
  },
};

exports.BaseClient = grpc.makeGenericClientConstructor(BaseService);
