// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ticket_pb = require('./ticket_pb.js');

function serialize_ticket_CreateOrderTicketResponse(arg) {
  if (!(arg instanceof ticket_pb.CreateOrderTicketResponse)) {
    throw new Error('Expected argument of type ticket.CreateOrderTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_CreateOrderTicketResponse(buffer_arg) {
  return ticket_pb.CreateOrderTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_ticket_Order(arg) {
  if (!(arg instanceof ticket_pb.Order)) {
    throw new Error('Expected argument of type ticket.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_Order(buffer_arg) {
  return ticket_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_TicketIdRequest(arg) {
  if (!(arg instanceof ticket_pb.TicketIdRequest)) {
    throw new Error('Expected argument of type ticket.TicketIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketIdRequest(buffer_arg) {
  return ticket_pb.TicketIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_TicketPdfRequest(arg) {
  if (!(arg instanceof ticket_pb.TicketPdfRequest)) {
    throw new Error('Expected argument of type ticket.TicketPdfRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketPdfRequest(buffer_arg) {
  return ticket_pb.TicketPdfRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_TicketPdfResponse(arg) {
  if (!(arg instanceof ticket_pb.TicketPdfResponse)) {
    throw new Error('Expected argument of type ticket.TicketPdfResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketPdfResponse(buffer_arg) {
  return ticket_pb.TicketPdfResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ticket_TicketQueryGeneric(arg) {
  if (!(arg instanceof ticket_pb.TicketQueryGeneric)) {
    throw new Error('Expected argument of type ticket.TicketQueryGeneric');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketQueryGeneric(buffer_arg) {
  return ticket_pb.TicketQueryGeneric.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ticket_TicketSaleQuery(arg) {
  if (!(arg instanceof ticket_pb.TicketSaleQuery)) {
    throw new Error('Expected argument of type ticket.TicketSaleQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketSaleQuery(buffer_arg) {
  return ticket_pb.TicketSaleQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_TicketSaleResponse(arg) {
  if (!(arg instanceof ticket_pb.TicketSaleResponse)) {
    throw new Error('Expected argument of type ticket.TicketSaleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketSaleResponse(buffer_arg) {
  return ticket_pb.TicketSaleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_TicketSoldResponse(arg) {
  if (!(arg instanceof ticket_pb.TicketSoldResponse)) {
    throw new Error('Expected argument of type ticket.TicketSoldResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketSoldResponse(buffer_arg) {
  return ticket_pb.TicketSoldResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_TicketTypeByEventRequest(arg) {
  if (!(arg instanceof ticket_pb.TicketTypeByEventRequest)) {
    throw new Error('Expected argument of type ticket.TicketTypeByEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketTypeByEventRequest(buffer_arg) {
  return ticket_pb.TicketTypeByEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_TicketlistQuery(arg) {
  if (!(arg instanceof ticket_pb.TicketlistQuery)) {
    throw new Error('Expected argument of type ticket.TicketlistQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ticket_TicketlistQuery(buffer_arg) {
  return ticket_pb.TicketlistQuery.deserializeBinary(new Uint8Array(buffer_arg));
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
    responseStream: false,
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
    requestType: ticket_pb.TicketIdRequest,
    responseType: ticket_pb.TicketResponse,
    requestSerialize: serialize_ticket_TicketIdRequest,
    requestDeserialize: deserialize_ticket_TicketIdRequest,
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
  checkQrCode: {
    path: '/ticket.Ticket/CheckQrCode',
    requestStream: false,
    responseStream: false,
    requestType: ticket_pb.EntryRequest,
    responseType: ticket_pb.EntryResponse,
    requestSerialize: serialize_ticket_EntryRequest,
    requestDeserialize: deserialize_ticket_EntryRequest,
    responseSerialize: serialize_ticket_EntryResponse,
    responseDeserialize: deserialize_ticket_EntryResponse,
  },
  createOrderTicket: {
    path: '/ticket.Ticket/CreateOrderTicket',
    requestStream: false,
    responseStream: false,
    requestType: ticket_pb.Order,
    responseType: ticket_pb.CreateOrderTicketResponse,
    requestSerialize: serialize_ticket_Order,
    requestDeserialize: deserialize_ticket_Order,
    responseSerialize: serialize_ticket_CreateOrderTicketResponse,
    responseDeserialize: deserialize_ticket_CreateOrderTicketResponse,
  },
  ticketList: {
    path: '/ticket.Ticket/TicketList',
    requestStream: false,
    responseStream: false,
    requestType: ticket_pb.TicketlistQuery,
    responseType: ticket_pb.TicketResponse,
    requestSerialize: serialize_ticket_TicketlistQuery,
    requestDeserialize: deserialize_ticket_TicketlistQuery,
    responseSerialize: serialize_ticket_TicketResponse,
    responseDeserialize: deserialize_ticket_TicketResponse,
  },
  generateTicketPdf: {
    path: '/ticket.Ticket/GenerateTicketPdf',
    requestStream: false,
    responseStream: false,
    requestType: ticket_pb.TicketPdfRequest,
    responseType: ticket_pb.TicketPdfResponse,
    requestSerialize: serialize_ticket_TicketPdfRequest,
    requestDeserialize: deserialize_ticket_TicketPdfRequest,
    responseSerialize: serialize_ticket_TicketPdfResponse,
    responseDeserialize: deserialize_ticket_TicketPdfResponse,
  },
  getTicketSale: {
    path: '/ticket.Ticket/GetTicketSale',
    requestStream: false,
    responseStream: false,
    requestType: ticket_pb.TicketSaleQuery,
    responseType: ticket_pb.TicketSaleResponse,
    requestSerialize: serialize_ticket_TicketSaleQuery,
    requestDeserialize: deserialize_ticket_TicketSaleQuery,
    responseSerialize: serialize_ticket_TicketSaleResponse,
    responseDeserialize: deserialize_ticket_TicketSaleResponse,
  },
  getTicketsGeneric: {
    path: '/ticket.Ticket/GetTicketsGeneric',
    requestStream: false,
    responseStream: false,
    requestType: ticket_pb.TicketQueryGeneric,
    responseType: ticket_pb.TicketResponse,
    requestSerialize: serialize_ticket_TicketQueryGeneric,
    requestDeserialize: deserialize_ticket_TicketQueryGeneric,
    responseSerialize: serialize_ticket_TicketResponse,
    responseDeserialize: deserialize_ticket_TicketResponse,
  },
  getTicketsList: {
    path: '/ticket.Ticket/GetTicketsList',
    requestStream: false,
    responseStream: false,
    requestType: ticket_pb.TicketTypeByEventRequest,
    responseType: ticket_pb.TicketSoldResponse,
    requestSerialize: serialize_ticket_TicketTypeByEventRequest,
    requestDeserialize: deserialize_ticket_TicketTypeByEventRequest,
    responseSerialize: serialize_ticket_TicketSoldResponse,
    responseDeserialize: deserialize_ticket_TicketSoldResponse,
  },
};

exports.TicketClient = grpc.makeGenericClientConstructor(TicketService);
