const express = require('express');
const router = express.Router();
const usersRoutes = require('./users');

router.get('/',(req,res)=> {
    res.send('<h1>HOLA MUNDO</h1>')
})

router.use('/', usersRoutes);

router.use((req,res)=>{
    res.status(404).send('Page not found')
})

module.exports = router;