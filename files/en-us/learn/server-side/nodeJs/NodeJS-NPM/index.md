---
title: Node.js server without a framework
slug: Learn/Server-side/Node_server_without_framework
tags:
  - JavaScript
  - NeedsContent
  - Node
  - NPM
  - Server
---

## What is NPM?

NPM is a package manager for Node.js packages, or modules if you like.
www.npmjs.com hosts thousands of free packages to download and use.
The NPM program is installed on your computer when you install Node.js

### NPM is already ready to run on your computer!

## What is a Package?

A package in Node.js contains all the files you need for a module.
Modules are JavaScript libraries you can include in your project.

## Download a Package

Downloading a package is very easy.
Open the command line interface and tell NPM to download the package you want.
I want to download a package called "mdn-data":

```terminal
...\Folder>npm install mdn-data
```

Now you have downloaded and installed your first package!
NPM creates a folder named "node_modules", where the package will be placed. All packages you install in the future will be placed in this folder.
My project now has a folder structure like this:

```terminal
C:\Users\My Name\node_modules\upper-case
```

## Using a Package

Once the package is installed, it is ready to use.
Include the "upper-case" package the same way you include any other module:

```js
const uc = require('upper-case');
```

Create a Node.js file that will convert the output "Hello World!" into upper-case letters:

```js
const http = require('http');
const uc = require('upper-case');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);
```

Save the code above in a file called "demo_uppercase.js", and initiate the file:

```terminal
...\Folder>node demo_uppercase.js
```

If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080

# You can also read official npm's docs

The documentation name can be found just [Here](https://docs.npmjs.com/about-npm)
