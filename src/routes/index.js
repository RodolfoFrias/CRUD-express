const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', async (req, res, err) => {
    const users = await User.find();
    res.render('index', {
        users
    });
});

router.post('/add', async (req, res, err) => {
    const user = new User(req.body);
    await user.save();
    res.redirect('/');
});

router.get('/delete/:id', async (req, res, err) => {
   const { id } = req.params;
   await User.remove({_id : id});
   res.redirect('/');
});

router.get('/edit/:id', async (req, res, err) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.render('edit', {
        user
    });
});

module.exports = router;