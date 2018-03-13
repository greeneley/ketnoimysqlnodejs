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
    host:'localhost',
    user:null,
    password:null,
    database:'user2'
});
connection.connect();
app.get('/',function(req,res){
    connection.query('select * from user2', function(error,results,fields){
        if(error) throw error;
        console.log('– USER TABLE — ' , result);
        res.json(result);
    });

});

http.listen(process.env.PORT || 8888,function(){
    console.log('listening on *:8888');
})
