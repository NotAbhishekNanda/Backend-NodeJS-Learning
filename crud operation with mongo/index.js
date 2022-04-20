const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


const postRoute = require('./routes/posts')

app.use('/posts', postsRoute);

//Connect to db
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, 
useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('The database is connected')
});

const port = 3000;
app.listen(port, () => {
    console.log(`app is listening at port no ${port}`)
})
