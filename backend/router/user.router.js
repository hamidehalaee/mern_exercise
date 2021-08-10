const router = require('express').Router();
let User = require('../model/user.model')

router.get('/',(req,res)=>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

router.post('/add',(req,res)=>{
    const { username, password } = req.body
    const newUser = new User({username,password})
    newUser.save()
           .then(()=> res.json('user added .'))
           .catch(err => res.status(400).json(`Error: ${err}`))
})
 module.exports = router
