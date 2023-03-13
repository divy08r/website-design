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

app.get("/",function(req,res)
{
    res.send("HI");
})


app.listen(5000,function(){
    console.log("App is up and running");
});

