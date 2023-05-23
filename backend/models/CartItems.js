const mongoose = require("mongoose");
const cartItemSchema=new mongoose.Schema({
    user:{
        type:Number
    },
    img:String,
    title:String,
    price:Number
})

module.exports = mongoose.model("cartItems",cartItemSchema);