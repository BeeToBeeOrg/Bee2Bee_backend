var express = require('express');
const path = require('path');
var app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
});
app.get('/register-user',function(req,res){
  res.sendFile(path.join(__dirname + '/public/html/register_user.html'));
});
app.get('/register-company',function(req,res){
  res.sendFile(path.join(__dirname + '/public/html/register_company.html'));
});
app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname + '/public/html/404.html'));
});
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
