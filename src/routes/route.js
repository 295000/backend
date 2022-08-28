const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")


//           Q=1
router.post("/createAuthor", authorController.createAuthor  )
//           Q=2
router.post("/createPublishers",publisherController.createPublishers)
//           Q=3
router.post("/createBook", bookController.createBook  )
//           Q=4
router.get("/getBooksWithAuthorandPublisherDetails", bookController.getBooksWithAuthorandPublisherDetails)
//           Q=5a
router.put("/books",bookController.updateBooks)
//           Q=5b
router.put("/updatePrice",bookController.updatePrice)

//router.get("/getAuthorsData", authorController.getAuthorsData)


// router.get("/getBooksData", bookController.getBooksData)

 

module.exports = router;
