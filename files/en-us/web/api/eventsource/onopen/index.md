---
title: EventSource.onopen
slug: Web/API/EventSource/onopen
tags:
  - API
  - Event Handler
  - EventSource
  - Property
  - Reference
  - Server-sent events
  - onopen
browser-compat: api.EventSource.onopen
---
{{APIRef('Server Sent Events')}}

The **`onopen`** property of the {{domxref("EventSource")}}
interface is an [event handler](/en-US/docs/Web/Events/Event_handlers) called when an {{event("open")}} event is
received, that is when the connection was just opened.

## Syntax

```js
eventSource.onopen = function
```

## Examples

```js
evtSource.onopen = function() {
  console.log("Connection to server opened.");
};
```

> **Note:** You can find a full example on GitHub — see [Simple SSE
> demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
