const mongoose = require("mongoose");
const FarmerdetailsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    farm1img:{
        type:String,
        required:true
    },
    farm2img:{
        type:String,
        required:true
    },
    graph:{
        type:String,
        required:true
    },
    incomeandrevenue:{
        type:String,
        required:true
    },
    lastmonthrevenue:{
        type:String,
        required:true
    },
    incometodate:{
        type:String,
        required:true
    },
    lastmonthincome:{
        type:String,
        required:true
    },
    profit:{
        type:String,
        required:true
    },
    expenses:{
        type:String,
        required:true
    },
    topproduct1:{
        type:String,
        required:true
    },
    topproduct2:{
        type:String,
        required:true
    },
    topproduct3:{
        type:String,
        required:true
    },
    topproduct4:{
        type:String,
        required:true
    },
    topproduct1img:{
        type:String,
        required:true
    },
    topproduct2img:{
        type:String,
        required:true
    },
    topproduct3img:{
        type:String,
        required:true
    },
    topproduct4img:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("farmerdetails",FarmerdetailsSchema);
