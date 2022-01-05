---
title: 'Window: message event'
slug: Web/API/Window/message_event
tags:
  - Event
browser-compat: api.Window.message_event
---
{{APIRef}}

The `message` event is fired on a {{domxref('Window')}} object when the window receives a message, for example from a call to [`Window.postMessage()`](/en-US/docs/Web/API/Window/postMessage) from another browsing context.

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
          ><a href="/en-US/docs/Web/API/WindowEventHandlers/onmessage"
            >onmessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

Suppose a script sends a message to a different browsing context, such as another [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe), using code like this:

```js
const targetFrame = window.top.frames[1];
const targetOrigin = 'https://example.org';
const windowMessageButton = document.querySelector('#window-message');

windowMessageButton.addEventListener('click', () => {
    targetFrame.postMessage('hello there', targetOrigin);
});
```

The receiver can listen for the message using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) with code like this:

```js
window.addEventListener('message', (event) => {
    console.log(`Received message: ${event.data}`);
});
```

Alternatively the listener could use the [`onmessage`](/en-US/docs/Web/API/WindowEventHandlers/onmessage) event handler property:

```js
window.onmessage = (event) => {
    console.log(`Received message: ${event.data}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`messageerror`](/en-US/docs/Web/API/Window/messageerror_event).
- [`Window.postMessage()`](/en-US/docs/Web/API/Window/postMessage).
