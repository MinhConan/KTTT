const express = require('express')
var path = require('path');
const app = express()
const port = 3000
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use('/data',express.static('data'));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})