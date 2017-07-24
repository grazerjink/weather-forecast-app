var express = require("express");
var app = express();
var morgan = require("morgan");
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/app"));
app.use("/", express.static(__dirname + "/"));
app.use(morgan("dev"));
app.get("/", (req, res) => {
    res.redirect("/index.html");
})
app.listen(port, () => {
    console.log("Server is listening...");
})