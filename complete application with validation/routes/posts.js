const req = require('express/lib/request');
const verify = require('./verifyToken');
const router = require('express').Router();

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: 'my first post',
            description: 'This is the first post posted in your feed'
        }
    });
});

module.exports = router;