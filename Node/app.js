// const http = require('http');

const express = require('express');

const app = express()
// app.use((req, res, next) => {
//     console.log("In the middleware!");
//     next();
// });

app.use('/', (req, res, next) => {
    console.log("This always runs");
    next();
})
app.use('/add-products', (req, res, next) => {
    console.log("In another middleware!");
    res.send('<h1>Hello from Express!</h1>');
});

// const server = http.createServer(app);

// const routes = require('./routes');
// const fs = require('fs');
// function rqListener(req, res) {

// }
// http.createServer(rqListener);
// const server = http.createServer(function() {
    // console.log(req);
    // console.log(req.url, req.method, req.headers);
    // const url = req.url;
    // const method = req.method;
    //process.exit();
    
// });
app.listen(3000);