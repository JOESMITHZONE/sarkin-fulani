var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');

app.use(express.static('public'));
//app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//app.set('views', path.join(process.cwd() + '/views'));
app.use(express.static(path.join(process.cwd() + '/public')));



app.get('/', function (req, res) {
 return res.sendFile(path.join(__dirname,'public', 'index.html'));
 });


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



// viewed at http://localhost:8080
app.get('/', function(req, res) {
   // res.sendFile('index.html');
    res.render('index.html');
});



app.listen(process.env.PORT || '3000', function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });