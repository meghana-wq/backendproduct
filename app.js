const express=require("express")
const moongoose=require("mongoose")
const cors=require("cors")
const app=express()
const products=require("./models/products")


app.get("/",(req,res)=>{
res.send("hi")
})

app.get("/search",(req,res)=>{
    res.send("search page")
    })
    app.post("/add",(req,res)=>{
        res.send("add done")
    })

app.listen(8080,()=>{
    console.log("server started")
})
    