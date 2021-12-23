---
title: SharedWorkerGlobalScope.close()
slug: Web/API/SharedWorkerGlobalScope/close
tags:
  - API
  - DOM
  - Method
  - Reference
  - SharedWorkerGlobalScope
  - Web Workers
  - close
browser-compat: api.SharedWorkerGlobalScope.close
---
{{APIRef("Web Workers API")}}

The **`close()`** method of the {{domxref("SharedWorkerGlobalScope")}} interface discards any tasks queued in the `SharedWorkerGlobalScope`'s event loop, effectively closing this particular scope.

## Syntax

```js
self.close();
```

## Example

If you want to close your worker instance from inside the worker itself, you can call the following:

```js
close();
```

`close()` and `self.close()` are effectively equivalent — both represent `close()` being called from inside the worker's inner scope.

> **Note:** There is also a way to stop the worker from the main thread: the {{domxref("Worker.terminate")}} method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{domxref("DedicatedWorkerGlobalScope")}}
