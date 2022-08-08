const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const externalModule = require('../logger/logger')
const myHelper=require("../util/helper")
const stringNew=require("../validator/formatter")



router.get('/test-me', function (req, res) {
    res.send("Welcome to my application. I am Najma farheen and a part of FunctionUp Plutonium cohort.")
    externalModule.welcome(); 
    myHelper.date();
    myHelper.month();
    myHelper.batch();
    stringNew.trim();
    stringNew.lower();
    stringNew.upper();


    //console.log('My batch is', abc.name)
   // abc.printName()
    //res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason