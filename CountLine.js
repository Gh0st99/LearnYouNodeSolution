var fs = require("fs");
// 获取文件名
var fileName = process.argv[2];
// 用fs读取文件，获得Buffer
var buf = fs.readFileSync(fileName);
// 获得文件内容字符串
var content = buf.toString();
// 获得文件行数
var len = content.split('\n').length;

// 一行版本
// readFileSync返回的是一个string
var len1 = fs.readFileSync(process.argv[2], 'utf-8').split('\n').length - 1;

console.log(len - 1);

/*var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)
*/
// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1