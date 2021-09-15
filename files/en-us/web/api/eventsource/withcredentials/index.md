---
title: EventSource.withCredentials
slug: Web/API/EventSource/withCredentials
tags:
  - API
  - EventSource
  - Property
  - Reference
  - Server-sent events
  - withCredentials
browser-compat: api.EventSource.withCredentials
---
{{APIRef('WebSockets API')}}

The **`withCredentials`** read-only property of the
{{domxref("EventSource")}} interface returns a boolean value indicating whether
the `EventSource` object was instantiated with CORS credentials set.

## Syntax

```js
var myWithCredentials = eventSource.withCredentials;
```

### Value

A boolean value indicating whether the `EventSource` object was
instantiated with CORS credentials set (`true`), or not (`false`,
the default).

## Examples

```js
var evtSource = new EventSource('sse.php');
console.log(evtSource.withCredentials);
```

> **Note:** You can find a full example on GitHub — see [Simple SSE
> demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
