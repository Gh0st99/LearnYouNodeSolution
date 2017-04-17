const http = require('http'),
    url = require('url');

const port = process.argv[2];

var server = http.createServer((req, res) => {
    const urlString = url.parse(req.url, true),
        pathName = urlString.pathname;

    const query = urlString.query,
        isoTime = new Date(query.iso);

    if (pathName === '/api/parsetime') {
        parseTime(isoTime, res);
    } else if (pathName === '/api/unixtime') {
        unixTime(isoTime, res);
    } else {
        res.writeHead(404);
        res.end();
    }
});

function parseTime(time, res) {
    const ret = {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };

    writeJSON(res, ret);
}

function unixTime(time, res) {
    const ret = {
        unixtime: time.getTime()
    };
    writeJSON(res, ret);
}

function writeJSON(res, ret) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(ret));
}
server.listen(port);

/*
var http = require('http')
var url = require('url')

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time) {
    return {
        unixtime: time.getTime()
    }
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

    if (result) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))*/