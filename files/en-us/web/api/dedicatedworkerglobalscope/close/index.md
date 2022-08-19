---
title: DedicatedWorkerGlobalScope.close()
slug: Web/API/DedicatedWorkerGlobalScope/close
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DedicatedWorkerGlobalScope
  - Method
  - Reference
  - Web Workers
  - close
browser-compat: api.DedicatedWorkerGlobalScope.close
---
{{APIRef("Web Workers API")}}

The **`close()`** method of the {{domxref("DedicatedWorkerGlobalScope")}} interface discards any tasks queued in the `DedicatedWorkerGlobalScope`'s event loop, effectively closing this particular scope.

## Syntax

```js
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

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
