---
title: Node.js URL module
slug: Learn/Server-side/nodeJs/URL module
tags:
  - JavaScript
  - NeedsContent
  - Node
  - Url module
  - built-in module
  - Server
---

## The Built-in URL Module

The URL module splits up a web address into readable parts.
To include the URL module, use the require() method:

```js
const url = require('url');
```

Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

```js

const url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
```

## Node.js File Server

Now we know how to parse the query string, and in the previous chapter we learned how to make Node.js behave as a file server. Let us combine the two, and serve the file requested by the client.
Create two html files and save them in the same folder as your node.js files.

```html
<!DOCTYPE html>
<html>
<body>
<h1>Summer</h1>
<p>I love the sun!</p>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<body>
<h1>Winter</h1>
<p>I love the snow!</p>
</body>
</html>
```

Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

```js
import http from"http";
import url  from "url";
import fs   from "fs";

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
```

Remember to initiate the file:

```terminal
...\Folder>node demo_fileserver.js
```

If you have followed the same steps on your computer, you should see two different results when opening these two addresses:
http://localhost:8080/summer.html or http://localhost:8080/winter.html
