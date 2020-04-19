const express = require("express");
const app = express();
const port = 3000;
const db = require("./db/config");
const model = require("./models/models");

app.use(express.static("./client/dist"));
app.use(require("body-parser").json());
app.use(require("morgan")("dev"));

app.get("/", (req, res) => {
  res.render("/");
});

app.get("/api/cows", (req, res) => {
  console.log("you hit me");
  model
    .showAllCows()
    .then((data) => {
      console.log("all cows data", data);
      res.send(data);
    })
    .catch((err) => {
      console.log("find all error", err);
    });
});

app.post("/api/cows", (req, res) => {
  console.log("you hit create a cow route");
  model
    .addACow(req.body.name, req.body.description)
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
