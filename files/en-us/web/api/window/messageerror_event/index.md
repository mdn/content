---
title: 'Window: messageerror event'
slug: Web/API/Window/messageerror_event
tags:
  - API
  - Event
  - MessageEvent
  - Reference
  - Window
browser-compat: api.Window.messageerror_event
---
{{APIRef}}

The `messageerror` event is fired on a {{domxref('Window')}} object when it receives a message that can't be deserialized.

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
        {{domxref("WindowEventHandlers/onmessageerror", "onmessageerror")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Listen for `messageerror` using {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js
window.addEventListener('messageerror', (event) => {
    console.error(event);
});
```

The same, but using the {{domxref("WindowEventHandlers/onmessageerror", "onmessageerror")}} event handler property:

```js
window.onmessageerror = (event) => {
    console.error(event);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.postMessage()")}}
- Related events: {{domxref("Window/message_event", "message")}}.
