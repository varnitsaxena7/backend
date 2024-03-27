require('dotenv').config()
const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at varnit</h1>')
})

app.listen(process.env.PORT,()=>
{
    console.log('Example app listening at port' )
}) 