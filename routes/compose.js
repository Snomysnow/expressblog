var express = require('express');
const fs = require("fs");
var router = express.Router();

const postDBFileName = "./model/postDB.json";

router.get('/', function(req, res, next) {
  res.render('./main/compose', {msg: ""});
});

router.post('/submit', function(req,res,next){
    if(!req.body.title || req.body.body){
        return renderCompose(req, res, "Fields cannot be empty.");
    }
});



function renderCompose(req, res, msg){
    res.render('./main/compose', {msg: msg});
}

module.exports = router;