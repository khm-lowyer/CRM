const db = require("./connect");
const path = require("path");
const fs = require("fs");

const initQueryPath = path.join(__dirname,"init.sql");
const initQuery = fs.readFileSync(initQueryPath, {encoding: "utf-8"});

db.query(initQuery).then((result)=>{console.log("database has been built")}).catch((error)=>{console.log("database filead to build"); console.log(error);});