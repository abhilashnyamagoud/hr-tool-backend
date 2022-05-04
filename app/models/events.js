const mongoose=require('mongoose');

const Schema=mongoose.Schema

// Events Schema

const eventSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})

const Event=mongoose.model('Event',eventSchema)

module.exports=Event