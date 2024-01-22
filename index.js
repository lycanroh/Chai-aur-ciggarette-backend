const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('rohitdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai sutta aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur Code Karo</h2>')
})

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})