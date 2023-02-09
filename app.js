var http = require("http");
http
    .createServer(function (req, res) {
        res.end("welcome to REACT,!!!!!!");
    })
    .listen(10000);