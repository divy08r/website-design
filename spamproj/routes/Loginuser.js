const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let dotenv = require("dotenv").config();
const secret = process.env.SECRET;

router.post("/login" , async (req,res)=>{
    const {email,password} = req.body.info;

    let data = await User.findOne({email:email});
    if(!data){
        res.json({"success":"false"});
    }
    else{
        const da = {
            user:{
            id:data.id
            }
        }
        const authtoken = jwt.sign(da,secret);
            let pwdcompare = bcrypt.compare(data.password, password);
            if (!pwdcompare) {
                res.json({ success: "false"});
            }
            else {
                res.json({ success: "true",authtoken:authtoken});
            }
    }
});

module.exports = router;


