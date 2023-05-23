const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let dotenv = require("dotenv").config();
const secret = process.env.SECRET;
const CartItem=require('../models/CartItems')

router.post('/displayCart',async (req,res)=>{
    const token=req.body.token
    const decoded=jwt.verify(token,secret)
    const user=decoded.id
    const items=await CartItem.find({user})
    //console.log(items)
    res.send(items)
})

module.exports=router