console.log("Starting a new project!");

const express = require('express')
const app = express()
const port = 3000

app.use("/vikas",(req,res)=>{     // just shift the code from upper to lower your problem which is hi vikasshowing in every route get solved so from above discussion we learn order of route or any code isvery very important
    res.send("Hello !");
});

app.get("/vikas",(req,res)=>{
     res.send({name:"vikas",status:"bhakti"}); 
});

app.post("/vikas",(req,res)=>{
       res.send("Data successfully saved to the database");
});
app.use("/test",(req,res)=>{     
    res.send("Hello from the server!");
});
app.delete("/vikas",(req,res)=>{
     res.send("Deleted successfuly forom the server");  
})
app.listen(port,()=>{
  console.log("server is listening at 3000");
});