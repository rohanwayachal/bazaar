var express = require('express')
const bodyParser = require('body-parser');

var app = express()

const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});



var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
// Body Parser Middleware
app.use(bodyParser.json());

app.use('/', express.static(__dirname+'/public'))


app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})


var category = require('./routes/category')
app.use('/category', category)


var port = process.env.PORT || 8080;

app.listen(port)