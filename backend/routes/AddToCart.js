const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let dotenv = require("dotenv").config();
const secret = process.env.SECRET;
const CartItem=require('../models/CartItems')

router.post('/addToCart',async (req,res)=>{
    //console.log(req.body)
    const {props,token}=req.body
    //console.log(token)
    const decoded=jwt.verify(token,secret)
    const user=decoded.id
    const {img,title,price}=props
    const itemExists=await CartItem.findOne({user,img,title,price})
    if(itemExists){
        res.json({message:"item is already present in your cart"})
        res.end()
        return 
    }
    //console.log(user)
    //console.log(item_id)
    let send=await CartItem.insertMany([{user,img,title,price}])
    res.json({message:"successfully inserted item"})
})

module.exports=router