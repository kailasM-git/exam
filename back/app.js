var express = require("express")
var cros =require("cors")
var bodyparser =require("body-parser")
var app=express();
const database=require("./config/database");
const formRouter=require("./routes/form.routs");

app.use(cros());
app.use(bodyparser.urlencoded())
app.use(bodyparser.json())
app.use(express.static("asset"))
database()
app.use("/student",formRouter)
app.listen(4000)
