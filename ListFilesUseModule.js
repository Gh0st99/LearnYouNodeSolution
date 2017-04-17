var floder = process.argv[2];
var ext = process.argv[3];

var listFiles = require('./ListFilesModule');

listFiles(floder, ext, (err, files) => {
    if(err) throw err;
    files.forEach((file) => {
        console.log(file);
    });
});