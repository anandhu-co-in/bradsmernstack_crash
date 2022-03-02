const express = require('express');
const { errorHandler } = require('./middlewear/errorMiddleWear');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db');


connectDB()


const port = process.env.PORT
const app = express()


//Below to are required to parse, body from req
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port,()=>console.log("Server Started 😁😁😁😁😁😁😁"))

