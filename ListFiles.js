var fs = require('fs');
var path = require('path');

var fileName = process.argv[2];
var extName = '.' + process.argv[3];

fs.readdir(fileName, (err, files) => {
    if (err) throw err;

    files.forEach((val, index) => {
        if (path.extname(val) === extName)
            console.log(val);
    })
});


/*var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})*/