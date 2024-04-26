// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_CreatePlannerResponse(arg) {
  if (!(arg instanceof user_pb.CreatePlannerResponse)) {
    throw new Error('Expected argument of type user.CreatePlannerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreatePlannerResponse(buffer_arg) {
  return user_pb.CreatePlannerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_user_PlannerInformations(arg) {
  if (!(arg instanceof user_pb.PlannerInformations)) {
    throw new Error('Expected argument of type user.PlannerInformations');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_PlannerInformations(buffer_arg) {
  return user_pb.PlannerInformations.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_PlannerModels(arg) {
  if (!(arg instanceof user_pb.PlannerModels)) {
    throw new Error('Expected argument of type user.PlannerModels');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_PlannerModels(buffer_arg) {
  return user_pb.PlannerModels.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_PlannerQuery(arg) {
  if (!(arg instanceof user_pb.PlannerQuery)) {
    throw new Error('Expected argument of type user.PlannerQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_PlannerQuery(buffer_arg) {
  return user_pb.PlannerQuery.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_user_UserLogin(arg) {
  if (!(arg instanceof user_pb.UserLogin)) {
    throw new Error('Expected argument of type user.UserLogin');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserLogin(buffer_arg) {
  return user_pb.UserLogin.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserLoginResponse(arg) {
  if (!(arg instanceof user_pb.UserLoginResponse)) {
    throw new Error('Expected argument of type user.UserLoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserLoginResponse(buffer_arg) {
  return user_pb.UserLoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserModel(arg) {
  if (!(arg instanceof user_pb.UserModel)) {
    throw new Error('Expected argument of type user.UserModel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserModel(buffer_arg) {
  return user_pb.UserModel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UsersGroupRequest(arg) {
  if (!(arg instanceof user_pb.UsersGroupRequest)) {
    throw new Error('Expected argument of type user.UsersGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UsersGroupRequest(buffer_arg) {
  return user_pb.UsersGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UsersGroupResponse(arg) {
  if (!(arg instanceof user_pb.UsersGroupResponse)) {
    throw new Error('Expected argument of type user.UsersGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UsersGroupResponse(buffer_arg) {
  return user_pb.UsersGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUserById: {
    path: '/user.UserService/getUserById',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserId,
    responseType: user_pb.UserModel,
    requestSerialize: serialize_user_UserId,
    requestDeserialize: deserialize_user_UserId,
    responseSerialize: serialize_user_UserModel,
    responseDeserialize: deserialize_user_UserModel,
  },
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
  login: {
    path: '/user.UserService/login',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserLogin,
    responseType: user_pb.UserLoginResponse,
    requestSerialize: serialize_user_UserLogin,
    requestDeserialize: deserialize_user_UserLogin,
    responseSerialize: serialize_user_UserLoginResponse,
    responseDeserialize: deserialize_user_UserLoginResponse,
  },
  createPlanner: {
    path: '/user.UserService/CreatePlanner',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.PlannerInformations,
    responseType: user_pb.CreatePlannerResponse,
    requestSerialize: serialize_user_PlannerInformations,
    requestDeserialize: deserialize_user_PlannerInformations,
    responseSerialize: serialize_user_CreatePlannerResponse,
    responseDeserialize: deserialize_user_CreatePlannerResponse,
  },
  getPlanners: {
    path: '/user.UserService/GetPlanners',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.PlannerQuery,
    responseType: user_pb.PlannerModels,
    requestSerialize: serialize_user_PlannerQuery,
    requestDeserialize: deserialize_user_PlannerQuery,
    responseSerialize: serialize_user_PlannerModels,
    responseDeserialize: deserialize_user_PlannerModels,
  },
  getUsersGroup: {
    path: '/user.UserService/GetUsersGroup',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UsersGroupRequest,
    responseType: user_pb.UsersGroupResponse,
    requestSerialize: serialize_user_UsersGroupRequest,
    requestDeserialize: deserialize_user_UsersGroupRequest,
    responseSerialize: serialize_user_UsersGroupResponse,
    responseDeserialize: deserialize_user_UsersGroupResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
