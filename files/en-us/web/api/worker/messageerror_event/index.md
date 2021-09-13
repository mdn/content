---
title: 'Worker: messageerror event'
slug: Web/API/Worker/messageerror_event
tags:
  - Event
browser-compat: api.Worker.messageerror_event
---
{{APIRef}}

The `messageerror` event is fired on a {{domxref('Worker')}} object when it receives a message that can't be deserialized.

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
          ><a href="/en-US/docs/Web/API/Worker/onmessageerror"
            >onmessageerror</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

Create a worker, and listen for `message` and `messageerror` events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener):

```js
// inside main.js

const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
    console.error(`Received message from worker: ${event}`);
});

worker.addEventListener("messageerror", (event) => {
    console.error(`Error receiving message from worker: ${event}`);
});
```

The same, but using the [`onmessageerror`](/en-US/docs/Web/API/WindowEventHandlers/onmessageerror) event handler property:

```js
// inside main.js

const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
    console.error(`Received message from worker: ${event}`);
};

worker.onmessageerror = (event) => {
    console.error(`Error receiving message from worker: ${event}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage)
- Related events: [`message`](/docs/Web/API/Worker/message_event).
