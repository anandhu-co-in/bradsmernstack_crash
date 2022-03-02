const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Users name is required']
        },
        email:{
            type:String,
            required:[true,'email is required']
        },
        password:{
            type:String,
            required:[true,'Users name is required']
        }
    },
    {
        timestamp:true
    },
)


module.exports=mongoose.model('User',userSchema)