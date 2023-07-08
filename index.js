const http = require("http");
const fs = require("fs");

const myServer = http.createServer( (req, res) => {
    const log = `${Date.now()}: ${req.url} New req Received\n`;

    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("Hey Welcome to 1st Web Server Project.");
                break;
                case "/about":
                    res.end("I am Kritarth Pandey");
                    break;
                    default:
                        res.end("404 Not Found");
        }

    })
    
    
});

myServer.listen(8000, () => console.log("SERVER Connected to PORT 8000 !!!"));
