var mongoose = require("mongoose")

function database(){
    mongoose.connect("mongodb://localhost:27017/").then(()=>{
        console.log("successfull")
    }).catch(err=>{
        console.log(err);
    })
}
module.exports =database