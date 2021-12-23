---
title: EventSource.onmessage
slug: Web/API/EventSource/onmessage
tags:
  - API
  - Event Handler
  - EventSource
  - Property
  - Reference
  - Server-sent events
  - onmessage
browser-compat: api.EventSource.onmessage
---
{{APIRef('WebSockets API')}}

The **`onmessage`** property of the {{domxref("EventSource")}}
interface is an [event handler](/en-US/docs/Web/Events/Event_handlers) called when a {{event("message")}} event is
received, that is when a message is coming from the source.

Event objects of `onmessage` event handlers are of type
{{domxref("MessageEvent")}}.

## Syntax

```js
eventSource.onmessage = function
```

## Examples

```js
eventSource.onmessage = function(e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
}
```

> **Note:** You can find a full example on GitHub — see [Simple SSE
> demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
