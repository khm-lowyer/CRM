const path = require("path");

function get(req,res){
    console.log("here")
    res.sendFile(path.join(__dirname,"..","public/pages/index.html"))
}
function set(req,res){
    res.sendFile(path.join(__dirname,"..","public/pages/index.html"))
}

module.exports=({get, set})