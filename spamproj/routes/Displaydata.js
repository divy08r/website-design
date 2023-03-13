const express = require("express");
const router = express.Router();

router.post("/fooddata",(req,res)=>{
    try {
        res.send([global.food_items,global.foodcategory]);
        console.log(global.food_items);
    } catch (error) {
        console.log(error);
        res.send("Server error");
    }
})

module.exports = router;