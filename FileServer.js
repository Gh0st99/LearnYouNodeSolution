const http = require('http'),
    fs = require('fs');

const port = process.argv[2],
    fileLocation = process.argv[3];

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(fileLocation).pipe(res);
});

server.listen(port);