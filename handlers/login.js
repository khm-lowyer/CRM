const path = require("path");
const { send } = require("process");
const db = require("../database/connect");

function get(req, res) {
  res.sendFile(path.join(__dirname, "..", "public/pages/sign-in.html"));
}

function post(req, res) {
  const data = req.body;
  db.query("SELECT * FROM admin WHERE email=$1", [data.email])
    .then(({ rows }) => {
      if (rows.length) {
          const user = rows[0];
          console.log(user);
          if(user.password === data.password)
          {
              res.redirect("/")
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
