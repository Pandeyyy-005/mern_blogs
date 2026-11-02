const express=require('express')
const router = require('./router/blogRouter')
const { connectDb } = require('./db')
const cors=require('cors')
connectDb()
const app=express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/blog",router)
app.listen(4000,()=>{
    console.log("runing..");
    
})