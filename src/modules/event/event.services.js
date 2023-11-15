const clientGrpc = require("../../grpc-clients/client.grpc");

const {ListEventRequest} = require("../../generated_pb/shop_pb");
const {GetEventRequest} = require("../../generated_pb/event_pb");

exports.getEventByShopId = async (shop_req,nb,page) => {
    console.log("invoking getEventByShopId");
    console.log("shopId: ", shop_req);
    console.log("nb: ", nb);
    console.log("page: ", page);
    
    const req =  new ListEventRequest()
        .setId(shop_req)
        .setNb(nb)
        .setPage(page);
    console.log("req: ", req);

    return new Promise((resolve, reject) => {
        const call = clientGrpc.getShopInstance().getEventByShopId(req, (err, res) => {
            if (!err) {
                const events = res.getEventsList().map((event) => ({
                    id: event.getId(),
                    name: event.getName(),
                    reference: event.getReference(),
                    date: event.getDate(),
                    sale_date_from: event.getSaleDateFrom(),
                    sale_date_to: event.getSaleDateTo(),
                    currency_id: event.getCurrencyId(),
                    partner_id: event.getPartnerId(),
                    slider_id: event.getSliderId(),
                    categ_id: event.getCategId(),
                    place_id: event.getPlaceId(),
                    published: event.getPublished(),
                    use_seat_map: event.getUseSeatMap(),
                    image: event.getImage(),
                    timezone: event.getTimezone(),
                    description: event.getDescription(),
                    create_date: event.getCreateDate(),
                    write_date: event.getWriteDate(),
                    create_uid: event.getCreateUid(),
                    write_uid: event.getWriteUid(),
                    sale_online: event.getSaleOnline(),
                    sale_messenger: event.getSaleMessenger(),
                    sale_pos: event.getSalePos(),
                    door_opening: event.getDoorOpening(),
                    color: event.getColor(),
                    parent_id: event.getParentId(),
                    is_parent: event.getIsParent(),
                    cart_order_limited: event.getCartOrderLimited(),
                    limit_nb_free_tickets: event.getLimitNbFreeTickets(),
                    limit_nb_seats_tickets: event.getLimitNbSeatsTickets(),
                    state: event.getState(),
                    active: event.getActive(),
                    seats_io_event_secret_key: event.getSeatsIoEventSecretKey(),
                    seats_io_event_chart_key: event.getSeatsIoEventChartKey(),
                }));
                console.log("places: ", res.getPlacesList());
                const places = res.getPlacesList().map((place) => ({
                    name: place.getName(),
                }));

                const response = {
                    events: events,
                    places: places
                }

                resolve(response);
            }
            else{
                console.log("Error getEventByShopId: ", err);
                reject(err);
            }
        });
        
    });


};

exports.getEvents = async (id) => {
    console.log("invoking getEvents");
    console.log("id: ", id);

    
    const req =  new GetEventRequest()
    .setPage(1)
        .setFieldNameList(id.field_name)
        .setFieldValueList(id.field_value);

    return new Promise((resolve, reject) => {
        console.log("returning promise of getEvents");
        const call = clientGrpc.getEventInstance().getEvents(req, (err, res) => {
            if (!err) {
                const events = res.getEventsList().map((event) => ({
                    id: event.getId(),
                    name: event.getName(),
                    reference: event.getReference(),
                    date: event.getDate(),
                    sale_date_from: event.getSaleDateFrom(),
                    sale_date_to: event.getSaleDateTo(),
                    currency_id: event.getCurrencyId(),
                    partner_id: event.getPartnerId(),
                    slider_id: event.getSliderId(),
                    categ_id: event.getCategId(),
                    place_id: event.getPlaceId(),
                    published: event.getPublished(),
                    use_seat_map: event.getUseSeatMap(),
                    image: event.getImage(),
                    timezone: event.getTimezone(),
                    description: event.getDescription(),
                    create_date: event.getCreateDate(),
                    write_date: event.getWriteDate(),
                    create_uid: event.getCreateUid(),
                    write_uid: event.getWriteUid(),
                    sale_online: event.getSaleOnline(),
                    sale_messenger: event.getSaleMessenger(),
                    sale_pos: event.getSalePos(),
                    door_opening: event.getDoorOpening(),
                    color: event.getColor(),
                    parent_id: event.getParentId(),
                    is_parent: event.getIsParent(),
                    cart_order_limited: event.getCartOrderLimited(),
                    limit_nb_free_tickets: event.getLimitNbFreeTickets(),
                    limit_nb_seats_tickets: event.getLimitNbSeatsTickets(),
                    state: event.getState(),
                    active: event.getActive(),
                    seats_io_event_secret_key: event.getSeatsIoEventSecretKey(),
                    seats_io_event_chart_key: event.getSeatsIoEventChartKey(),
                }));

                resolve(events);

            }
            else{
                console.log("Error getEventById: ", err);
                reject(err);
            }

        });
        
    });
    

};
