const express = require('express');
const router = require('./routes/todo')
const app = express();

app.use(express.json());
app.use('/', router);

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));
