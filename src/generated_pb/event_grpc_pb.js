// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var event_pb = require('./event_pb.js');

function serialize_event_AllEventCategory(arg) {
  if (!(arg instanceof event_pb.AllEventCategory)) {
    throw new Error('Expected argument of type event.AllEventCategory');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_AllEventCategory(buffer_arg) {
  return event_pb.AllEventCategory.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_AllEvents(arg) {
  if (!(arg instanceof event_pb.AllEvents)) {
    throw new Error('Expected argument of type event.AllEvents');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_AllEvents(buffer_arg) {
  return event_pb.AllEvents.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_AllTagsResponse(arg) {
  if (!(arg instanceof event_pb.AllTagsResponse)) {
    throw new Error('Expected argument of type event.AllTagsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_AllTagsResponse(buffer_arg) {
  return event_pb.AllTagsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_CreateEventPlaceRequest(arg) {
  if (!(arg instanceof event_pb.CreateEventPlaceRequest)) {
    throw new Error('Expected argument of type event.CreateEventPlaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_CreateEventPlaceRequest(buffer_arg) {
  return event_pb.CreateEventPlaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_CreateEventPlaceResponse(arg) {
  if (!(arg instanceof event_pb.CreateEventPlaceResponse)) {
    throw new Error('Expected argument of type event.CreateEventPlaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_CreateEventPlaceResponse(buffer_arg) {
  return event_pb.CreateEventPlaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_DeleteEventRequest(arg) {
  if (!(arg instanceof event_pb.DeleteEventRequest)) {
    throw new Error('Expected argument of type event.DeleteEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_DeleteEventRequest(buffer_arg) {
  return event_pb.DeleteEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_DeleteEventResponse(arg) {
  if (!(arg instanceof event_pb.DeleteEventResponse)) {
    throw new Error('Expected argument of type event.DeleteEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_DeleteEventResponse(buffer_arg) {
  return event_pb.DeleteEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_EventsInformations(arg) {
  if (!(arg instanceof event_pb.EventsInformations)) {
    throw new Error('Expected argument of type event.EventsInformations');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_EventsInformations(buffer_arg) {
  return event_pb.EventsInformations.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_GetEventCategoryRequest(arg) {
  if (!(arg instanceof event_pb.GetEventCategoryRequest)) {
    throw new Error('Expected argument of type event.GetEventCategoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetEventCategoryRequest(buffer_arg) {
  return event_pb.GetEventCategoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_GetEventRequest(arg) {
  if (!(arg instanceof event_pb.GetEventRequest)) {
    throw new Error('Expected argument of type event.GetEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetEventRequest(buffer_arg) {
  return event_pb.GetEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_GetEventsByIdsRequest(arg) {
  if (!(arg instanceof event_pb.GetEventsByIdsRequest)) {
    throw new Error('Expected argument of type event.GetEventsByIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetEventsByIdsRequest(buffer_arg) {
  return event_pb.GetEventsByIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_GetTagsRequest(arg) {
  if (!(arg instanceof event_pb.GetTagsRequest)) {
    throw new Error('Expected argument of type event.GetTagsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetTagsRequest(buffer_arg) {
  return event_pb.GetTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_GetTicketTypeRequest(arg) {
  if (!(arg instanceof event_pb.GetTicketTypeRequest)) {
    throw new Error('Expected argument of type event.GetTicketTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetTicketTypeRequest(buffer_arg) {
  return event_pb.GetTicketTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_GetTicketTypesResponse(arg) {
  if (!(arg instanceof event_pb.GetTicketTypesResponse)) {
    throw new Error('Expected argument of type event.GetTicketTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetTicketTypesResponse(buffer_arg) {
  return event_pb.GetTicketTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EventService = exports.EventService = {
  getEvents: {
    path: '/event.Event/GetEvents',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetEventRequest,
    responseType: event_pb.AllEvents,
    requestSerialize: serialize_event_GetEventRequest,
    requestDeserialize: deserialize_event_GetEventRequest,
    responseSerialize: serialize_event_AllEvents,
    responseDeserialize: deserialize_event_AllEvents,
  },
  getEventCategories: {
    path: '/event.Event/GetEventCategories',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetEventCategoryRequest,
    responseType: event_pb.AllEventCategory,
    requestSerialize: serialize_event_GetEventCategoryRequest,
    requestDeserialize: deserialize_event_GetEventCategoryRequest,
    responseSerialize: serialize_event_AllEventCategory,
    responseDeserialize: deserialize_event_AllEventCategory,
  },
  deleteEvent: {
    path: '/event.Event/DeleteEvent',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.DeleteEventRequest,
    responseType: event_pb.DeleteEventResponse,
    requestSerialize: serialize_event_DeleteEventRequest,
    requestDeserialize: deserialize_event_DeleteEventRequest,
    responseSerialize: serialize_event_DeleteEventResponse,
    responseDeserialize: deserialize_event_DeleteEventResponse,
  },
  getTicketTypes: {
    path: '/event.Event/GetTicketTypes',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetTicketTypeRequest,
    responseType: event_pb.GetTicketTypesResponse,
    requestSerialize: serialize_event_GetTicketTypeRequest,
    requestDeserialize: deserialize_event_GetTicketTypeRequest,
    responseSerialize: serialize_event_GetTicketTypesResponse,
    responseDeserialize: deserialize_event_GetTicketTypesResponse,
  },
  getEventsByIds: {
    path: '/event.Event/GetEventsByIds',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetEventsByIdsRequest,
    responseType: event_pb.EventsInformations,
    requestSerialize: serialize_event_GetEventsByIdsRequest,
    requestDeserialize: deserialize_event_GetEventsByIdsRequest,
    responseSerialize: serialize_event_EventsInformations,
    responseDeserialize: deserialize_event_EventsInformations,
  },
  getTags: {
    path: '/event.Event/GetTags',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetTagsRequest,
    responseType: event_pb.AllTagsResponse,
    requestSerialize: serialize_event_GetTagsRequest,
    requestDeserialize: deserialize_event_GetTagsRequest,
    responseSerialize: serialize_event_AllTagsResponse,
    responseDeserialize: deserialize_event_AllTagsResponse,
  },
  createEventPlace: {
    path: '/event.Event/CreateEventPlace',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.CreateEventPlaceRequest,
    responseType: event_pb.CreateEventPlaceResponse,
    requestSerialize: serialize_event_CreateEventPlaceRequest,
    requestDeserialize: deserialize_event_CreateEventPlaceRequest,
    responseSerialize: serialize_event_CreateEventPlaceResponse,
    responseDeserialize: deserialize_event_CreateEventPlaceResponse,
  },
};

exports.EventClient = grpc.makeGenericClientConstructor(EventService);
