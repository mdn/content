---
title: SharedWorker
slug: Web/API/SharedWorker
page-type: web-api-interface
browser-compat: api.SharedWorker
---

{{APIRef("Web Workers API")}}

The **`SharedWorker`** interface represents a specific kind of worker that can be _accessed_ from several browsing contexts, such as several windows, iframes or even workers. They implement an interface different than dedicated workers and have a different global scope, {{domxref("SharedWorkerGlobalScope")}}.

> **Note:** If SharedWorker can be accessed from several browsing contexts, all those browsing contexts must share the exact same origin (same protocol, host and port).

{{InheritanceDiagram}}

## Constructors

- {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}
  - : Creates a shared web worker that executes the script at the specified URL.

## Instance properties

_Inherits properties from its parent, {{domxref("EventTarget")}}._

- {{domxref("SharedWorker.port")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("MessagePort")}} object used to communicate with and control the shared worker.

## Events

- {{domxref("SharedWorker.error_event", "error")}}
  - : Fires when an error occurs in the shared worker.

## Instance methods

_Inherits methods from its parent, {{domxref("EventTarget")}}._

## Example

In our [Basic shared worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)), we have two HTML pages, each of which uses some JavaScript to perform a simple calculation. The different scripts are using the same worker file to perform the calculation — they can both access it, even if their pages are running inside different windows.

The following code snippet shows creation of a `SharedWorker` object using the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor. Both scripts contain this:

```js
const myWorker = new SharedWorker("worker.js");
```

> **Note:** Once a shared worker is created, any script running in the same origin can obtain a reference to that worker and communicate with it. The shared worker will be alive as long as its global scope's owner set (a set of `Document` and `WorkerGlobalScope` objects) is not empty (for example, if there is any live page holding a reference to it, maybe through `new SharedWorker()`). To read more about shared worker lifetime, see [The worker's lifetime](https://html.spec.whatwg.org/multipage/workers.html#the-worker's-lifetime) section of the HTML specification.

Both scripts then access the worker through a {{domxref("MessagePort")}} object created using the {{domxref("SharedWorker.port")}} property. If the onmessage event is attached using addEventListener, the port is manually started using its `start()` method:

```js
myWorker.port.start();
```

When the port is started, both scripts post messages to the worker and handle messages sent from it using `port.postMessage()` and `port.onmessage`, respectively:

```js
first.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

Inside the worker we use the {{domxref("SharedWorkerGlobalScope.connect_event", "onconnect")}} handler to connect to the same port discussed above. The ports associated with that worker are accessible in the {{domxref("SharedWorkerGlobalScope/connect_event", "connect")}} event's `ports` property — we then use {{domxref("MessagePort")}} `start()` method to start the port, and the `onmessage` handler to deal with messages sent from the main threads.

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Worker")}}
