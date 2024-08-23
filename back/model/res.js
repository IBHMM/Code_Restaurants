const { default: mongoose } = require("mongoose");

const ResModel=mongoose.model("Res",new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    discount:Number,
    image:String
}))

module.exports= {ResModel}