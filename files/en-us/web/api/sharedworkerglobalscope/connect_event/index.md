---
title: 'SharedWorkerGlobalScope: connect event'
slug: Web/API/SharedWorkerGlobalScope/connect_event
tags:
  - API
  - Event
  - Reference
  - SharedWorkerGlobalScope
  - connect
  - events
browser-compat: api.SharedWorkerGlobalScope.connect_event
---
{{APIRef}}

The **`connect`** event is fired in shared workers at their {{domxref("SharedWorkerGlobalScope")}} when a new client connects.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("MessageEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>{{domxref("SharedWorkerGlobalScope.onconnect")}}</td>
    </tr>
  </tbody>
</table>

## Examples

This example shows a shared worker file — when a connection to the worker occurs from a main thread via a {{domxref("MessagePort")}}, the `onconnect` event handler fires. The event object is a {{domxref("MessageEvent")}}.

The connecting port can be referenced through the event object's `ports` parameter; this reference can have an `onmessage` handler attached to it to handle messages coming in through the port, and its `postMessage()` method can be used to send messages back to the main thread using the worker.

```js
self.onconnect = function(e) {
    var port = e.ports[0];

    port.onmessage = function(e) {
      var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
      port.postMessage(workerResult);
    }

    port.start();
}
```

For a complete running example, see our [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](https://mdn.github.io/simple-shared-worker/).)

### addEventListener equivalent

You could also set up an event handler using the {{domxref("EventTarget/addEventListener", "addEventListener()")}} method:

```js
self.addEventListener('connect', function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  }

});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("SharedWorkerGlobalScope")}}
