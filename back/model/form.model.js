const mongoose = require("mongoose")
const userSchema = mongoose.Schema({

    names:{
        type:String,
        require:true,
    },
    roll:{
        type:Number,
        require:true,
    },
    department:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
})

const userModel=mongoose.model('user',userSchema)
module.exports={userModel};