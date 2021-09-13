---
title: 'DedicatedWorkerGlobalScope: messageerror event'
slug: Web/API/DedicatedWorkerGlobalScope/messageerror_event
tags:
  - Event
browser-compat: api.DedicatedWorkerGlobalScope.messageerror_event
---
{{APIRef}}

The `messageerror` event is fired on a {{domxref('DedicatedWorkerGlobalScope')}} object when it receives a message that can't be deserialized.

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
          ><a
            href="/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessageerror"
            >onmessageerror</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

Listen for `messageerror` using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener):

```js
// inside worker.js

self.addEventListener('messageerror', (event) => {
    self.postMessage('Error receiving message');
    console.error(event);
});
```

The same, but using the [`onmessageerror`](/en-US/docs/Web/API/WindowEventHandlers/onmessageerror) event handler property:

```js
// inside worker.js

self.onmessageerror = (event) => {
    self.postMessage('Error receiving message');
    console.error(event);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage)
- Related events: [`message`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/message_event).
