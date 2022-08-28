const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    BookName: String,
    
    AuthorName: {
      type:String,
      required:true
    } ,
     
    Category: String,
      
    Year: Number
    },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
