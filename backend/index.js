const express = require("express");
const app = express();
const cors = require("cors");
const main = require("./db");
const { urlencoded } = require("express");

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/api",require("./routes/Createuser"));
app.use("/api",require("./routes/Loginuser"));
app.use("/api",require("./routes/Displaydata"));
app.use("/api",require("./routes/Foodcategory"));
app.use("/api",require("./routes/Fooditem"));
app.use("/api",require("./routes/Farmerdetails"));
app.use('/api',require('./routes/AddToCart'))
app.use('/api',require('./routes/DisplayCart'))
app.use('/api',require('./routes/DeleteFromCart'))


app.get("/",function(req,res)
{
    res.send("HI");
})


app.listen(+process.env.PORT || 5001,function(){
    console.log("App is up and running");
});

