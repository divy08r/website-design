const express = require("express");
const app = express();
const router = express.Router();
const Farmerdetails = require("../models/Farmerdetails");


//inserting the user data into mongodb
router.post("/farmerdetails", async (req, res) => {
    const { name, email,location,img,phone,farm1img,farm2img,graph,incomeandrevenue,
        lastmonthrevenue,profit,expenses,


    incometodate,lastmonthincome,
topproduct1,topproduct2,topproduct3,topproduct4,topproduct1img,
topproduct2img,topproduct3img,topproduct4img} = req.body.Credentials;

   
    const data = {
        name: name,
       email:email,
       location:location,
        img:img,
        phone:phone,
        farm1img:farm1img,
        farm2img:farm2img,
        graph:graph,
        incomeandrevenue:incomeandrevenue,
        lastmonthrevenue:lastmonthrevenue,
        profit:profit,
        expenses:expenses,
        incometodate:incometodate,
        lastmonthincome:lastmonthincome,
        topproduct1:topproduct1,
        topproduct2:topproduct2,
        topproduct3:topproduct3,
        topproduct4:topproduct4,
        topproduct1img:topproduct1img,
        topproduct2img:topproduct2img,
        topproduct3img:topproduct3img,
        topproduct4img:topproduct4img
    }
    await Farmerdetails.insertMany([data]);
})
module.exports = router;