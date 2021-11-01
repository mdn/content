---
title: 'MessagePort: messageerror event'
slug: Web/API/MessagePort/messageerror_event
tags:
  - Event
browser-compat: api.MessagePort.messageerror_event
---
{{APIRef}}

The `messageerror` event is fired on a {{domxref('MessagePort')}} object when it receives a message that can't be deserialized.

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
          ><a href="/en-US/docs/Web/API/MessagePort/onmessageerror"
            >onmessageerror</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

Suppose a script creates a [`MessageChannel`](/en-US/docs/Web/API/MessageChannel) and sends one of the ports to a different browsing context, such as another [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe), using code like this:

```js
const channel = new MessageChannel();
const myPort = channel.port1;
const targetFrame = window.top.frames[1];
const targetOrigin = 'https://example.org';

const messageControl = document.querySelector('#message');
const channelMessageButton = document.querySelector('#channel-message');

channelMessageButton.addEventListener('click', () => {
    myPort.postMessage(messageControl.value);
})

targetFrame.postMessage('init', targetOrigin, [channel.port2]);
```

The target can receive the port and start listening for messages and message errors on it using code like this:

```js
window.addEventListener('message', (event) => {
    const myPort = event.ports[0];

    myPort.addEventListener('message', (event) => {
        received.textContent = event.data;
    });

    myPort.addEventListener('messageerror', (event) => {
        console.error(event.data);
    });

    myPort.start();
});
```

Note that the listener must call [`MessagePort.start()`](/en-US/docs/Web/API/MessagePort/start) before any messages will be delivered to this port. This is only needed when using the [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) method: if the receiver uses [`onmessage`](/en-US/docs/Web/API/MessagePort/onmessage) instead, `start()` is called implicitly:

```js
window.addEventListener('message', (event) => {
    const myPort = event.ports[0];

    myPort.onmessage = (event) => {
        received.textContent = event.data;
    };

    myPort.onmessageerror = (event) => {
        console.error(event.data);
    };

});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`message`](/en-US/docs/Web/API/MessagePort/message_event).
- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
