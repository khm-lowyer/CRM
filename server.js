const express = require("express");
const path = require("path");
const app = express();
const router = require("./router");
const bodyParser= require("body-parser")
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(router);
app.use(express.static("./public"));


app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"./public/pages/404-error.html"));
});

app.listen(port,()=>{
    console.log(`Server is run on http://localhost:${port}`)
})