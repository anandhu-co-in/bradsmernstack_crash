const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        text:{
            type:String,
            required:[true,'Please add text valueee']
        }
    },
    {
        timestamps:true
    }
)


module.exports=mongoose.model('Goalsssssssss',goalSchema)