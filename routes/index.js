const express = require('express')
const router = require("express").Router()
const todo = require('./todo')
const {signIn, signUp} = require('../controllers/AuthController')

router.get("/", (req,res) => {
    res.status(200).json({msg : 'connected!'})
})
router.post('/api/signup', signUp)
router.post('/api/signin', signIn)
router.use('/api/todos', todo)


module.exports = router