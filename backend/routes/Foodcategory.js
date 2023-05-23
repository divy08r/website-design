const express = require("express");
const app = express();
const router = express.Router();
const foodcategory = require("../models/Foodcategory");
router.post("/foodcategory", async (req, res) => {
    const {name} = req.body.Credentials
    
    const data = {
        name : name
    }
    
    await foodcategory.insertMany([data]);    
});
module.exports = router;