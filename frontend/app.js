var express = require('express');
const path = require('path');
var app = express();
require('dotenv').config();


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', 'html');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});


app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});
