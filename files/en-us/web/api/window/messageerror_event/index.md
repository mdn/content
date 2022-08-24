---
title: 'Window: messageerror event'
slug: Web/API/Window/messageerror_event
page-type: web-api-event
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

This event is not cancellable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('messageerror', (event) => { });

onmessageerror = (event) => { };
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

Listen for `messageerror` using {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js
window.addEventListener('messageerror', (event) => {
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
