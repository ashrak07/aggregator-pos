const clientGrpc = require("../../grpc-clients/client.grpc");

const {ListEventRequest} = require("../../generated_pb/shop_pb");
const {GetEventRequest, GetEventCategoryRequest} = require("../../generated_pb/event_pb");
const { getPlannerDataByUserId } = require("../users/users.services");

exports.getEventByShopId = async (shopId, pageSize, page) => {
    console.log("invoking getEventByShopId");
    console.log("shopId: ", shopId);
    console.log("pageSize: ", pageSize);
    console.log("page: ", page);
    
    const req =  new ListEventRequest()
        .setId(shopId)
        .setNb(pageSize)
        .setPage(page);
    console.log("req: ", req);

    return new Promise((resolve, reject) => {
        clientGrpc.getShopInstance().getEventByShopId(req, async (err, res) => {
            if (!err) {
                const events = res.getEventsList().map(async (event) => { 
                    const eventData = {
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
                    }
                    
                    try {
                        eventData.categories = await this.getEventCategories(event.getCategId())
                        const plannerData = await getPlannerDataByUserId(event.getCreateUid())
                        eventData.workspace_key = plannerData.workspaceKey
                        eventData.public_workspace_key = plannerData.publicWorkspaceKey
                    } catch (err) {
                        console.error(err)
                    }

                    return eventData
                });

                console.log("places: ", res.getPlacesList());
                const places = res.getPlacesList().map((place) => ({
                    name: place.getName(),
                }));

                const response = {
                    events: await Promise.all(events),
                    places: places
                }

                console.log('----- GetEventByShopId Response ------')
                console.log(response)

                resolve(response);
            }
            else{
                console.log("Error getEventByShopId: ", err);
                reject(err);
            }
        });
        
    });


};

exports.getEventCategories = (id) => {
  const req = new GetEventCategoryRequest()
    .setPage(1)
    .setFieldNameList(['id'])
    .setFieldValueList([id+''])

  return new Promise((resolve, reject) => {
    clientGrpc.getEventInstance().getEventCategories(req, (err, res) => {
      if (err) {
        console.error('GET EVENT CATEGORIES ERROR ==> ' + err)
        reject(err)
      }
      else {
        const categories = res.getCategoriesList()
          .map((category) => ([category.getName()]))

        resolve(categories)
      }
    })
  })
}

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
