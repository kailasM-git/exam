var express = require("express")
var router = express.Router();
const formcontroller = require("../controller/form.Controller")

router.post("/reg",formcontroller.userRegister);
router.get("/view",formcontroller.viewStud)

module.exports=router