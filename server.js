var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
  res.render('main')
})

app.get('/mypage', function (req, res) {
  res.render('vacation_overview')
})

app.get('/request/vacation', function (req, res) {
  res.render('request_va')
})

app.post('/request/vacation', function (req, res) {
  res.render('vacation_overview')
})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})