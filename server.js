const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());

const { getAccount, addAccount } = require("./controllers/user");

app.get("/allusers", getAccount);
app.post("/adduser", addAccount);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
