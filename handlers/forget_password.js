const path = require("path");
const db = require("../database/connect");

function get(req,res){
    res.sendFile(path.join(__dirname,"..","public/pages/forget-password.html"))
}

function post(req,res){
    const data = req.body;
    console.log(data)
}
module.exports=({get, post})