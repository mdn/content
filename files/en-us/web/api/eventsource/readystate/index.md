---
title: "EventSource: readyState property"
short-title: readyState
slug: Web/API/EventSource/readyState
page-type: web-api-instance-property
browser-compat: api.EventSource.readyState
---

{{APIRef('WebSockets API')}}

The **`readyState`** read-only property of the
{{domxref("EventSource")}} interface returns a number representing the state of the
connection.

## Value

A number which is one of the three possible state constants defined on the {{domxref("EventSource")}} interface:

- `EventSource.CONNECTING` (0)
  - : The connection is not yet open.
- `EventSource.OPEN` (1)
  - : The connection is open and ready to communicate.
- `EventSource.CLOSED` (2)
  - : The connection is closed or couldn't be opened.

## Examples

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.readyState);
```

> **Note:** You can find a full example on GitHub — see [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
