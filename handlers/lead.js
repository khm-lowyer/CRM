const db = require("../database/connect");
const nodemailer = require("nodemailer");

function get(req, res) {
  res.send("FUCK YOU !!")
}
function set(req, res) {
  const data = req.body;
  console.log(req.url)
  console.log(data)
  console.log(data.status)

  db.query("SELECT * FROM lead WHERE phone=$1 and email=$2", [data.phone,data.email])
    .then((QueryRes) => {
      if (!QueryRes.rows.length) {
        db.query(
          "INSERT INTO lead (fullname, phone, email, country, status, website, story) VALUES($1,$2,$3,$4,$5,$6,$7)",
          [data.name,data.phone,data.email,data.country,data.status,data.website,data.story]
        ).then(() => {
          res.send({ success: true });
        });
      } else {
        res.send({ success: false });
      }
    })
    .catch((error) => {
      console.log(error);
      res.send({ success: false, type: "catch" });
    });

}

function mailer(email) {
    
}
module.exports = ({get,set})