const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


//inserting the user data into mongodb
router.post("/createuser", async (req, res) => {
    const { name, password, email, usertype } = req.body.Credentials;

    const salt = await bcrypt.genSalt(5);
    let setpassword = await bcrypt.hash(password, salt);


    const data = {
        name: name,
        password: setpassword,
        email: email,
        usertype: usertype
    }
    await User.insertMany([data]);
})
module.exports = router;