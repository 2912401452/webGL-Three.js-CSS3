const express = require('express')
const app = express()
app.use(express.static('public'))
app.listen(3000,()=>{
    console.log('snow port 3000')
})
// import { tween, easing } from 'popmotion'
// const p = require('popmotion')