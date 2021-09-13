---
title: EventSource.onerror
slug: Web/API/EventSource/onerror
tags:
  - API
  - Event Handler
  - EventSource
  - Property
  - Reference
  - Server-sent events
  - onerror
browser-compat: api.EventSource.onerror
---
{{APIRef('WebSockets API')}}

The **`onerror`** property of the {{domxref("EventSource")}}
interface is an [event handler](/en-US/docs/Web/Events/Event_handlers) called when an error occurs and the
{{event("error")}} event is dispatched on an `EventSource` object.

## Syntax

```js
eventSource.onerror = function
```

## Examples

```js
evtSource.onerror = function() {
  console.log("EventSource failed.");
};
```

> **Note:** You can find a full example on GitHub — see [Simple SSE
> demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
