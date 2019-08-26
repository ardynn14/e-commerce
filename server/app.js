if(!process.env.NODE_ENV || process.env.NODE_ENV === `development` || process.env.NODE_ENV === `test`){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/indexRoutes.js');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');

mongoose.connect(`mongodb://localhost/ecommerce-${process.env.NODE_ENV}`, { useNewUrlParser: true, useFindAndModify: false }, function (err) {
    if (!err) { 
        console.log(`connected to database`);
    } else {
        console.log(err);
    }
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use('/', router);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port} and running on enviroment ${process.env.NODE_ENV}`);
});

module.exports = app;
