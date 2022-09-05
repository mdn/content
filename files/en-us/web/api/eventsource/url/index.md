---
title: EventSource.url
slug: Web/API/EventSource/url
page-type: web-api-instance-property
tags:
  - API
  - EventSource
  - Property
  - Reference
  - Server-sent events
  - URL
browser-compat: api.EventSource.url
---
{{APIRef('WebSockets API')}}

The **`url`** read-only property of the
{{domxref("EventSource")}} interface returns a string representing the
URL of the source.

## Value

A string representing the URL of the source.

## Examples

```js
const evtSource = new EventSource('sse.php');
console.log(evtSource.url);
```

> **Note:** You can find a full example on GitHub — see [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
