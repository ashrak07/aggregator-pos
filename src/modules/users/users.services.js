const clientGrpc = require("../../grpc-clients/client.grpc");
//const pb = require("../../generated_pb/user_pb");

exports.login = async (user) => {
  console.log("invoking login");
  console.log("email and password: ", user.email, user.password);

  const req = {
    email: user.email,
    password: user.password,
  };
  // new pb.UserLogin();
  // req.setEmail(user.email)
  // req.setPassword(user.password);
  //console.log("req: ", req.getEmail(), req.getPassword());

  return new Promise((resolve, reject) => {
    clientGrpc.getUserInstance().login(req, (err, res) => {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        resolve(res.token);
      }
    });
  });

  // await clientGrpc.getUserInstance().login(req, (err, res) => {
  //     if (err) {
  //         console.log("error: ", err);
  //     }
  //     else {
  //         console.log("response: ", res.token);
  //         return res.token;
  //     }
  // });
};
