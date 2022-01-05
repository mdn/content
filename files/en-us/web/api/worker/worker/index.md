---
title: Worker()
slug: Web/API/Worker/Worker
tags:
  - API
  - Constructor
  - Reference
  - Web Workers
  - Worker
browser-compat: api.Worker.Worker
---
{{APIRef("Web Workers API")}}

The **`Worker()`** constructor creates a {{domxref("Worker")}} object that executes the script at the specified URL. This script must obey the [same-origin policy](/en-US/docs/Same_origin_policy_for_JavaScript "Same origin policy for JavaScript").

> **Note:** that there is a disagreement among browser manufacturers about whether a data URI is of the same origin or not. Though Gecko 10.0 {{ geckoRelease("10.0") }} and later accept data URIs, that's not the case in all other browsers.

## Syntax

```js
var myWorker = new Worker(aURL, options);
```

### Parameters

- _aURL_
  - : A {{domxref("USVString")}} representing the URL of the script the worker will execute. It must obey the same-origin policy.
- _options_ {{optional_inline}}

  - : An object containing option properties that can be set when creating the object instance. Available properties are as follows:

    - `type`: A {{domxref("DOMString")}} specifying the type of worker to create. The value can be `classic` or `module`. If not specified, the default used is `classic`.
    - `credentials`: A {{domxref("DOMString")}} specifying the type of credentials to use for the worker. The value can be `omit`, `same-origin`, or _`include`. If not specified, or if type is `classic`, the default used is `omit` (no credentials required)._
    - `name`: A {{domxref("DOMString")}} specifying an identifying name for the {{domxref("DedicatedWorkerGlobalScope")}} representing the scope of the worker, which is mainly useful for debugging purposes.

### Exceptions

- A `SecurityError` is raised if the document is not allowed to start workers, e.g. if the URL has an invalid syntax or if the same-origin policy is violated.
- A `NetworkError` is raised if the MIME type of the worker script is incorrect. It _should_ always be `text/javascript` (for historical reasons [other JavaScript MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types) may be accepted).
- A `SyntaxError` is raised if _aURL_ cannot be parsed.

## Examples

The following code snippet shows creation of a {{domxref("Worker")}} object using the `Worker()` constructor and subsequent usage of the object:

```js
var myWorker = new Worker('worker.js');

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}
```

For a full example, see our [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](https://mdn.github.io/simple-web-worker/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

> **Note:** A browser can be marked as providing full support for `Worker()` even though it does not support worker scripts written as modules. As of Mar 1, 2019, only [Chrome 80+](https://web.dev/module-workers/) supports this feature, while [Firefox has an open feature request](https://bugzilla.mozilla.org/show_bug.cgi?id=1247687).  No other browsers are known to have support for production usage of worker scripts written as modules. Without that support, worker scripts written as modules and modules used by worker scripts have to be transpiled or otherwise converted to non-module code in order to run.

## See also

The {{domxref("Worker")}} interface it belongs to.
