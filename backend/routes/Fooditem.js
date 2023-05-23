const express = require("express");
const app = express();
const router = express.Router();
const Fooditem = require("../models/Fooditem");


//inserting the user data into mongodb
router.post("/fooditem", async (req, res) => {
    const { name, price, categoryname,img} = req.body.Credentials;

   
    const data = {
        name: name,
        price: price,
        categoryname: categoryname,
        img:img
    }
    await Fooditem.insertMany([data]);
})
module.exports = router;