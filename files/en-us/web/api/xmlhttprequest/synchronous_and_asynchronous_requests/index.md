---
title: Synchronous and asynchronous requests
slug: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
tags:
  - Communication
  - DOM
  - Guide
  - Intermediate
  - Networking
  - Synchronous
  - XMLHttpRequest
  - asynchronous
---
{{domxref('XMLHttpRequest')}} supports both synchronous and asynchronous communications. In general, however, asynchronous requests should be preferred to synchronous requests for performance reasons.

Synchronous requests block the execution of code which causes "freezing" on the screen and an unresponsive user experience.

## Asynchronous request

If you use an asynchronous {{domxref('XMLHttpRequest')}}, you receive a callback when the data has been received. This lets the browser continue to work as normal while your request is being handled.

### Example: send a file to the console log

This is the simplest usage of asynchronous {{domxref('XMLHttpRequest')}}.

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
```

Line 2 specifies `true` for its third parameter to indicate that the request should be handled asynchronously.

Line 3 creates an event handler function object and assigns it to the request's `onload` attribute. This handler looks at the request's `readyState` to see if the transaction is complete in line 4; if it is, and the HTTP status is 200, the handler dumps the received content. If an error occurred, an error message is displayed.

Line 15 actually initiates the request. The callback routine is called whenever the state of the request changes.

### Example: writing a function to read an external file

In some cases, you must read many external files. This is a standard function which uses the {{domxref('XMLHttpRequest')}} object asynchronously in order to switch the content of the read file to a specified listener.

```js
function xhrSuccess() {
    this.callback.apply(this, this.arguments);
}

function xhrError() {
    console.error(this.statusText);
}

function loadFile(url, callback /*, opt_arg1, opt_arg2, ... */) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.arguments = Array.prototype.slice.call(arguments, 2);
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.send(null);
}
```

Usage:

```js
function showMessage(message) {
    console.log(message + this.responseText);
}

