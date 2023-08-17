// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ticket_pb = require('./ticket_pb.js');

function serialize_ticket_CreateTicketRequest(arg) {
  if (!(arg instanceof ticket_pb.CreateTicketRequest)) {
    throw new Error('Expected argument of type ticket.CreateTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_CreateTicketRequest(buffer_arg) {
  return ticket_pb.CreateTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_CreateTicketResponse(arg) {
  if (!(arg instanceof ticket_pb.CreateTicketResponse)) {
    throw new Error('Expected argument of type ticket.CreateTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_CreateTicketResponse(buffer_arg) {
  return ticket_pb.CreateTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_EntryRequest(arg) {
  if (!(arg instanceof ticket_pb.EntryRequest)) {
    throw new Error('Expected argument of type ticket.EntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_EntryRequest(buffer_arg) {
  return ticket_pb.EntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_EntryResponse(arg) {
  if (!(arg instanceof ticket_pb.EntryResponse)) {
    throw new Error('Expected argument of type ticket.EntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_EntryResponse(buffer_arg) {
  return ticket_pb.EntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_NumberOfTicketsRequest(arg) {
  if (!(arg instanceof ticket_pb.NumberOfTicketsRequest)) {
    throw new Error('Expected argument of type ticket.NumberOfTicketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_NumberOfTicketsRequest(buffer_arg) {
  return ticket_pb.NumberOfTicketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_NumberOfTicketsResponse(arg) {
  if (!(arg instanceof ticket_pb.NumberOfTicketsResponse)) {
    throw new Error('Expected argument of type ticket.NumberOfTicketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_NumberOfTicketsResponse(buffer_arg) {
  return ticket_pb.NumberOfTicketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_TicketQuery(arg) {
  if (!(arg instanceof ticket_pb.TicketQuery)) {
    throw new Error('Expected argument of type ticket.TicketQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketQuery(buffer_arg) {
  return ticket_pb.TicketQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_TicketRequest(arg) {
  if (!(arg instanceof ticket_pb.TicketRequest)) {
    throw new Error('Expected argument of type ticket.TicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketRequest(buffer_arg) {
  return ticket_pb.TicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_TicketResponse(arg) {
  if (!(arg instanceof ticket_pb.TicketResponse)) {
    throw new Error('Expected argument of type ticket.TicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketResponse(buffer_arg) {
  return ticket_pb.TicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TicketService = exports.TicketService = {
  createTicket: {
    path: '/ticket.Ticket/CreateTicket',
    requestStream: false,
    responseStream: false,
    requestType: ticket_pb.CreateTicketRequest,
    responseType: ticket_pb.CreateTicketResponse,
    requestSerialize: serialize_ticket_CreateTicketRequest,
    requestDeserialize: deserialize_ticket_CreateTicketRequest,
    responseSerialize: serialize_ticket_CreateTicketResponse,
    responseDeserialize: deserialize_ticket_CreateTicketResponse,
  },
  getTickets: {
    path: '/ticket.Ticket/GetTickets',
    requestStream: false,
    responseStream: true,
    requestType: ticket_pb.TicketQuery,
    responseType: ticket_pb.TicketResponse,
    requestSerialize: serialize_ticket_TicketQuery,
    requestDeserialize: deserialize_ticket_TicketQuery,
    responseSerialize: serialize_ticket_TicketResponse,
    responseDeserialize: deserialize_ticket_TicketResponse,
  },
  getTicketById: {
    path: '/ticket.Ticket/GetTicketById',
    requestStream: false,
    responseStream: false,
    requestType: ticket_pb.TicketRequest,
    responseType: ticket_pb.TicketResponse,
    requestSerialize: serialize_ticket_TicketRequest,
    requestDeserialize: deserialize_ticket_TicketRequest,
    responseSerialize: serialize_ticket_TicketResponse,
    responseDeserialize: deserialize_ticket_TicketResponse,
  },
  getNumberOfTicketsByTypeId: {
    path: '/ticket.Ticket/GetNumberOfTicketsByTypeId',
    requestStream: false,
    responseStream: false,
    requestType: ticket_pb.NumberOfTicketsRequest,
    responseType: ticket_pb.NumberOfTicketsResponse,
    requestSerialize: serialize_ticket_NumberOfTicketsRequest,
    requestDeserialize: deserialize_ticket_NumberOfTicketsRequest,
    responseSerialize: serialize_ticket_NumberOfTicketsResponse,
    responseDeserialize: deserialize_ticket_NumberOfTicketsResponse,
  },
  getEntry: {
    path: '/ticket.Ticket/GetEntry',
    requestStream: false,
    responseStream: false,
    requestType: ticket_pb.EntryRequest,
    responseType: ticket_pb.EntryResponse,
    requestSerialize: serialize_ticket_EntryRequest,
    requestDeserialize: deserialize_ticket_EntryRequest,
    responseSerialize: serialize_ticket_EntryResponse,
    responseDeserialize: deserialize_ticket_EntryResponse,
  },
};

exports.TicketClient = grpc.makeGenericClientConstructor(TicketService);
