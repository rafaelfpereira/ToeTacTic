var express = require('express')
var api = express()

api.get('/', function (req, res) {
   res.send('Hello World, this is a test.')
})

var server = api.listen(3333, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
