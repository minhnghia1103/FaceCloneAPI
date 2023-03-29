const PostsModel = require("../models/postsModel");
var jwt = require("jsonwebtoken");

module.exports.createPost = async (req, res) => {
  const { title, body, idUser } = req.body;
  const time = Date();
  const date = new Date(time).toLocaleDateString();
  await PostsModel.create({
    title: title,
    body: body,
    idUser: idUser,
    date: date,
  })
    .then((data) => {
      return res.status(200).send({
        status: "Success!",
        message: "Created post",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};
