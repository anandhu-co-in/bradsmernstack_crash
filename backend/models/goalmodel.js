const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        text:{
            type:String,
            required:[true,'Please add text valueee']
        },

        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:[true,'User id is required'],
            ref:'User'
        }
    },
    {
        timestamps:true
    }
)


module.exports=mongoose.model('Goalsssssssss',goalSchema)