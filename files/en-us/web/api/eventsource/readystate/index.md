---
title: EventSource.readyState
slug: Web/API/EventSource/readyState
tags:
  - API
  - EventSource
  - Property
  - Reference
  - Server-sent events
  - readyState
browser-compat: api.EventSource.readyState
---
{{APIRef('WebSockets API')}}

The **`readyState`** read-only property of the
{{domxref("EventSource")}} interface returns a number representing the state of the
connection.

## Syntax

```js
var myReadyState = eventSource.readyState;
```

### Value

A number representing the state of the connection. Possible values are:

- `0` — connecting
- `1` — open
- `2` — closed

## Examples

```js
var evtSource = new EventSource('sse.php');
console.log(evtSource.readyState);
```

> **Note:** You can find a full example on GitHub — see [Simple SSE
> demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
