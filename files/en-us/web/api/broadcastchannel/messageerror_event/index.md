---
title: 'BroadcastChannel: messageerror event'
slug: Web/API/BroadcastChannel/messageerror_event
tags:
  - Event
browser-compat: api.BroadcastChannel.messageerror_event
---
{{APIRef}}

The `messageerror` event is fired on a {{domxref('BroadcastChannel')}} object when a message arrives on the channel that can't be deserialized.

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
          ><a href="/en-US/docs/Web/API/BroadcastChannel/onmessageerror"
            >onmessageerror</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

This code uses [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) to listen for messages and errors:

```js
const channel = new BroadcastChannel('example-channel');

channel.addEventListener('message', (event) => {
  received.textContent = event.data;
});

channel.addEventListener('messageerror', (event) => {
  console.error(event);
});
```

The same, but using the [`onmessage`](/en-US/docs/Web/API/BroadcastChannel/onmessage) and [`onmessageerror`](/en-US/docs/Web/API/BroadcastChannel/onmessageerror) event handler properties:

```js
const channel = new BroadcastChannel('example-channel');

channel.onmessage = (event) => {
  received.textContent = event.data;
};

channel.onmessageerror = (event) => {
  console.log(event);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`message`](/en-US/docs/Web/API/BroadcastChannel/message_event).
