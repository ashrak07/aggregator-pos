const clientGrpc = require("../../grpc-clients/client.grpc");
const {UserLogin, PlannerQuery, UserId} = require("../../generated_pb/user_pb");
const groups = require("../../constants/groups.constants")

exports.login = async (user) => {
  console.log("invoking login");
  const req = new UserLogin()
    .setEmail(user.email)
    .setPassword(user.password)
    .setRole(groups.POS_GROUP);

  return new Promise((resolve, reject) => {
    clientGrpc.getUserInstance().login(req, (err, res) => {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        resolve({
            authToken: res.getToken(),
            id: res.getId(),
            name: res.getName()
        });
      }
    });
  });

  
};

/* const getUserIdByPlannerId = (plannerId) => {
    const req = new PlannerQuery()
        .setPage(1)
        .setFieldNameList(['id'])
        .setFieldValueList([plannerId+''])

    return new Promise((resolve, reject) => {
        clientGrpc.getUserInstance().getPlanners(req, (err, res) => {
            if (err) {
                console.error(`[GET_USER_ID_BY_PLANNER_ID] ERROR ==> ${err}`)
                reject(err)
            }
            else {
                resolve(res
                    .getPlannerModelsList()[0]
                    .getPlannerId()
                    .getPlannerId()
                )
            }
        })
    })
} */

exports.getPlannerDataByUserId = async (userId) => {
    const req = new UserId()
        .setUserId(userId)

    return new Promise((resolve, reject) => {
        clientGrpc.getUserInstance().getUserSeatsById(req, (err, res) => {
            if (err) {
                console.error(`[GET_PLANNER_DATA_BY_ID] ERROR ==> ${err}`)
                reject(err)
            }
            else {
                resolve({
                    image: res.getImage(),
                    workspaceKey: res.getWorkspaceKey(),
                    publicWorkspaceKey: res.getPublicWorkspaceKey(),
                })
            }
        })
    })
}
