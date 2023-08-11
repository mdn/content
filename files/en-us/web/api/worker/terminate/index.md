---
title: "Worker: terminate() method"
short-title: terminate()
slug: Web/API/Worker/terminate
page-type: web-api-instance-method
browser-compat: api.Worker.terminate
---

{{APIRef("Web Workers API")}}

The **`terminate()`** method of the {{domxref("Worker")}} interface immediately terminates the {{domxref("Worker")}}. This does not offer the worker an opportunity to finish its operations; it is stopped at once.

## Syntax

```js-nolint
terminate()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following code snippet shows creation of a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor, which is then immediately terminated.

```js
const myWorker = new Worker("worker.js");

myWorker.terminate();
```

> **Note:** DedicatedWorkers and SharedWorkers can also be stopped from the {{domxref("Worker")}} instance using the {{domxref("DedicatedWorkerGlobalScope.close()")}} or {{domxref("SharedWorkerGlobalScope.close()")}} methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Worker")}} interface
- {{domxref("DedicatedWorkerGlobalScope.close()")}}
- {{domxref("SharedWorkerGlobalScope.close()")}}
