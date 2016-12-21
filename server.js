var express = require('express');
var zapiska ={};

var server = express();
server.use(express.static(__dirname + '/public'));


server.get('/create_note', function (req, res) {
   console.log("Got a GET request for the homepage");
  
   zapiska = {
     Name:req.query.name,
	 Note:req.query.note
   };
   console.log(zapiska);
   res.status(200).send(zapiska);
});

server.get('/check_note', function(req,res){
 
  console.log("Sending note contents");
  res.status(200).send(zapiska);
})


var port = 10001;

server.listen(port, function(){
	console.log('server listening on port '+ port);
});