loadFile("message.txt", showMessage, "New message!\n\n");
```

The signature of the utility function **_loadFile_** declares (i) a target URL to read (via an HTTP GET request), (ii) a function to execute on successful completion of the XHR operation, and (iii) an arbitrary list of additional arguments that are passed through the XHR object (via the `arguments` property) to the success callback function.

Line 1 declares a function invoked when the XHR operation completes successfully. It, in turn, invokes the callback function specified in the invocation of the `loadFile` function (in this case, the function `showMessage`) which has been assigned to a property of the XHR object (Line 11). The additional arguments (if any) supplied to the invocation of function loadFile are "applied" to the running of the callback function.

Line 5 declares a function invoked when the XHR operation fails to complete successfully.

Line 11 stores the success callback given as the second argument to `loadFile` in the XHR object's `callback` property.

Line 12 slices the arguments array given to the invocation of `loadFile`. Starting with the third argument, all remaining arguments are collected, assigned to the arguments property of the variable `xhr`, passed to the success callback function `xhrSuccess`., and ultimately supplied to the callback function (in this case, `showMessage`) which is invoked by function `xhrSuccess`.

Line 15 specifies _true_ for its third parameter to indicate that the request should be handled asynchronously.

Line 16 actually initiates the request.

### Example: using a timeout

You can use a timeout to prevent your code from hanging while waiting for a read to finish. This is done by setting the value of the `timeout` property on the {{domxref('XMLHttpRequest')}} object, as shown in the code below:

```js
function loadFile(url, timeout, callback) {
    var args = Array.prototype.slice.call(arguments, 3);
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.error("The request for " + url + " timed out.");
    };
    xhr.onload = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback.apply(xhr, args);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.timeout = timeout;
    xhr.send(null);
}
```

Notice the addition of code to handle the "timeout" event by setting the `ontimeout` handler.

Usage:

```js
function showMessage (message) {
    console.log(message + this.responseText);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
```

Here, we're specifying a timeout of 2000 ms.

> **Note:** Support for `timeout` was added in {{Gecko("12.0")}}.

## Synchronous request

> **Note:** Starting with Gecko 30.0 {{geckoRelease("30.0")}}, Blink 39.0, and Edge 13, synchronous requests on the main thread have been deprecated due to their negative impact on the user experience.

Synchronous XHR requests often cause hangs on the web. But developers typically don't notice the problem because the hang only manifests with poor network conditions or when the remote server is slow to respond. Synchronous XHR is now in deprecation state. The recommendation is that developers move away from the synchronous API and instead use asynchronous requests.

All new XHR features such as `timeout` or `abort` are not allowed for synchronous XHR. Doing so will raise an `InvalidAccessError`.

### Example: HTTP synchronous request

This example demonstrates how to make a simple synchronous request.

```js
var request = new XMLHttpRequest();
request.open('GET', '/bar/foo.txt', false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```

Line 3 sends the request. The `null` parameter indicates that no body content is needed for the `GET` request.

Line 5 checks the status code after the transaction is completed. If the result is 200 -- HTTP's "OK" result -- the document's text content is output to the console.

### Example: Synchronous HTTP request from a Worker

One of the few cases in which a synchronous request does not usually block execution is the use of {{domxref('XMLHttpRequest')}} within a [`Worker`](/en-US/docs/Web/API/Worker).

**`example.html`** (the main page):

```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>MDN Example</title>
<script type="text/javascript">
  var worker = new Worker("myTask.js");
  worker.onmessage = function(event) {
    alert("Worker said: " + event.data);
  };

  worker.postMessage("Hello");
</script>
</head>
<body></body>
</html>
```

**`myFile.txt`** (the target of the synchronous {{domxref('XMLHttpRequest')}} invocation):

    Hello World!!

**`myTask.js`** (the [`Worker`](/en-US/docs/Web/API/Worker)):

```js
self.onmessage = function (event) {
  if (event.data === "Hello") {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "myFile.txt", false);  // synchronous request
    xhr.send(null);
    self.postMessage(xhr.responseText);
  }
};
```

> **Note:** The effect is asynchronous, because of the use of the `Worker`.

This pattern can be useful, for example in order to interact with the server in the background, or to preload content. See [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) for examples and details.

### Adapting Sync XHR use cases to the Beacon API

There are some cases in which the synchronous usage of {{domxref('XMLHttpRequest')}} is not replaceable, like during the {{domxref("Window.unload_event", "unload")}}, {{domxref("Window.beforeunload_event", "beforeunload")}}, and {{domxref("Window.pagehide_event", "pagehide")}} events. You should consider using the `fetch()` API with the `keepalive` flag. When `fetch` with `keepalive` isn't available, you can consider using the {{domxref("navigator.sendBeacon()")}} API, which can support these use cases while typically delivering a good UX.

The following example shows theoretical analytics code that attempts to submit data to a server by using a synchronous {{domxref('XMLHttpRequest')}} in an unload handler. This results in the unloading of the page to be delayed.

```js
window.addEventListener('unload', logData, false);

function logData() {
    var client = new XMLHttpRequest();
    client.open("POST", "/log", false); // third parameter indicates sync xhr. :(
    client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    client.send(analyticsData);
}
```

Using the **`sendBeacon()`** method, the data will be transmitted asynchronously to the web server when the User Agent has had an opportunity to do so, **without delaying the unload or affecting the performance of the next navigation.**

The following example shows a theoretical analytics code pattern that submits data to a server by using the **`sendBeacon()`** method.

```js
window.addEventListener('unload', logData, false);

function logData() {
    navigator.sendBeacon("/log", analyticsData);
}
```

## See also

- [Using `XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [AJAX](/en-US/docs/Web/Guide/AJAX)
- [`navigator.sendBeacon`](/en-US/docs/Web/API/Navigator/sendBeacon)
