---
title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
tags:
  - API
  - Constructor
  - Reference
  - SharedWorker
  - Web Workers
browser-compat: api.SharedWorker.SharedWorker
---
{{APIRef("Web Workers API")}}

The **`SharedWorker()`** constructor creates a
{{domxref("SharedWorker")}} object that executes the script at the specified URL. This
script must obey the [same-origin
policy](/en-US/docs/Web/Security/Same-origin_policy).

> **Note:** there is disagreement among browser manufacturers about
> whether a data URI is of the same origin or not. Although Gecko 10.0
> {{geckoRelease("10.0")}} and later accept data URIs, that's not the case in all other
> browsers.

## Syntax

```js
var myWorker = new SharedWorker(aURL, name);
var myWorker = new SharedWorker(aURL, options);
```

### Parameters

- _aURL_
  - : A {{domxref("DOMString")}} representing the URL of the script the worker will
    execute. It must obey the same-origin policy.
- name {{optional_inline}}
  - : A {{domxref("DOMString")}} specifying an identifying name for the
    {{domxref("SharedWorkerGlobalScope")}} representing the scope of the worker, which is
    mainly useful for debugging purposes.
- _options_ {{optional_inline}}

  - : An object containing option properties that can set when creating the object
    instance. Available properties are as follows:

    - `type`: A {{domxref("DOMString")}} specifying the type of worker to
      create. The value can be `classic` or `module`. If not
      specified, the default used is `classic`.
    - `credentials`: A {{domxref("DOMString")}} specifying the type of
      credentials to use for the worker. The value can be `omit`,
      `same-origin`, or _`include`. If not
      specified, or if type is `classic`, the default used is
      `omit` (no credentials required)._
    - `name`: A {{domxref("DOMString")}} specifying an
      identifying name for the {{domxref("SharedWorkerGlobalScope")}} representing the
      scope of the worker, which is mainly useful for debugging purposes.

### Return value

The created worker.

### Exceptions

- A `SecurityError` is raised if the document is not allowed to start
  workers, for example if the URL has an invalid syntax or if the same-origin policy is
  violated.
- A `NetworkError` is raised if the MIME type of the worker script is
  incorrect. It should _always_ be `text/javascript` (for historical
  reasons [other
  JavaScript MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#javascript_types) may be accepted).
- A `SyntaxError` is raised if _aURL_ cannot be parsed.

## Examples

The following code snippet shows creation of a {{domxref("SharedWorker")}} object using
the `SharedWorker()` constructor and subsequent usage of the object:

```js
var myWorker = new SharedWorker('worker.js');

myWorker.port.start();

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

For a full example, see our [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run
shared worker](https://mdn.github.io/simple-shared-worker/).)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("SharedWorker")}} interface it belongs to.
- [another multiply demo](https://anlexn.github.io/shared-worker-mdn/)
