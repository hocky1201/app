var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use 使用一個功能

app.post('/user', function (req, res) {
    console.log(req.body);
    res.send(req.body.user);
});

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/hello', function (req, res) {
    res.send('Hello World')
})

// get 使用者在讀取資料

// post 使用者傳送資料



app.listen(3005)


