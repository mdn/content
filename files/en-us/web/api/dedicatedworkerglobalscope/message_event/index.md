---
title: 'DedicatedWorkerGlobalScope: message event'
slug: Web/API/DedicatedWorkerGlobalScope/message_event
tags:
  - Event
browser-compat: api.DedicatedWorkerGlobalScope.message_event
---
{{APIRef}}

The `message` event is fired on a {{domxref('DedicatedWorkerGlobalScope')}} object when the worker receives a message from its parent (i.e. when the parent sends a message using [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage)).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage"
            >onmessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

This code creates a new worker and sends it a message using [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage):

```js
const worker = new Worker("static/scripts/worker.js");

worker.postMessage('hello');
```

The worker can listen for this message using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener):

```js
// inside static/scripts/worker.js

self.addEventListener('message', (event) => {
    console.log(`Received message from parent: ${event.data}`);
});
```

Alternatively, it could listen using the [`onmessage`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage) event handler property:

```js
// static/scripts/worker.js

self.onmessage = (event) => {
    console.log(`Received message from parent: ${event.data}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`messageerror`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event).
- [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage).
