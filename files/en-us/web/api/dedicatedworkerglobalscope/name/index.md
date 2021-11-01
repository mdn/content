---
title: DedicatedWorkerGlobalScope.name
slug: Web/API/DedicatedWorkerGlobalScope/name
tags:
  - API
  - DOM
  - DedicatedWorkerGlobalScope
  - Property
  - Reference
  - Worker
  - name
browser-compat: api.DedicatedWorkerGlobalScope.name
---
{{APIRef("Web Workers API")}}

The **`name`** read-only property of the
{{domxref("DedicatedWorkerGlobalScope")}} interface returns the name that the
{{domxref("Worker")}} was (optionally) given when it was created. This is the name that
the {{domxref("Worker.Worker", "Worker()")}} constructor can pass to get a reference to
the {{domxref("DedicatedWorkerGlobalScope")}}.

## Syntax

```js
var nameObj = self.name;
```

### Value

A {{domxref("DOMString")}}.

## Example

If a worker is created using a constructor with a `name` option:

```js
var myWorker = new Worker("worker.js", { name : "myWorker" });
```

the {{domxref("DedicatedWorkerGlobalScope")}} will now have a name of "myWorker",
returnable by running

```js
self.name
```

from inside the worker.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DedicatedWorkerGlobalScope")}}
