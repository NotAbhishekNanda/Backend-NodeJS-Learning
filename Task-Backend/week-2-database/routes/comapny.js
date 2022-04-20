const { response } = require('express');
const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../database');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// app.use(bodyParser);
app.use(bodyParser.urlencoded({ extended: true }));

// var bodyParser = require('body-parser');
// const res = require('express/lib/response');
Router.post('/', (req, res) => {
   console.log(req.body);
   const stores = req.body;
   mysqlConnection.query("INSERT INTO vouchers (storename,URL,code,cashback,paymentmethod,shopid,shopsite) VALUES ('"+req.body.storename+"','"+req.body.URL+"','"+req.body.code+"','"+req.body.cashback+"','"+req.body.paymentmethod+"','"+req.body.shopid+"','"+req.body.shopsite+"')",function(err, result)      
{                                                      
  if (err)
     throw err;
});
   res.status(201).send(stores);
res.json({
    msg:"Voucher created Successfully", stores
});
//    res.send(stores)
});
Router.get('/', (req, res)=>{
    mysqlConnection.query("SELECT * FROM vouchers", (err, rows, fields)=>{
        if(!err)
        {
            // res.send(rows);
            res.json({
                msg:"Voucher fetch Successfully", rows
            });
            console.log(rows);
        }
        else{
            console.log(err);
        }
    })
})
Router.get('/:storename?/voucher', (req, res)=>{
   const storename = req.params.storename;

        if(!storename)
        return response.send('Please specify a valid storename');
        console.log(storename)
        mysqlConnection.query(`SELECT * FROM vouchers WHERE storename="${storename}"`, (error, result) => {
            
            if (error) throw error;

            res.json({
                msg:"Voucher fetch Successfully", result
            });
        });
});

module.exports = Router;