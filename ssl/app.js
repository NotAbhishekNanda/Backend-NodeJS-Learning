const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');

const app = express()

app.use('/', (req, res, next) => {
    res.send('Hello from SSL server')
})

const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'certificate', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'certificate', 'certificate.pem')),
    },
    app
)

sslServer.listen(3000, () => console.log('This is secure server on port 3000'))
