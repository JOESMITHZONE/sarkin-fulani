var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile('index.html');
    //res.sendFile(path.join(__dirname + '/index.html'));
});



app.listen(process.env.PORT || '3000', function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });