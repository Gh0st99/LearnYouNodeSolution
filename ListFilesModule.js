var fs = require('fs');
var path = require('path');

module.exports = function(directory, extName, callback) {
    //处理 .ext
    var ext = `.${extName}`;
    fs.readdir(directory, (err, files) => {
        if (err) return callback(err);
        
        var ret = files.filter((val, index) => {
            return path.extname(val) === ext;
        });

        callback(null, ret);
    });
};