const express = require('express');
const res = require('express/lib/response');
const app = express()
app.use(express.json())

//Middle ware
const reqFilter = (req,res,next)=>{
    if(!res.query.api_key)
    {
        res.send('please provide authentication key')
    }
    else{
        next()
    }
    app.use(reqFilter)
}
app.use('/api/subscribers', require('./routes/api/subscribers'));
const port = 3000;
app.listen(port, () => {
    console.log(`app is listening at port no ${port}`)
})