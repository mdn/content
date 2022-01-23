---
title: SharedWorkerGlobalScope.onconnect
slug: Web/API/SharedWorkerGlobalScope/onconnect
tags:
  - API
  - Property
  - Reference
  - SharedWorkerGlobalScope
  - Web Workers
  - onconnect
browser-compat: api.SharedWorkerGlobalScope.onconnect
---
{{APIRef("Web Workers API")}}

The **`onconnect`** property of the {{domxref("SharedWorkerGlobalScope")}} interface is an event handler representing the code to be called when the {{event("connect")}} event is raised — that is, when a {{domxref("MessagePort")}} connection is opened between the associated {{domxref("SharedWorker")}} and the main thread.

## Syntax

```js
onconnect = function() { /* ... */ };
```

## Examples

This example shows a shared worker file — when a connection to the worker occurs from a main thread via a {{domxref("MessagePort")}}, the `onconnect` event handler fires. The event object is a {{domxref("MessageEvent")}}.

The connecting port can be referenced through the event object's `ports` parameter; this reference can have an `onmessage` handler attached to it to handle messages coming in through the port, and its `postMessage()` method can be used to send messages back to the main thread using the worker.

```js
onconnect = function(e) {
    var port = e.ports[0];

    port.onmessage = function(e) {
      var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
      port.postMessage(workerResult);
    }

    port.start();
}
```

For a complete running example, see our [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](https://mdn.github.io/simple-shared-worker/).)

> **Note:** The `data` property of the event object used to be `null` in Firefox. As of version 65 it is now initialized to an empty string, as per spec ({{bug(1508824)}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SharedWorkerGlobalScope")}}
