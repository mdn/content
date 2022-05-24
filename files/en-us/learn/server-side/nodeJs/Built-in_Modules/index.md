## What is a Module in Node.js?
Consider modules to be the same as JavaScript libraries.
A set of functions you want to include in your application.

## Built-in Modules
Node.js has a set of built-in modules which you can use without any further installation.

## Include Modules
To include a module, use the require() function with the name of the module:
```js
var http = require('http');
```
## Create Your Own Modules
You can create your own modules, and easily include them in your applications.
The following example creates a module that returns a date and time object:
```js
exports.getDateTime = function () {
  return Date();
};
```
Attach properties and methods to `module.exports` object to make them available outside the module file. The `module.exports` is a special object which is included in every JavaScript file in the Node.js application by default.
Save the code above in a file called "myfirstmodule.js"

## Include Your Own Module
Now you can include and use the module in any of your Node.js files.
```js
const http = require('http');
const dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.getDateTime());
  res.end();
}).listen(8080);
```
Notice that we use `./` to locate the module. It means the module is located in the same folder as our `myfirstmodule.js` file.
Save the code above in a file called "demo_module.js", and initiate the file:
```terminal
C:\Users\Your Name>node demo_module.js
```
If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080
