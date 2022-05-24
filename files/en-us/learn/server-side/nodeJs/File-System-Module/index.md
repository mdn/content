## Node.js as a File Server
The Node.js file system module allows you to work with the file system on your computer.
To include the File System module, use the require() method:
```js
var fs = require('fs');
```
Common use for the File System module:
-Read files
-Create files
-Update files
-Delete files
-Rename files

## Read Files
The fs.readFile() method is used to read files on your computer.
Assume we have the following HTML file (located in the same folder as Node.js):
```html
<html>
<body>
<h1>My Header</h1>
<p>My paragraph.</p>
</body>
</html>
```
```js
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
```
Save the code above in a file called "demo_readfile.js", and initiate the file:
```terminal
C:\Users\Your Name>node demo_readfile.js
```
If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080
