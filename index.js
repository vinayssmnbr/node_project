require('dotenv').config()
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const studentRoute=require('./routes/studentroute')
const cors=require('cors')
app.use(cors())


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('database connected successfully')
})
.catch((err)=>{
    console.log(`Error connecting the data base. n${err}`);
})
app.use(express.json())
const PORT=process.env.PORT ||3000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

    app.use(  '/api/studentroute',studentRoute)