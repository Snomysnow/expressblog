var express = require('express');
const fs = require("fs");
var router = express.Router();
const postDBFileName = "./model/postDB.json";

router.get('/', function(req, res, next) {
  res.render('./auth/compose');
});

