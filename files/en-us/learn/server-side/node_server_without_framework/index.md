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

This article provides a simple static file server built with pure Node.js without the use of a framework.

[Node.js](https://nodejs.org/en/) has many frameworks to help you get your server up and running.

The most popular are:

- [Express](/en-US/docs/Learn/Server-side/Express_Nodejs): A widely used framework.
- [Hapi.js](https://hapi.dev/): A rich framework for building applications and services
- [Total](https://www.totaljs.com/): The all-in-one Node.js framework, which does not depend on any other framework, or module.

These will not suit every situation. A developer may need to build their own server without other dependencies.

## Example

A simple static file server built with Node.js:

```js
const http = require('http');
const fs = require('fs');
const path = require('path');

http
  .createServer((request, response) => {
    console.log(`request ${request.url}`);

    let filePath = `.${request.url}`;
    if (filePath === './') {
      filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.wav': 'audio/wav',
      '.mp4': 'video/mp4',
      '.woff': 'application/font-woff',
      '.ttf': 'application/font-ttf',
      '.eot': 'application/vnd.ms-fontobject',
      '.otf': 'application/font-otf',
      '.wasm': 'application/wasm',
    };

    const contentType = mimeTypes[extname] ?? 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === 'ENOENT') {
          fs.readFile('./404.html', (error, content) => {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
          });
        } else {
          response.writeHead(500);
          response.end(
            `Sorry, check with the site admin for error: ${error.code} ..\n`
          );
        }
      } else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
      }
    });
  })
  .listen(8125);
console.log('Server running at http://127.0.0.1:8125/');
```

### Breakdown

Lines 1 through 3 load modules provided by Node.js, roughly similar to imports.

```js
const http = require('http');
const fs = require('fs');
const path = require('path');
```

Afterward is the function for creating the server. `https.createServer` returns a `Server` object, which we can start up by listening on port 8125.

```js
http
  .createServer((request, response) => {
    // …
  })
  .listen(8125);
console.log('Server running at http://127.0.0.1:8125/');
```

The following lines deal with logging the request URL and fixing it if it does not specify a file.

```js
console.log(`request ${request.url}`);
let filePath = `.${request.url}`;
if (filePath === './') {
  filePath = './index.html';
}
```

For example, if the URL sent is `example.org`, it will be interpreted as `example.org/index.html`.

Next, we lowercase and look for the extension of the file being requested to see if it matches with one of our [MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). If no matches are found, we use the `application/octet-stream` as the default type.

```js
const extname = String(path.extname(filePath)).toLowerCase();
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm',
};

const contentType = mimeTypes[extname] ?? 'application/octet-stream';
```

Lastly, we respond to the client with the file information. This function reads the file using our previously prepared `filePath` variable.

```js
fs.readFile(filePath, (error, content) => {
  // …
});
```

The first thing we do is to compensate for any possible errors.

```js
if (error) {
  // …
} else {
  // …
}
```

Most often, the error will be `ENOENT`, in which case we reply with a 404 error.

```js
if (error.code === 'ENOENT') {
  fs.readFile('./404.html', (error, content) => {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(content, 'utf-8');
  });
} else {
  response.writeHead(500);
  response.end(`Sorry, check with the site admin for error: ${error.code}..\n`);
}
```

Finally, if there are no errors, we send over the requested file.

```js
response.writeHead(200, { 'Content-Type': contentType });
response.end(content, 'utf-8');
```
