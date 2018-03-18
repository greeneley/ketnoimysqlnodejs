var express = require('express');
var mysql = require('mysql');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false})
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static(__dirname+'/public'));

var connection = mysql.createConnection({
    host:'127.0.0.1',
    port: 3308,
    user:'root',
    password:'C87MJ0E40lfOcbr6',
    database:'haipro'
});
connection.connect();
app.get('/',function(req,res){
    connection.query('select * from haipro.user', function (error, results, fields) {
        if (error) throw error;
        res.render('index',{results});
      });
  
});

http.listen(process.env.PORT || 8888,function(){
    console.log('listening on *:8888');
})
