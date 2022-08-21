---
title: WorkerGlobalScope.importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
page-type: web-api-instance-method
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
importScripts(path0)
importScripts(path0, path1)
importScripts(path0, path1, /* … ,*/ pathN)
```

### Parameters

A comma-separated list of string objects representing the scripts to be imported. These paths are relative to _html document base URL_.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NetworkError`
  - : Imported scripts were served without a `text/javascript` MIME type or without one of the permitted [legacy JavaScript MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#legacy_javascript_mime_types).

## Examples

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
