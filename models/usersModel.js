const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/faceClone");

const Schema = mongoose.Schema;

const user = new Schema({
  fullname: String,
  email: String,
  password: String,
  sex: String,
});

const UsersModel = mongoose.model("Users", user);

module.exports = UsersModel;
