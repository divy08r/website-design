const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let dotenv = require("dotenv").config();
const secret = process.env.SECRET;
const CartItem=require('../models/CartItems')

router.post('/deleteFromCart',async(req,res)=>{
    console.log('into delete from cart')
    const {props,token}=req.body
    const decoded=jwt.verify(token,secret)
    const user=decoded.id
    const {img,title,price}=props
    let d=await CartItem.deleteOne({user,img,title,price})
    //console.log(d)
    res.send({message:"successfully removed item from cart"})
})

module.exports=router