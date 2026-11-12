---
title: "Window: messageerror event"
short-title: messageerror
slug: Web/API/Window/messageerror_event
page-type: web-api-event
browser-compat: api.Window.messageerror_event
---

{{APIRef("HTML DOM")}}

The `messageerror` event is fired on a {{domxref('Window')}} object when it receives a message that can't be deserialized.

This event is not cancellable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("messageerror", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
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

The same, but using the `onmessageerror` event handler property (but note that this replaces other event listeners added using `onmessageerror`, if any):

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
