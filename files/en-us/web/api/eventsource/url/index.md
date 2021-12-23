---
title: EventSource.url
slug: Web/API/EventSource/url
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
{{domxref("EventSource")}} interface returns a {{domxref("DOMString")}} representing the
URL of the source.

## Syntax

```js
var myUrl = eventSource.url;
```

### Value

A {{domxref("DOMString")}} representing the URL of the source.

## Examples

```js
var evtSource = new EventSource('sse.php');
console.log(evtSource.url);
```

> **Note:** You can find a full example on GitHub — see [Simple SSE
> demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
