---
title: "SharedWorker: SharedWorker() constructor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
page-type: web-api-constructor
browser-compat: api.SharedWorker.SharedWorker
---

{{APIRef("Web Workers API")}}

The **`SharedWorker()`** constructor creates a
{{domxref("SharedWorker")}} object that executes the script at the specified URL. This
script must obey the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy).

> **Note:** there is disagreement among browser manufacturers about
> whether a data URL is of the same origin or not. Although Firefox 10.0
> and later accept data URLs, that's not the case in all other
> browsers.

## Syntax

```js-nolint
new SharedWorker(aURL)
new SharedWorker(aURL, name)
new SharedWorker(aURL, options)
```

### Parameters

- `aURL`
  - : A string representing the URL of the script the worker will
    execute. It must obey the same-origin policy.
- `name` {{optional_inline}}
  - : A string specifying an identifying name for the
    {{domxref("SharedWorkerGlobalScope")}} representing the scope of the worker, which is useful for creating new instances of the same SharedWorker and debugging.
- `options` {{optional_inline}}

  - : An object containing option properties that can set when creating the object
    instance. Available properties are as follows:

    - `type`
      - : A string specifying the type of worker to
        create. The value can be `classic` or `module`. If not
        specified, the default used is `classic`.
    - `credentials`
      - : A string specifying the type of
        credentials to use for the worker. The value can be `omit`,
        `same-origin`, or _`include`. If not
        specified, or if type is `classic`, the default used is
        `omit` (no credentials required)._
    - `name`
      - : A string specifying an
        identifying name for the {{domxref("SharedWorkerGlobalScope")}} representing the
        scope of the worker, which is mainly useful for debugging purposes.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the document is not allowed to start workers, for example if the URL has an invalid syntax or if the same-origin policy is violated.
- `NetworkError` {{domxref("DOMException")}}
  - : Thrown if the MIME type of the worker script is incorrect. It should _always_ be `text/javascript` (for historical reasons [other JavaScript MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) may be accepted).
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if `aURL` cannot be parsed.

## Examples

The following code snippet shows creation of a {{domxref("SharedWorker")}} object using
the `SharedWorker()` constructor and subsequent usage of the object:

```js
const myWorker = new SharedWorker("worker.js");

myWorker.port.start();

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

For a full example, see our [Basic shared worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("SharedWorker")}} interface it belongs to.
