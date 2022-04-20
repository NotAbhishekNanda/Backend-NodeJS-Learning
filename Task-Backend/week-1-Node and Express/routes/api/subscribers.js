const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const uuid = require('uuid');
let subscriber = require('../../subscriber');

router.get('/', (req,res) => {
    res.json(subscriber);
})
router.get('/:id', (req, res) => {
    const found = subscriber.some(user => user.id === parseInt(req.params.id));
    if(found) {
        res.json(subscriber.filter(user => user.id === parseInt(req.params.id)));
    
    }
    else {
        res.sendStatus(400);
    }

})

router.post("/",(req,res) => {
    const newUser ={
        id:uuid.v4(),
        name:req.body.name,
        email:req.body.email
    };
if(!newUser.name || !newUser.email){
    return res.sendStatus(400)
}
subscriber.push(newUser);
res.json(subscriber)

});

//for updating subscriber
router.put('/:id', (req,res) => {
    const found = subscriber.some(user => user.id === parseInt(req.params.id));
    if(found){
        const updateUser = req.body;
        subscriber.forEach(user => {
            if(user.id === parseInt(req.params.id)) {
                user.name = updateUser.name ? updateUser.name : user.name;
                user.email = updateUser.email ? updateUser.email : user.email;
                res.json({msg: 'User updated', user});
                
            }


        });
    } else {
        res.sendStatus(400);
    }
});

//For Deleting

router.delete('/:id', (req,res) => {
    const found = subscriber.some(user => user.id === parseInt(req.params.id));
    if(found){
        subscriber = subscriber.filter(user => user.id !== parseInt(req.params.id))
        res.json({
            msg:"subscriber deleted", subscriber
        });
    } else {
        res.sendStatus(400);
    }
});

module.exports =  router;
