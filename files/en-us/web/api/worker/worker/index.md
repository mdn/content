---
title: "Worker: Worker() constructor"
short-title: Worker()
slug: Web/API/Worker/Worker
page-type: web-api-constructor
browser-compat: api.Worker.Worker
---

{{APIRef("Web Workers API")}}

The **`Worker()`** constructor creates a {{domxref("Worker")}} object that executes the script at the specified URL. This script must obey the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy).

> **Note:** that there is a disagreement among browser manufacturers about whether a data URL is of the same origin or not. Though Firefox 10 and later accept data URLs, that's not the case in all other browsers.

## Syntax

```js-nolint
new Worker(aURL)
new Worker(aURL, options)
```

### Parameters

- `aURL`
  - : A string representing the URL of the script the worker will execute. It must obey the same-origin policy.
- `options` {{optional_inline}}

  - : An object containing option properties that can be set when creating the object instance. Available properties are as follows:

    - `type`
      - : A string specifying the type of worker to create. The value can be `classic` or `module`. If not specified, the default used is `classic`.
    - `credentials`
      - : A string specifying the type of credentials to use for the worker. The value can be `omit`, `same-origin`, or _`include`. If not specified, or if type is `classic`, the default used is `omit` (no credentials required)._
    - `name`
      - : A string specifying an identifying name for the {{domxref("DedicatedWorkerGlobalScope")}} representing the scope of the worker, which is mainly useful for debugging purposes.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the document is not allowed to start workers, e.g. if the URL has an invalid syntax or if the same-origin policy is violated.
- `NetworkError` {{domxref("DOMException")}}
  - : Thrown if the MIME type of the worker script is incorrect. It _should_ always be `text/javascript`
    (for historical reasons [other JavaScript MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#legacy_javascript_mime_types) may be accepted).
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if _aURL_ cannot be parsed.

## Examples

The following code snippet shows creation of a {{domxref("Worker")}} object using the `Worker()` constructor and subsequent usage of the object:

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("Message posted to worker");
};
```

For a full example, see our [Basic dedicated worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([run dedicated worker](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("Worker")}} interface it belongs to.
