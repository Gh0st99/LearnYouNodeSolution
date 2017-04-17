// async await 版本
// 没有处理PromisRejection
const http = require('http'),
    bl = require('bl');

const urls = process.argv.slice(2);

function printContent(url) {
    return new Promise((resolve) => {
        http.get(url, (res) => {
            res.pipe(bl((err, data) => {
                if (err) throw err;
                resolve(data.toString());
            }));
        });    
    })
}

(async () => {
    for (var i = 0; i < urls.length; ++i)
        console.log(await printContent(urls[i]));   
})();

/* 类似于提供的答案的版本
const http = require('http'),
    bl = require('bl');

var count = 0,
    content = [];
const urls = process.argv.slice(2);
function printContents() {
    for(var i = 0; i < urls.length; ++i)
        printContent(i)
}

function printArray() {
    content.forEach((val) => {
        console.log(val);
    });
}

function printContent(i) {

    http.get(urls[i], (res) => {
        res.pipe(bl((err, data) => {
            if (err) throw err;
            
            content[i] = data.toString();
            count++;

            if(count === 3) 
                printArray();
        }));
    });
}

printContents();*/

/*var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }

            results[index] = data.toString()
            count++

            if (count === 3) {
                printResults()
            }
        }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}*/