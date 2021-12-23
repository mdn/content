---
title: SharedWorker
slug: Web/API/SharedWorker
tags:
  - API
  - Interface
  - Reference
  - SharedWorker
  - Web Workers
  - Workers
browser-compat: api.SharedWorker
---
{{APIRef("Web Workers API")}}

The **`SharedWorker`** interface represents a specific kind of worker that can be _accessed_ from several browsing contexts, such as several windows, iframes or even workers. They implement an interface different than dedicated workers and have a different global scope, {{domxref("SharedWorkerGlobalScope")}}.

> **Note:** If SharedWorker can be accessed from several browsing contexts, all those browsing contexts must share the exact same origin (same protocol, host and port).

## Constructors

- {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}
  - : Creates a shared web worker that executes the script at the specified URL.

## Properties

_Inherits properties from its parent, {{domxref("EventTarget")}}._

- {{domxref("SharedWorker.onerror")}}
  - : Is an {{domxref("EventListener")}} that is called whenever an {{domxref("ErrorEvent")}} of type `error` event occurs.
- {{domxref("SharedWorker.port")}} {{readonlyInline}}
  - : Returns a {{domxref("MessagePort")}} object used to communicate with and control the shared worker.

## Methods

_Inherits methods from its parent, {{domxref("EventTarget")}}._

## Example

In our [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](https://mdn.github.io/simple-shared-worker/)), we have two HTML pages, each of which uses some JavaScript to perform a simple calculation. The different scripts are using the same worker file to perform the calculation — they can both access it, even if their pages are running inside different windows.

The following code snippet shows creation of a `SharedWorker` object using the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor. Both scripts contain this:

```js
var myWorker = new SharedWorker('worker.js');
```

Both scripts then access the worker through a {{domxref("MessagePort")}} object created using the {{domxref("SharedWorker.port")}} property. If the onmessage event is attached using addEventListener, the port is manually started using its `start()` method:

```js
myWorker.port.start();
```

When the port is started, both scripts post messages to the worker and handle messages sent from it using `port.postMessage()` and `port.onmessage`, respectively:

```js
first.onchange = function() {
  myWorker.port.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.port.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

myWorker.port.onmessage = function(e) {
  result1.textContent = e.data;
  console.log('Message received from worker');
}
```

Inside the worker we use the {{domxref("SharedWorkerGlobalScope.onconnect")}} handler to connect to the same port discussed above. The ports associated with that worker are accessible in the {{event("connect")}} event's `ports` property — we then use {{domxref("MessagePort")}} `start()` method to start the port, and the `onmessage` handler to deal with messages sent from the main threads.

```js
onconnect = function(e) {
  var port = e.ports[0];

  port.addEventListener('message', function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Worker")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
