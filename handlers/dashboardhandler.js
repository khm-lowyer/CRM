const path = require("path");
const cookieParser = require("cookie-parser");
const db = require("../database/connect");
function get(req, res) {
  var cookie = req.cookies;
  if (cookie.email) {
    db.query("SELECT * FROM lead")
      .then((data) => {
        // console.log(data.rows);
        // console.log(data.rows[0].id);
        
      })
      .catch((e) => {
        console.log(e);
      });
    res.sendFile(path.join(__dirname, "..", "public/pages/index.html"));
  } else res.redirect("/signin");
}

function set(req, res) {
  res.sendFile(path.join(__dirname, "..", "public/pages/index.html"));
}

module.exports = { get, set };
