
const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")


const createCollege = async function (req, res) {
    try {
        let body = req.body
        if ((Object.keys(req.body)).length == 0) {
            return res.status(400).send({ status: false, message: "Please provide details of the college" })
        }
        if (!body.name) {
            return res.status(400).send({ status: false, message: "Please provide name of the college" })
        }
        if (!(/^[a-z]{2,20}$/i.test(body.name))) {
            return res.status(400).send({ status: false, message: "Name can contain only letters" })
        }
        let name = await collegeModel.findOne({ name: body.name })
        if (name) {
            return res.status(400).send({ status: false, message: "Please provide unique name" })
        }
        if (!body.fullName) {
            return res.status(400).send({ status: false, message: "Please provide fullName of the college" })
        }
        if (!(/^[a-z ,]{2,200}$/i.test(body.fullName))) {
            return res.status(400).send({ status: false, message: "fullName can contain only letters,space and comma" })
        }
        if (!body.logoLink) {
            return res.status(400).send({ status: false, message: "Please provide logoLink of the college" })
        }
        if (typeof body.logoLink !== "string") {
            return res.status(400).send({ status: false, message: "LogoLink is Invalid" })
        }
        let data = await collegeModel.create(body)
        return res.status(201).send({ status: true, data: data })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const collegeDetails = async function (req, res, next) {
    try {
        let collegeName = req.query.collegeName
        if (!collegeName) {
            return res.status(400).send({ status: false, message: "Please provide a college Name" })
        }
        let collegeDetail = await collegeName.findOne({ name: collegeName })
        // console.log(collegeDetail);
        if (!collegeDetail) {
            return res.status(404).send({ status: false, message: "No college exists with this Name" })
        }
        let ColId = collegeDetail["_id"]
        let Interns = await internModel.find({ collegeId: ColId }).select({name:1,email:1,mobile:1})
        if (Interns.length == 0) {
            return res.status(404).send({ status: false, message: "No interns found of this college" })
        }
        let data={...collegeDetail,interns:Interns}
        // console.log(data);
        return res.status(200).send({data:data})
    }
    catch (err) {
    }
}
module.exports.collegeDetails=collegeDetails
module.exports.createCollege = createCollege