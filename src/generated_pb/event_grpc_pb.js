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

function serialize_event_DetailSeatsRequest(arg) {
  if (!(arg instanceof event_pb.DetailSeatsRequest)) {
    throw new Error('Expected argument of type event.DetailSeatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_DetailSeatsRequest(buffer_arg) {
  return event_pb.DetailSeatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_DetailSeatsResponse(arg) {
  if (!(arg instanceof event_pb.DetailSeatsResponse)) {
    throw new Error('Expected argument of type event.DetailSeatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_DetailSeatsResponse(buffer_arg) {
  return event_pb.DetailSeatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_EventPlaceResponse(arg) {
  if (!(arg instanceof event_pb.EventPlaceResponse)) {
    throw new Error('Expected argument of type event.EventPlaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_EventPlaceResponse(buffer_arg) {
  return event_pb.EventPlaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_event_GetEventByPlannerRequest(arg) {
  if (!(arg instanceof event_pb.GetEventByPlannerRequest)) {
    throw new Error('Expected argument of type event.GetEventByPlannerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetEventByPlannerRequest(buffer_arg) {
  return event_pb.GetEventByPlannerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_GetEventByPlannerResponse(arg) {
  if (!(arg instanceof event_pb.GetEventByPlannerResponse)) {
    throw new Error('Expected argument of type event.GetEventByPlannerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetEventByPlannerResponse(buffer_arg) {
  return event_pb.GetEventByPlannerResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_event_GetEventListRequest(arg) {
  if (!(arg instanceof event_pb.GetEventListRequest)) {
    throw new Error('Expected argument of type event.GetEventListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetEventListRequest(buffer_arg) {
  return event_pb.GetEventListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_GetEventPlaceRequest(arg) {
  if (!(arg instanceof event_pb.GetEventPlaceRequest)) {
    throw new Error('Expected argument of type event.GetEventPlaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetEventPlaceRequest(buffer_arg) {
  return event_pb.GetEventPlaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_event_GetTicketTypeListRequest(arg) {
  if (!(arg instanceof event_pb.GetTicketTypeListRequest)) {
    throw new Error('Expected argument of type event.GetTicketTypeListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetTicketTypeListRequest(buffer_arg) {
  return event_pb.GetTicketTypeListRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_event_GetTurnoverCreatedRequest(arg) {
  if (!(arg instanceof event_pb.GetTurnoverCreatedRequest)) {
    throw new Error('Expected argument of type event.GetTurnoverCreatedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetTurnoverCreatedRequest(buffer_arg) {
  return event_pb.GetTurnoverCreatedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_GetTurnoverCreatedResponse(arg) {
  if (!(arg instanceof event_pb.GetTurnoverCreatedResponse)) {
    throw new Error('Expected argument of type event.GetTurnoverCreatedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_GetTurnoverCreatedResponse(buffer_arg) {
  return event_pb.GetTurnoverCreatedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_PlaceAvailableRequest(arg) {
  if (!(arg instanceof event_pb.PlaceAvailableRequest)) {
    throw new Error('Expected argument of type event.PlaceAvailableRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_PlaceAvailableRequest(buffer_arg) {
  return event_pb.PlaceAvailableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_PlaceAvailableResponse(arg) {
  if (!(arg instanceof event_pb.PlaceAvailableResponse)) {
    throw new Error('Expected argument of type event.PlaceAvailableResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_PlaceAvailableResponse(buffer_arg) {
  return event_pb.PlaceAvailableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_QueryCalculationRequest(arg) {
  if (!(arg instanceof event_pb.QueryCalculationRequest)) {
    throw new Error('Expected argument of type event.QueryCalculationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_QueryCalculationRequest(buffer_arg) {
  return event_pb.QueryCalculationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_QueryCalculationResponse(arg) {
  if (!(arg instanceof event_pb.QueryCalculationResponse)) {
    throw new Error('Expected argument of type event.QueryCalculationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_QueryCalculationResponse(buffer_arg) {
  return event_pb.QueryCalculationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_SumTicketRequest(arg) {
  if (!(arg instanceof event_pb.SumTicketRequest)) {
    throw new Error('Expected argument of type event.SumTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_SumTicketRequest(buffer_arg) {
  return event_pb.SumTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_SumTicketResponse(arg) {
  if (!(arg instanceof event_pb.SumTicketResponse)) {
    throw new Error('Expected argument of type event.SumTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_SumTicketResponse(buffer_arg) {
  return event_pb.SumTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  getAllEvents: {
    path: '/event.Event/GetAllEvents',
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
  getEventPlace: {
    path: '/event.Event/GetEventPlace',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetEventPlaceRequest,
    responseType: event_pb.EventPlaceResponse,
    requestSerialize: serialize_event_GetEventPlaceRequest,
    requestDeserialize: deserialize_event_GetEventPlaceRequest,
    responseSerialize: serialize_event_EventPlaceResponse,
    responseDeserialize: deserialize_event_EventPlaceResponse,
  },
  getDetailSeats: {
    path: '/event.Event/GetDetailSeats',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.DetailSeatsRequest,
    responseType: event_pb.DetailSeatsResponse,
    requestSerialize: serialize_event_DetailSeatsRequest,
    requestDeserialize: deserialize_event_DetailSeatsRequest,
    responseSerialize: serialize_event_DetailSeatsResponse,
    responseDeserialize: deserialize_event_DetailSeatsResponse,
  },
  sumTicket: {
    path: '/event.Event/SumTicket',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.SumTicketRequest,
    responseType: event_pb.SumTicketResponse,
    requestSerialize: serialize_event_SumTicketRequest,
    requestDeserialize: deserialize_event_SumTicketRequest,
    responseSerialize: serialize_event_SumTicketResponse,
    responseDeserialize: deserialize_event_SumTicketResponse,
  },
  getEventByPlanner: {
    path: '/event.Event/GetEventByPlanner',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetEventByPlannerRequest,
    responseType: event_pb.GetEventByPlannerResponse,
    requestSerialize: serialize_event_GetEventByPlannerRequest,
    requestDeserialize: deserialize_event_GetEventByPlannerRequest,
    responseSerialize: serialize_event_GetEventByPlannerResponse,
    responseDeserialize: deserialize_event_GetEventByPlannerResponse,
  },
  getTurnoverCreated: {
    path: '/event.Event/GetTurnoverCreated',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetTurnoverCreatedRequest,
    responseType: event_pb.GetTurnoverCreatedResponse,
    requestSerialize: serialize_event_GetTurnoverCreatedRequest,
    requestDeserialize: deserialize_event_GetTurnoverCreatedRequest,
    responseSerialize: serialize_event_GetTurnoverCreatedResponse,
    responseDeserialize: deserialize_event_GetTurnoverCreatedResponse,
  },
  getEventList: {
    path: '/event.Event/GetEventList',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetEventListRequest,
    responseType: event_pb.AllEvents,
    requestSerialize: serialize_event_GetEventListRequest,
    requestDeserialize: deserialize_event_GetEventListRequest,
    responseSerialize: serialize_event_AllEvents,
    responseDeserialize: deserialize_event_AllEvents,
  },
  getTicketTypeList: {
    path: '/event.Event/GetTicketTypeList',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.GetTicketTypeListRequest,
    responseType: event_pb.GetTicketTypesResponse,
    requestSerialize: serialize_event_GetTicketTypeListRequest,
    requestDeserialize: deserialize_event_GetTicketTypeListRequest,
    responseSerialize: serialize_event_GetTicketTypesResponse,
    responseDeserialize: deserialize_event_GetTicketTypesResponse,
  },
  checkPlaceAvailable: {
    path: '/event.Event/CheckPlaceAvailable',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.PlaceAvailableRequest,
    responseType: event_pb.PlaceAvailableResponse,
    requestSerialize: serialize_event_PlaceAvailableRequest,
    requestDeserialize: deserialize_event_PlaceAvailableRequest,
    responseSerialize: serialize_event_PlaceAvailableResponse,
    responseDeserialize: deserialize_event_PlaceAvailableResponse,
  },
  queryCalculation: {
    path: '/event.Event/QueryCalculation',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.QueryCalculationRequest,
    responseType: event_pb.QueryCalculationResponse,
    requestSerialize: serialize_event_QueryCalculationRequest,
    requestDeserialize: deserialize_event_QueryCalculationRequest,
    responseSerialize: serialize_event_QueryCalculationResponse,
    responseDeserialize: deserialize_event_QueryCalculationResponse,
  },
};

exports.EventClient = grpc.makeGenericClientConstructor(EventService);
