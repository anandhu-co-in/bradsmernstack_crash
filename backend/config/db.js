const mongoose = require('mongoose');

const connectDB = async () =>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection success : "+`${conn.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}


module.exports = connectDB;
