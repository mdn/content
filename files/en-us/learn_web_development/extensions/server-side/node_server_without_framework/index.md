---
title: Node.js server without a framework
slug: Learn_web_development/Extensions/Server-side/Node_server_without_framework
page-type: guide
---

{{LearnSidebar}}

This article provides a simple static file server built with pure [Node.js](https://nodejs.org/en/) without the use of a framework.
The current state of Node.js is such that almost everything we needed is provided by the inbuilt APIs and just a few lines of code.

## Example

A simple static file server built with Node.js:

```js
import * as fs from "node:fs";
import * as http from "node:http";
import * as path from "node:path";

const PORT = 8000;

const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "application/javascript",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};

const STATIC_PATH = path.join(process.cwd(), "./static");

const toBool = [() => true, () => false];

const prepareFile = async (url) => {
  const paths = [STATIC_PATH, url];
  if (url.endsWith("/")) paths.push("index.html");
  const filePath = path.join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : STATIC_PATH + "/404.html";
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);
  return { found, ext, stream };
};

http
  .createServer(async (req, res) => {
    const file = await prepareFile(req.url);
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    res.writeHead(statusCode, { "Content-Type": mimeType });
    file.stream.pipe(res);
    console.log(`${req.method} ${req.url} ${statusCode}`);
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
```

### Breakdown

The following lines import internal Node.js modules.

```js
import * as fs from "node:fs";
import * as http from "node:http";
import * as path from "node:path";
```

Next we have a function for creating the server. `https.createServer` returns a `Server` object, which we can start up by listening on `PORT`.

```js
http
  .createServer((req, res) => {
    /* handle http requests */
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
```

The asynchronous function `prepareFile` returns the structure: `{ found: boolean, ext: string, stream: ReadableStream }`.
If the file can be served (the server process has access and no path-traversal vulnerability is found), we will return the HTTP status of `200` as a `statusCode` indicating success (otherwise we return `HTTP 404`).
Note that other status codes can be found in `http.STATUS_CODES`.
With `404` status we will return content of `'/404.html'` file.

The extension of the file being requested will be parsed and lower-cased. After that we will search `MIME_TYPES` collection for the right [MIME types](/en-US/docs/Web/HTTP/MIME_types). If no matches are found, we use the `application/octet-stream` as the default type.

Finally, if there are no errors, we send the requested file. The `file.stream` will contain a `Readable` stream that will be piped into `res` (an instance of the `Writable` stream).

```js
res.writeHead(statusCode, { "Content-Type": mimeType });
file.stream.pipe(res);
```
