const db = require("../database/connect");
const nodemailer = require("nodemailer");
const dotenv= require("dotenv");
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function get(req, res) {
  // res.send("FUCK YOU !!");
  db.query("SELECT * FROM lead").then(data => {
    res.send(data.rows);
  })
}
function set(req, res) {
  const data = req.body;
  console.log(req.get("host"));

  db.query("SELECT * FROM lead WHERE phone=$1 and email=$2", [
    data.phone,
    data.email,
  ])
    .then((QueryRes) => {
      if (!QueryRes.rows.length) {
        db.query(
          "INSERT INTO lead (fullname, phone, email, country, status, website, story) VALUES($1,$2,$3,$4,$5,$6,$7)",
          [
            data.name,
            data.phone,
            data.email,
            data.country,
            data.status,
            data.website,
            data.story,
          ]
        ).then(() => {
          console.log("insert lead success");
          client.messages
            .create({
              messagingServiceSid: 'MGad7a17d8b28ff34a71e2fe524b47ce02',
              to: data.phone,
              body: "test1",
            })
            .then((messages) => {
              console.log(messages.sid);
              console.log("message sent");
            }).done();
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
//search function
function search(get,set) {
  const data = req.body;
  db.query("SELECT * FROM lead WHERE id=$1", data.id).then(lead=>{
    console.log(lead.rows);
  }).catch(error => {console.log(error)})
}

function statistic(get,set) {
  const data = req.body;
  // const stat = [];
  db.query("SELECT COUNT(id) FROM lead WHERE status=$1", "new").then(lead=>{
    console.log(lead.rows);

  }).catch(error => {console.log(error)})
}

function mailer(email) {

}
module.exports = { get, set, search, statistic };
