---
title: Worker.terminate()
slug: Web/API/Worker/terminate
tags:
  - API
  - Method
  - Reference
  - Web Workers
  - Worker
  - terminate
browser-compat: api.Worker.terminate
---
{{APIRef("Web Workers API")}}

The **`terminate()`** method of the {{domxref("Worker")}} interface immediately terminates the {{domxref("Worker")}}. This does not offer the worker an opportunity to finish its operations; it is stopped at once.

## Syntax

```js
myWorker.terminate();
```

### Parameters

None.

### Returns

Void.

## Example

The following code snippet shows creation of a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor, which is then immediately terminated.

```js
var myWorker = new Worker('worker.js');

myWorker.terminate();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{domxref("Worker")}} interface it belongs to.
