---
title: "Window: messageerror event"
short-title: messageerror
slug: Web/API/Window/messageerror_event
page-type: web-api-event
browser-compat: api.Window.messageerror_event
---

{{APIRef}}

The `messageerror` event is fired on a {{domxref('Window')}} object when it receives a message that can't be deserialized.

This event is not cancellable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("messageerror", (event) => { })

onmessageerror = (event) => { }
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Examples

Listen for `messageerror` using {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js
window.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

The same, but using the `onmessageerror` event handler property:

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
