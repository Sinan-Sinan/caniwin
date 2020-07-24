const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
var cors = require('cors')

dotenv.config({path: './config.env'});

const app = express();
app.use(cors());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public'));

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/main.js'));

}

app.use('/api/v1/', require('./routes/profile'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
