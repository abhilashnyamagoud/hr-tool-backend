const mongoose=require('mongoose');

const Schema=mongoose.Schema

// Get IST

// var currentTime = new Date();

// var currentOffset = currentTime.getTimezoneOffset();

// var ISTOffset = 330;   // IST offset UTC +5:30 

// var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

// ISTTime now represents the time in IST coordinates


// Events Schema

const eventSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    start:{
        date:{
            type: String,
            required:true,
        
        },
        time:{
            type: String,
            
        },
    },
    end:{
        date:{
            type: String,
            required:true,
        
        },
        time:{
            type: String,
            
        },
    },
    color:{
        type: String,
        default: "teal"
    },
})

const Event=mongoose.model('Event',eventSchema)

module.exports=Event