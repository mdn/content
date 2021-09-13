---
title: WorkerGlobalScope.importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
tags:
  - API
  - Method
  - Reference
  - Web Workers
  - WorkerGlobalScope
  - importScripts
browser-compat: api.WorkerGlobalScope.importScripts
---
{{APIRef("Web Workers API")}}

The **`importScripts()`** method of the {{domxref("WorkerGlobalScope")}} interface synchronously imports one or more scripts into the worker's scope.

## Syntax

```js
self.importScripts('foo.js');
self.importScripts('foo.js', 'bar.js', ...);
```

### Parameters

A comma-separated list of {{domxref("DOMString")}} objects representing the scripts to be imported. These paths are relative to _html document base URL_.

### Return value

_None._

### Exceptions

- `NetworkError`
  - : Imported scripts were not served with a valid JavaScript MIME type (i.e. `text/javascript`).

## Example

If you had some functionality written in a separate script called `foo.js` that you wanted to use inside worker.js, you could import it using the following line:

```js
importScripts('foo.js');
```

`importScripts()` and `self.importScripts()` are effectively equivalent — both represent `importScripts()` being called from inside the worker's inner scope.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WorkerGlobalScope")}}
