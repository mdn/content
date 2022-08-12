---
title: SharedWorkerGlobalScope.name
slug: Web/API/SharedWorkerGlobalScope/name
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SharedWorkerGlobalScope
  - Web Workers
  - name
browser-compat: api.SharedWorkerGlobalScope.name
---
{{APIRef("Web Workers API")}}

The **`name`** read-only property of the
{{domxref("SharedWorkerGlobalScope")}} interface returns the name that the
{{domxref("SharedWorker")}} was (optionally) given when it was created. This is the name
that the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor can pass
to get a reference to the {{domxref("SharedWorkerGlobalScope")}}.

## Value

A string.

## Examples

If a shared worker is created using a constructor with a `name` option:

```js
const myWorker = new SharedWorker("worker.js", { name : "mySharedWorker" });
```

the {{domxref("SharedWorkerGlobalScope")}} will now have a name of "mySharedWorker",
returnable by running

```js
self.name
```

from inside the shared worker.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SharedWorkerGlobalScope")}}
