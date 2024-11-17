console.log("Starting a new project!");

const express = require('express')
const app = express()
const port = 3000

app.use("/",(req,res)=>{
      res.send("Namaste from the Dashboard");
      
});

app.use('/hello', (req, res) => {
  res.send('Hello hello hello!')
});

app.use("/test",(req,res)=>{
  res.send("Hello from the server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});