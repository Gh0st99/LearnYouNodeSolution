const http = require('http'),
      bl = require('bl');

const url = process.argv[2];

http.get(url, (res) => {
    res.pipe(bl((err, data) => {
        if (err) throw err;
        const str = data.toString();
        console.log(str.length);
        console.log(str);
    }));
});
