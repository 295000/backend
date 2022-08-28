const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/PublisherModel")

const createBook = async function (req, res) {
   let book = req.body
   let authorId = book.author_id
   let publisherId = book.publisher_id
   //author Validation
   if (!authorId) return res.send({ msg: "authorId must be present" })
   if (!mongoose.isValidObjectId(authorId)) return res.send({ msg: "authorId is Invalid" }) //24+1 r 5
   let author = await authorModel.findById(book.author_id)
   if (!author) return res.send({ msg: "author not found" })
   //publisher validation
   if (!publisherId) return res.send({ msg: "publisherId must be present" })
   if (!mongoose.isValidObjectId(publisherId)) return res.send({ msg: "publisherId is Invalid" }) //24+$inc r dec
   let publisher = await publisherModel.findById(book.publisher_id)
   if (!publisher) return res.send({ msg: "publisher not found" })

   let bookCreated = await bookModel.create(book)
   res.send({ data: bookCreated })
}


//////////////////Q=4////////////////////////////
 const getBooksWithAuthorandPublisherDetails = async function (req, res) {
     let specificBook = await bookModel.find().populate(['author_id','publisher_id'])
      res.send({data: specificBook})

 }
//Q=5a
const updateBooks = async function (req, res) {
   let data = await bookModel.updateMany({ $or: [{ "publisher_id": "6300b5c91d41770b26fa8f3f" }, { "publisher_id": "6300e09b98299403f90daac4" }] }, { $set: { isHardCover: true } }, { new: true })
   res.send({ msg: data })
}
//Q=5b
const updatePrice = async function (req, res) {
   let price = await bookModel.updateMany({ "ratings": { $gt: 3.5 } }, { $inc: { "price": +10 } }, { new: true })
   res.send(price)
}

//module.exports={ createBook,.,updateBooks,updatePrice}
module.exports.updateBooks = updateBooks
module.exports.updatePrice = updatePrice
module.exports.createBook = createBook
module.exports.getBooksWithAuthorandPublisherDetails = getBooksWithAuthorandPublisherDetails
// module.exports.getBooksData= getBooksData
//module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
