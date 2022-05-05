const mongoose=require('mongoose')

const CONNECTION_URI =`mongodb://localhost:27017/Hr-tool-Data`

const configureDB=()=>{
    mongoose.connect(CONNECTION_URI)
    .then(()=>{
        console.log('Connected to DB')
    })
    .catch((err)=>{
        console.log('error connecting with DB',err)
    })
}

module.exports=configureDB