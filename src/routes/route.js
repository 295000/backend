const express = require('express');
const controller=require('../controllers/userController');
const middleWare=require('../middleware/auth');

const router = express.Router();

router.post('/users',controller.newUser);

router.post('/login',controller.loginUser);

router.get('/users/:userId',middleWare.Authenticate,middleWare.authorise,controller.getUserDetails);

router.put('/users/:userId',middleWare.Authenticate,middleWare.authorise,controller.updateUserDetails);

router.delete('/users/:userId',middleWare.Authenticate,middleWare.authorise,controller.deleteUser);

module.exports = router;











// const express = require('express');
// const router = express.Router();
// const userController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser)

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)

// router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)

// module.exports = router;