//importing modules
const express = require('express')
const userController = require('../controllers/userController')
const { signup, login, postRace, getRaces } = userController
const userAuth = require('../middleware/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup)

//login route
router.post('/login', login )

//post race route
router.post('/postRace', userAuth.isAuthorized, postRace )

//get race route
router.get('/getRaces', getRaces)

module.exports = router