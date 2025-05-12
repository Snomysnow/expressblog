var express = require('express');
const fs = require("fs");
var router = express.Router();

const postDBFileName = "./model/postDB.json";

router.get('/', function(req, res, next) {
  res.render('./main/compose', {msg: ""});
});

router.post('/submit', function(req,res,next){
    console.log(req.body)
    if(!req.body.title || !req.body.body){
        return renderCompose(req, res, "Fields cannot be empty.");
    }
    let postDB = readPostDB();
    for (let posts of postDB.posts){
        if (posts.title == req.body.title){
            return renderCompose(req, res, "Title is already used");
        }
    }

    postDB.posts.push(req.body);
    writePostDB(postDB.posts);
    renderHome(req, res);
});

function renderCompose(req, res, msg){
    res.render('./main/compose', {msg: msg});
}

function readPostDB() {
    let data = fs.readFileSync(postDBFileName, "utf-8");
    console.log(data);
    return JSON.parse(data);
}

function writePostDB(post){
    let data = JSON.stringify(post, null, 2);
    fs.writeFileSync(postDBFileName, data, "utf-8");
}

function renderHome(req, res) {
    res.redirect("/feed");
}

module.exports = router;