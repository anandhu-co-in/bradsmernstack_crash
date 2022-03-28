const express = require('express');
const { errorHandler } = require('./middlewear/errorMiddleWear');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db');
const path = require('path')


connectDB()


const port = process.env.PORT
const app = express()


//Below to are required to parse, body from req
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../frontend/build')))

    app.get('*', (req,res) =>
        res.sendFile(
            path.resolve(__dirname,'../','frontend','build','index.html')
            )
    )
}
else{
    app.get('/', (req,res) => res.send("NOT IN PRODUCTION"))
}


app.use(errorHandler)

app.listen(port,()=>console.log("Server Started 😁😁😁😁😁😁😁"))

