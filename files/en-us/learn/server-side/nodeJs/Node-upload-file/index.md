---
title: Node.js upload file
slug: Learn/Server-side/nodeJS/NodeJs Upload Files
tags:
  - JavaScript
  - NeedsContent
  - Node
  - upload file
  - Server
---
## The Formidable Module
There is a very good module for working with file uploads, called "Formidable".
The Formidable module can be downloaded and installed using NPM:
```terminal
C:\Users\Your Name>npm install formidable
```
After you have downloaded the Formidable module, you can include the module in any application:
```terminal
var formidable = require('formidable');
```
## Upload Files
Now you are ready to make a web page in Node.js that lets the user upload files to your computer:
### Step 1: Create an Upload Form
Create a Node.js file that writes an HTML form, with an upload field:
```js
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080);
```
## Step 2: Parse the Uploaded File
Include the Formidable module to be able to parse the uploaded file once it reaches the server.
When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.
```js
var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
```
### Step 3: Save the File
When a file is successfully uploaded to the server, it is placed on a temporary folder.
The path to this directory can be found in the "files" object, passed as the third argument in the parse() method's callback function.
To move the file to the folder of your choice, use the File System module, and rename the file:
```js
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
```
