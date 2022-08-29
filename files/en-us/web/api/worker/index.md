---
title: Worker
slug: Web/API/Worker
page-type: web-api-interface
tags:
  - API
  - DOM
  - Interface
  - JavaScript
  - Reference
  - Web Workers
  - Worker
  - Workers
browser-compat: api.Worker
---
{{APIRef("Web Workers API")}}

The **`Worker`** interface of the [Web Workers API](/en-US/docs/Web/API/Web_Workers_API) represents a background task that can be created via script, which can send messages back to its creator.

Creating a worker is done by calling the `Worker("path/to/worker/script")` constructor.

Workers may themselves spawn new workers, as long as those workers are hosted at the same [origin](/en-US/docs/Web/Security/Same-origin_policy) as the parent page. (Note: [nested workers are not yet implemented in WebKit](https://bugs.webkit.org/show_bug.cgi?id=22723)).

[Not all interfaces and functions are available](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) to scripts inside a `Worker`. Workers may use {{domxref("XMLHttpRequest")}} for network communication, but its `responseXML` and `channel` attributes are always `null`. ([`fetch`](/en-US/docs/Web/API/Fetch_API) is also available, with no such restrictions.)

{{InheritanceDiagram}}

## Constructors

- {{domxref("Worker.Worker", "Worker()")}}
  - : Creates a dedicated web worker that executes the script at the specified URL. This also works for [Blob URLs](/en-US/docs/Web/API/Blob).

## Properties

_Inherits properties from its parent, {{domxref("EventTarget")}}._

## Methods

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
- [`rejectionhandled`](/en-US/docs/Web/API/Window/rejectionhandled_event)
  - : Fires every time a {{jsxref("Promise")}} rejects, regardless of whether or not there is a handler to catch the rejection.
- [`unhandledrejection`](/en-US/docs/Web/API/Window/unhandledrejection_event)
  - : Fires when a {{jsxref("Promise")}} rejects with no handler to catch the rejection.

## Example

The following code snippet creates a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor, then uses the worker object:

```js
const myWorker = new Worker('/worker.js');
const first = document.querySelector('input#number1');
const second = document.querySelector('input#number2');

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}
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
