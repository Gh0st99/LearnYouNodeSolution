const net = require('net'),
    strftime = require('strftime');

const port = process.argv[2];

var server = net.createServer((socket) => {
    // strftime提供了format
    var now = strftime('%F %R\n');
    socket.end(now);
});

server.listen(port);


/*var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now() {
    var d = new Date()
    return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))*/