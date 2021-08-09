const path = require("path");
const jwt = require("jsonwebtoken")
const { send } = require("process");
const db = require("../database/connect");

function get(req, res) {
  res.sendFile(path.join(__dirname, "..", "public/pages/sign-in.html"));
}

function post(req, res) {
  const data = req.body;
  console.log(data);
  db.query("SELECT * FROM admin WHERE email=$1", [data.email])
    .then(({ rows }) => {
      if (rows.length) {
          const user = rows[0];
          console.log(user);
          if(user.password === data.password)
          {
              res.cookie('email',data.email,{maxAge: '500000'});
              res.cookie('password',data.password,{maxAge: '500000'});
              res.redirect("/");
          }
          else{
              res.send({success : false})
          }
      }
    })
    .catch((error) => {
      console.log(error);
      res.send({ success: false });
    });
}

module.exports = { get, post };
