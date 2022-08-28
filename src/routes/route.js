const express = require('express');
const controller=require('../controllers/userController');
const middleWare=require('../middleware/auth');

const router = express.Router();

router.post('/users',controller.newUser);

router.post('/login',controller.loginUser);

router.get('/users/:userId',middleWare.tokenAuthenticator,controller.getUserDetails);

router.put('/users/:userId',middleWare.tokenAuthenticator,controller.updateUserDetails);

router.delete('/users/:userId',middleWare.tokenAuthenticator,controller.deleteUser);

module.exports = router;














// const express = require('express');
// const router = express.Router();
// const userController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

// module.exports = router;