---
title: SharedWorker.port
slug: Web/API/SharedWorker/port
tags:
  - API
  - Property
  - Reference
  - SharedWorker
  - Web Workers
  - port
browser-compat: api.SharedWorker.port
---
{{APIRef("Web Workers API")}}

The **`port`** property of the {{domxref("SharedWorker")}}
interface returns a {{domxref("MessagePort")}} object used to communicate and control
the shared worker.

## Syntax

```js
myWorker.port;
```

### Value

A {{domxref("MessagePort")}} object.

## Example

The following code snippet shows creation of a `SharedWorker` object using
the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor. Multiple
scripts can then access the worker through a {{domxref("MessagePort")}} object accessed
using the `SharedWorker.port` property — the port is started using its
`start()` method:

```js
var myWorker = new SharedWorker('worker.js');
myWorker.port.start();
```

For a full example, see our [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run
shared worker](https://mdn.github.io/simple-shared-worker/).)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("SharedWorker")}} interface it belongs to.
- [another multiply demo](https://anlexn.github.io/shared-worker-mdn/)
