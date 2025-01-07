console.log("Starting a new project!");

const express = require('express')
const app = express()
const port = 3000

app.use("/vikas/sir",(req,res)=>{
       res.send("hi vikas sastiya");
});
app.use("/vikas",(req,res)=>{
     res.send("hi sastiya"); 
});

app.use("/sir",(req,res)=>{
       res.send("hi sir");
});
app.use("/",(req,res)=>{     // just shift the code from upper to lower your problem which is hi vikasshowing in every route get solved so from above discussion we learn order of route or any code isvery very important
    res.send("hi vikas");
});
app.listen(1000,()=>{
  console.log("server is listening at 1000");
});