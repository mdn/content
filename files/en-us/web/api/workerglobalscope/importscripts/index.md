---
title: "WorkerGlobalScope: importScripts() method"
short-title: importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
page-type: web-api-instance-method
browser-compat: api.WorkerGlobalScope.importScripts
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

The **`importScripts()`** method of the {{domxref("WorkerGlobalScope")}} interface synchronously imports one or more scripts into the worker's scope.

## Syntax

```js-nolint
importScripts(path0)
importScripts(path0, path1)
importScripts(path0, path1, /* …, */ pathN)
```

### Parameters

- `pathN`
  - : A string value representing the URL of the script to be imported. The URL may be absolute or relative. If the URL is relative, it is relative to the worker entry script's URL.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NetworkError`
  - : Imported scripts were served without a `text/javascript` MIME type or without one of the permitted [legacy JavaScript MIME types](/en-US/docs/Web/HTTP/MIME_types#legacy_javascript_mime_types).
- {{jsxref("TypeError")}}
  - : Thrown if the current {{domxref("WorkerGlobalScope")}} is a module. Use [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) instead.

## Examples

If you had some functionality written in a separate script called `foo.js` that you wanted to use inside `worker.js`, you could import it using the following line:

```js
importScripts("foo.js");
```

`foo.js` should be in the same URL subtree as the worker's entry point — for example, if this worker was created with `new Worker("worker.js")`, then `worker.js` is the entry point. If `worker.js` is at `https://example.com/scripts/worker.js`, then `foo.js` should be at `https://example.com/scripts/foo.js`.

`importScripts()` and `self.importScripts()` are effectively equivalent — both represent `importScripts()` being called from inside the worker's inner scope.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WorkerGlobalScope")}}
