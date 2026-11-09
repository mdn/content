---
title: "Window: message event"
short-title: message
slug: Web/API/Window/message_event
page-type: web-api-event
browser-compat: api.Window.message_event
---

{{APIRef("HTML DOM")}}

The `message` event is fired on a {{domxref('Window')}} object when the window receives a message, for example from a call to [`Window.postMessage()`](/en-US/docs/Web/API/Window/postMessage) from another browsing context.

This event is not cancellable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("message", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onmessage = (event) => { }
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Examples

Suppose a script sends a message to a different browsing context, such as another [`<iframe>`](/en-US/docs/Web/HTML/Reference/Elements/iframe), using code like this:

```js
const targetFrame = window.top.frames[1];
const targetOrigin = "https://example.org";
const windowMessageButton = document.querySelector("#window-message");

windowMessageButton.addEventListener("click", () => {
  targetFrame.postMessage("hello there", targetOrigin);
});
```

The receiver can listen for the message using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) with code like this:

```js
window.addEventListener("message", (event) => {
  console.log(`Received message: ${event.data}`);
});
```

Alternatively the listener could use the `onmessage` event handler property (but note that this replaces other event listeners added using `onmessage`, if any):

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
