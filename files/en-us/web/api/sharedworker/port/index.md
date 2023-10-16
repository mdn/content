---
title: "SharedWorker: port property"
short-title: port
slug: Web/API/SharedWorker/port
page-type: web-api-instance-property
browser-compat: api.SharedWorker.port
---

{{APIRef("Web Workers API")}}

The **`port`** property of the {{domxref("SharedWorker")}}
interface returns a {{domxref("MessagePort")}} object used to communicate and control
the shared worker.

## Value

A {{domxref("MessagePort")}} object.

## Examples

The following code snippet shows creation of a `SharedWorker` object using
the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor. Multiple
scripts can then access the worker through a {{domxref("MessagePort")}} object accessed
using the `SharedWorker.port` property — the port is started using its
`start()` method:

```js
const myWorker = new SharedWorker("worker.js");
myWorker.port.start();
```

For a full example, see our [Basic shared worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SharedWorker")}}
