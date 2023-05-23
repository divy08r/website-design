const mongoose = require("mongoose");

const foodcategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("foodcategory",foodcategorySchema);