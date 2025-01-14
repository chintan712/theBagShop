const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logoutUser} = require('../controllers/authController');


router.get('/', (req,res)=>{
    res.send("hey its working");
});

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', logoutUser);

router.get('/profile', (req, res)=>{
    res.render("profile");
});

module.exports = router;