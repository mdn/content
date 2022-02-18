---
title: Node.js server without a framework
slug: Learn/Server-side/Node_server_without_framework
tags:
  - JavaScript
  - NeedsContent
  - Node
  - Server
  - no framework
---
{{LearnSidebar}}

This article provides a simple static file server built with pure [Node.js](https://nodejs.org/en/) without the use of a framework. Current state of Node.js is such that almost everything we need can be easily solved by powerful internal APIs and a few lines of code.

## Example

A simple static file server built with Node.js:

```js
'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const PORT = 8000;

const MIME_TYPES = {
  default: 'application/octet-stream',
  html: 'text/html; charset=UTF-8',
  js: 'application/javascript; charset=UTF-8',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  ico: 'image/x-icon',
  svg: 'image/svg+xml',
};

const STATIC_PATH = path.join(process.cwd(), './static');

const toBool = [() => true, () => false];

const prepareFile = async (url) => {
  const paths = [STATIC_PATH, url];
  if (url.endsWith('/')) paths.push('index.html');
  const filePath = path.join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : STATIC_PATH + '/404.html';
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);
  return { found, ext, stream };
};

http.createServer(async (req, res) => {
  const file = await prepareFile(req.url);
  const statusCode = file.found ? 200 : 404;
  const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
  res.writeHead(statusCode, { 'Content-Type': mimeType });
  file.stream.pipe(res);
  console.log(`${req.method} ${req.url} ${statusCode}`);
}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
```

### Breakdown

Following lines loads internal modules Node.js modules, roughly similar to imports.

```js
const fs = require('fs');
const http = require('http');
const path = require('path');
```

Afterward is the function for creating the server. `https.createServer` returns a `Server` object, which we can start up by listening on `PORT`.

```js
http.createServer((req, res) => {
  /* handle http requests */
}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
```

Async function `prepareFile` returns structure: `{ found: boolean , ext: string, stream: ReadableStream }` If file can be served (server process have an access and no path-traversal vulnerability found), we will return `200` as a `statusCode`, othervise `404`. Note that otehr status codes can be found in `http.STATUS_CODES`. With `404` status we will return content of `'/404.html'` file.

Еhe extension of the file being requested will be parsed and lower-cased. After that we will search `MIME_TYPES` collection for the right [MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). If no matches are found, we use the `application/octet-stream` as the default type.

Lastly, we respond to the client with the file information. This function reads the file using our previously prepared `filePath` variable.

```js
fs.readFile(filePath, function(error, content) {
    ...
});
```

Finally, if there are no errors, we send over the requested file. In any case `file.stream` will contain `Readable` stream which wille be piped into `res` (instance of the `Writable` stream).

```js
res.writeHead(statusCode, { 'Content-Type': mimeType });
file.stream.pipe(res);
```
