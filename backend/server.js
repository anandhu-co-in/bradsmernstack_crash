const express = require('express');
const dotenv = require('dotenv').config()

const port = process.env.PORT

const app = express()

app.get('/api/goals',(req,res)=>{
    res.json({message:"Amazings"})
});

app.listen(port,()=>console.log("Server Started 😁😁😁😁😁😁😁"))

