const clientGrpc = require("../../grpc-clients/client.grpc");
const {UserLogin} = require("../../generated_pb/user_pb");
const {UserServiceClient} = require("../../generated_pb/user_grpc_pb");
const grpc = require("@grpc/grpc-js");

exports.login = async (user) => {
  console.log("invoking login");
  console.log("email and password: ", user.email, user.password);

  const req =  new UserLogin()
    .setEmail(user.email)
    .setPassword(user.password);
  console.log("req: ", req.getEmail(), req.getPassword());

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
