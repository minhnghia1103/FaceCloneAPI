const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const { getAccount, addAccount, login } = require("./controllers/user");

app.get("/allusers", getAccount);
app.post("/adduser", addAccount);
app.post("/login", login);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
