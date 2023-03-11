const UsersModel = require("../models/usersModel");

module.exports.getAccount = async (req, res) => {
  UsersModel.find()
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};

module.exports.addAccount = async (req, res) => {
  const { fullname, email, password, sex } = req.body;
  await UsersModel.create({
    fullname: fullname,
    email: email,
    password: password,
    sex: sex,
  })
    .then((data) => {
      return res.status(200).send({
        status: "success",
        message: "Account added, register successfully !",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};
