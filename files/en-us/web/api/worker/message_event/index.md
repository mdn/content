---
title: 'Worker: message event'
slug: Web/API/Worker/message_event
tags:
  - Event
browser-compat: api.Worker.message_event
---
{{APIRef}}

The `message` event is fired on a {{domxref('Worker')}} object when the worker's parent receives a message from its worker (i.e. when the worker sends a message using [`DedicatedWorkerGlobalScope.postMessage()`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)).

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
          ><a href="/en-US/docs/Web/API/Worker/onmessage">onmessage</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

This code creates a new worker and listens to messages from it using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener):

```js
const worker = new Worker("static/scripts/worker.js");

worker.addEventListener('message', (event) => {
    console.log(`Received message from worker: ${event.data}`)
});
```

Alternatively, it could listen using the [`onmessage`](/en-US/docs/Web/API/Worker/onmessage) event handler property:

```js
const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
    console.log(`Received message from worker: ${event.data}`)
};
```

The worker posts messages using [`self.postMessage()`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage):

```js
// static/scripts/worker.js

self.postMessage('I\'m alive!');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`messageerror`](/docs/Web/API/Worker/messageerror_event).
- [`DedicatedWorkerGlobalScope.postMessage()`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage).
