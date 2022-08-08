function date() {
    let day = new Date();
    console.log("today's Date is", day.getDate())
}


function month() {
    let day = new Date()
    console.log("current month is")
}
function trimString(){
    console.log("   NajmaFarheen   ".trim())
 }

 function lowerString(){
    console.log("Najma FarHeen".toLowerCase())
 }

 function upperString(){
    console.log("Najma FarHeen".toUpperCase())
 }


 module.exports.trim=trimString;
 module.exports.lower=lowerString;
 module.exports.upper=upperString;
