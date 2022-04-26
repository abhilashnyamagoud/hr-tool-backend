const mongoose=require('mongoose')

const CONNECTION_URI = process.env.MONGODB_URI ||`mongodb://localhost:27017/employesData`

const configureDB=()=>{
    mongoose.connect(CONNECTION_URI,{
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    })
    .then(()=>{
        console.log('Connected to DB')
    })
    .catch((err)=>{
        console.log('error connecting with DB',err)
    })
}

module.exports=configureDB