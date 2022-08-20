---
title: 'Window: message event'
slug: Web/API/Window/message_event
page-type: web-api-event
tags:
  - Event
browser-compat: api.Window.message_event
---
{{APIRef}}

The `message` event is fired on a {{domxref('Window')}} object when the window receives a message, for example from a call to [`Window.postMessage()`](/en-US/docs/Web/API/Window/postMessage) from another browsing context.

This event is not cancellable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('message', (event) => { });

onmessage = (event) => { };
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Event properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : The data sent by the message emitter.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : A string representing the origin of the message emitter.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : A string representing a unique ID for the event.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : A `MessageEventSource` (which can be a {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) representing the message emitter.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : An array of {{domxref("MessagePort")}} objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker).

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

Alternatively the listener could use the `onmessage` event handler property:

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
