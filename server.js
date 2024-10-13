const http = require('http'); // HTTP Module
const fs = require('fs'); // fs Module

http.createServer(
    function (req, res) {

    fs.readFile("file1.html" , function (err , data) { 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end( data )
    })
        

    }).listen(8888, () => {
        console.log("Server is listening on port 8888");
    });