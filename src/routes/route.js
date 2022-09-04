const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController=require("../Controllers/weatherController")
const memesController=require("../controllers/memesController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
//////////////////  1-09-assignment/////////////
router.get("/cowin/districtId",CowinController.getSessionsByDistrict)
router.get("/weather/london",weatherController.weather)
router.get("/tempOfLondon",weatherController.tempOfLondon);
router.get("/tempOfCities",weatherController.tempOfCities);
router.get("/getMemes", memesController.getMeme)
router.post("/createMemes", memesController.createMeme)




// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;