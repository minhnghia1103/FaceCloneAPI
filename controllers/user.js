const UsersModel = require("../models/usersModel");
var jwt = require("jsonwebtoken");

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
  const { fullname, email, password } = req.body;
  const checkExist = await UsersModel.findOne({ email: email });
  if (!checkExist) {
    await UsersModel.create({
      fullname: fullname,
      email: email,
      password: password,
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
  } else {
    return res.send({
      status: "existEmail",
    });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const checkExist = await UsersModel.findOne({ email: email, password: password });
  if (checkExist) {
    try {
      const _id = checkExist._id;
      return res.status(200).send({
        status: true,
        token: jwt.sign({ _id }, "ngulol"),
        data: checkExist,
      });
    } catch (e) {
      return res.status(500).json(e.message);
    }
  } else {
    return res.send({
      status: false,
    });
  }
};
