const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
import data from './data';


const app = express();


//DB config
//const db = require('./config/keys').MongoURI; 

// connect to mongodb
/* mongoose.connect(db, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
})
.then(() => console.log('Mongodb connected!'))
.catch(err => console.log(err));
 */

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => {console.log('Run Port 5000')});
//app.use(expressLayouts);
//app.set('view engine', 'ejs');

//app.use('/', require('./routes/index'));

//const PORT = process.env.PORT || 5000;

//app.listen(PORT, console.log(`Sever starts on port: ${PORT}`));