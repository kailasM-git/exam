const {userModel}=require("../model/form.model")
const path=require("path");
const mongoose=require("mongoose");

exports.userRegister = async(req,res)=>{
    try{
        const userRegister={
            names:req.body.names,
            roll:req.body.roll,
            department:req.body.department,
            email:req.body.email,
        };
        const userReg=await userModel.create(userRegister);
        res.json("sucess")
    }
    catch(err){
        console.error(err)
    }
}

exports.viewStud = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};