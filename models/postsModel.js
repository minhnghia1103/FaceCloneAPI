const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/faceClone");

const Schema = mongoose.Schema;

const post = new Schema({
  title: String,
  body: String,
  idUser: String,
  date: String,
});

const PostsModel = mongoose.model("posts", post);

module.exports = PostsModel;
