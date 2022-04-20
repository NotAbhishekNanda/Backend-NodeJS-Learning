const mysql = require('mysql')
const express = require('express');
const app = express();
const mysqlConnection = require("./database");
const storeRoutes = require('./routes/comapny');
// const bodyParser = require('body-parser');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false}));

app.use(express.json())
const port = 3000;

// app.use(bodyParser());
app.use('/store', storeRoutes);
app.listen(port, () => {
    console.log(`app is listening at port no ${port}`)
})