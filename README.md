# LearnNode

[学习Node](https://nodeschool.io/) 的答案

### 第一测 ([helloNode.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/helloNode.js))
- 普通的JS
``` javascript
console.log(...)
```
### 第二测 ([ProcessArgv.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/ProcessArgv.js))

- [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv]) 返回字符串数组，在 `LearnYouNode` 中用户自定义的参数从 `[2]` 开始
- 附带使用[Array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### 第三测 ([CountLine.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/CountLine.js))

- 使用 `require(...)` 来加载模块
- `fs` 的同步读取
- `buf` 转 `string`

### 第四测 ([CountLineAsync.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/CountLineAsync.js))

- `fs` 的异步读取
- `callback`

### 第五测 ([ListFiles.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/ListFiles.js))
- `fs` 读取文件夹返回文件名列表
- `path` 模块获取后缀名
- 文件夹参数在`[2]`，过滤后缀参数在`[3]`

### 第六测 ([ListFilesModule.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/ListFilesModule.js) & [ListFilesUseModule.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/ListFilesUseModule.js))

- `Node` 中导出模块
- `Node` 中 `(err, data)`形式
- 编写调用`callback`的代码

### 第七测 ([httpClient.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/httpClient.js))

- `http.get(...)`
- `respond.on(...)`

### 第八测 ([httpCollect.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/httpCollect.js))

- 安装第三方包
- `bl`包的使用

### 第九测 ([JuggleAsync.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/JuggleAsync.js))

- async/await

### 第十测 ([timeServer.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/timeServer.js))

- `tcp server` 的建立
- `strftime` 的使用

### 第十一测 ([FileServer.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/FileServer.js))

- 创建读取流
- 流的管道操作

### 第十二测 ([UpperServer.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/UpperServer.js))

- 获取请求方法
- 流通过 `through2-map` 转换

### 第十三测 ([TimeAPIServer.js](https://github.com/Gh0st99/LearnYouNodeSolution/blob/master/TimeAPIServer.js))
- `url` 处理 `request`
- `iso time`、`unix time`、`Date` 互相转换
- JSON的转字符串
