const express=require('express')
const app=express()
app.use(express.json())
app.post("/",(req,res)=>{
 const {name,age}=req.body
 console.log(name,age)
 res.send(`Welcome to the Application ${name} your age is:: ${age}`)

}).listen(3001)
console.log("Server is Running...")