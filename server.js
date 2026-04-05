const express=require("express")

const app=express() //server created

app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/products',(req,res)=>{
    res.send("products page")
})

app.get('/contact',(req,res)=>{
    res.send("contact page")
})

app.listen(3000) //server started
