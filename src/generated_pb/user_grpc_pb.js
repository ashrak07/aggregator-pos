// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_Message(arg) {
  if (!(arg instanceof user_pb.Message)) {
    throw new Error('Expected argument of type user.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_Message(buffer_arg) {
  return user_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_PasswordUpdate(arg) {
  if (!(arg instanceof user_pb.PasswordUpdate)) {
    throw new Error('Expected argument of type user.PasswordUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_PasswordUpdate(buffer_arg) {
  return user_pb.PasswordUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserCreate(arg) {
  if (!(arg instanceof user_pb.UserCreate)) {
    throw new Error('Expected argument of type user.UserCreate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserCreate(buffer_arg) {
  return user_pb.UserCreate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserId(arg) {
  if (!(arg instanceof user_pb.UserId)) {
    throw new Error('Expected argument of type user.UserId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserId(buffer_arg) {
  return user_pb.UserId.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/user.UserService/getUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserId,
    responseType: user_pb.User,
    requestSerialize: serialize_user_UserId,
    requestDeserialize: deserialize_user_UserId,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  createUser: {
    path: '/user.UserService/createUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserCreate,
    responseType: user_pb.UserId,
    requestSerialize: serialize_user_UserCreate,
    requestDeserialize: deserialize_user_UserCreate,
    responseSerialize: serialize_user_UserId,
    responseDeserialize: deserialize_user_UserId,
  },
  updateUser: {
    path: '/user.UserService/updateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.Message,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_Message,
    responseDeserialize: deserialize_user_Message,
  },
  updatePassword: {
    path: '/user.UserService/updatePassword',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.PasswordUpdate,
    responseType: user_pb.Message,
    requestSerialize: serialize_user_PasswordUpdate,
    requestDeserialize: deserialize_user_PasswordUpdate,
    responseSerialize: serialize_user_Message,
    responseDeserialize: deserialize_user_Message,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
