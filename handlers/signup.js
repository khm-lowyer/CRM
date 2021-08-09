const path = require("path");
const db = require("../database/connect");

function get(req, res) {
  res.sendFile(path.join(__dirname, "..", "public/pages/sign-up.html"));
}

function post(req, res) {
    console.log(req.body);
  const data = req.body;
  db.query("SELECT * FROM admin WHERE email=$1", [data.email])
    .then((QueryRes) => {
      if (!QueryRes.rows.length) {
        db.query(
          "INSERT INTO admin (username, email, password, lead_count) VALUES($1,$2,$3,$4)",
          [data.username, data.email, data.password[1], 0]
        ).then(() => {
        //   res.send({ success: true });
          res.redirect("/signin");
        });
      } else {
        res.send({ success: false });
      }
    })
    .catch((error) => {
      console.log(error);
      res.send({ success: false, type:"catch" });
    });
}

module.exports = { get, post };
