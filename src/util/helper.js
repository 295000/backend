function date() {
    let day = new Date();
    console.log("today's Date is", day.getDate())
}


function month() {
    let day = new Date()
    console.log("current month is", day.getMonth() + 1, "August");
}

function batchInfo() {
    console.log("plutonium, W3D5, the topic for today is Nodejs module system")
}


module.exports.date = date;
module.exports.month = month;
module.exports.batch = batchInfo;
