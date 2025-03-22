---
title: Worker
slug: Web/API/Worker
page-type: web-api-interface
browser-compat: api.Worker
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

The **`Worker`** interface of the [Web Workers API](/en-US/docs/Web/API/Web_Workers_API) represents a background task that can be created via script, which can send messages back to its creator.

Creating a worker is done by calling the `Worker("path/to/worker/script")` constructor.

Workers may themselves spawn new workers, as long as those workers are hosted at the same [origin](/en-US/docs/Web/Security/Same-origin_policy) as the parent page.

Note that not all interfaces and functions are available to web workers. See [Functions and classes available to Web Workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) for details.

{{InheritanceDiagram}}

## Constructors

- {{domxref("Worker.Worker", "Worker()")}}
  - : Creates a dedicated web worker that executes the script at the specified URL. This also works for [Blob URLs](/en-US/docs/Web/API/Blob).

## Instance properties

_Inherits properties from its parent, {{domxref("EventTarget")}}._

## Instance methods

_Inherits methods from its parent, {{domxref("EventTarget")}}._

- {{domxref("Worker.postMessage()")}}
  - : Sends a message — consisting of any JavaScript object — to the worker's inner scope.
- {{domxref("Worker.terminate()")}}
  - : Immediately terminates the worker. This does not let worker finish its operations; it is halted at once. [`ServiceWorker`](/en-US/docs/Web/API/ServiceWorker) instances do not support this method.

## Events

- [`error`](/en-US/docs/Web/API/Worker/error_event)
  - : Fires when an error occurs in the worker.
- [`message`](/en-US/docs/Web/API/Worker/message_event)
  - : Fires when the worker's parent receives a message from that worker.
- [`messageerror`](/en-US/docs/Web/API/Worker/messageerror_event)
  - : Fires when a `Worker` object receives a message that can't be [deserialized](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

## Example

The following code snippet creates a `Worker` object using the {{domxref("Worker.Worker", "Worker()")}} constructor, then uses the worker object:

```js
const myWorker = new Worker("/worker.js");
const first = document.querySelector("input#number1");
const second = document.querySelector("input#number2");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

For a full example, see our [Basic dedicated worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([run dedicated worker](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Specifications

{{Specifications}}

## Browser compatibility

Support varies for different types of workers. See each worker type's page for specifics.

{{Compat}}

### Cross-origin worker error behavior

In early versions of the spec, loading a cross-origin worker script threw a `SecurityError`. Nowadays, an {{domxref("Worker/error_event", "error")}} event is thrown instead.

## See also

- [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Functions and classes available to Web Workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- Other kind of workers: {{domxref("SharedWorker")}} and [Service Worker](/en-US/docs/Web/API/Service_Worker_API).
- [`OffscreenCanvas`](/en-US/docs/Web/API/OffscreenCanvas) interface
