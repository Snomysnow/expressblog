var express = require('express');
var router = express.Router();
const fs = require("fs");

const userDBFileName = "./model/userDB.json";

router.get('/', function(req, res, next) {
  res.render('./main/profile');
});

module.exports = router;