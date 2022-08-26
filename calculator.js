"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  const result = num1 + num2;
  res.send(`The result of the calculation is ${result}`);
});

app.post("/bmicalculator", function (req, res) {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);
  const BMI = weight / height ** 2;

  res.send(`Your BMI is ${BMI}`);
});

app.listen(port, function () {
  console.log(`Server is Listening on port ${port}`);
});
