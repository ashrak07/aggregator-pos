const clientGrpc = require("../../grpc-clients/client.grpc");
const {UserLogin} = require("../../generated_pb/user_pb");
const groups = require("../../constants/groups.constants")

exports.login = async (user) => {
  console.log("invoking login");

  const req =  new UserLogin()
    .setEmail(user.email)
    .setPassword(user.password)
    .setRole(groups.POS_GROUP);

  return new Promise((resolve, reject) => {
    clientGrpc.getUserInstance().login(req, (err, res) => {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        resolve(res.getToken());
      }
    });
  });

  
};
