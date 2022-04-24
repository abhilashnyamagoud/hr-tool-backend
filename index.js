
const express=require('express')
const app=express()
const router=require('./config/routes')
//application level middleware
app.use(express.json())
app.use(router)

const port=3088
const configureDB=require('./config/database')

//setting up DB
configureDB()

app.listen(port,()=>{
    console.log("server is running on port",port)
})