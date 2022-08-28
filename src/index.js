const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://subhadip21:GDMal64T76NYs9lh@cluster0.867p1vn.mongodb.net/db-22"
, {
   useNewUrlParser: true 
}
).then( () => {console.log( "MongoDb is connected")}  )
.catch( err => console.log(err))




app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

