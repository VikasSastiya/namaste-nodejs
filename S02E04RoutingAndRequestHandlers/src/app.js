console.log("Starting a new project!");

const express = require("express");
const app = express();
const port = 3000;

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Akshay", lastName: "Saini" });
});

app.get("/ab?c", (req, res) => {
  // "?" mean it work in both royte "/ac", "/abc"
  res.send({ name: "vikas", status: "bhakti" });
});

app.get("/ab+c", (req, res) => {
  // "+" means in between any added is only exepted
  res.send({ name: "sastiya", status: "bhakti" });
});

app.get("/ab*cd", (req, res) => {
  // "*" means i6n between any added is only exepted
  res.send({ name: "VSastiya", status: "bhakti" });
});

app.listen(port, () => {
  console.log("server is listening at 3000");
});
