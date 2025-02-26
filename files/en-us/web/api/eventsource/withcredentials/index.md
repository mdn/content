---
title: "EventSource: withCredentials property"
short-title: withCredentials
slug: Web/API/EventSource/withCredentials
page-type: web-api-instance-property
browser-compat: api.EventSource.withCredentials
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

The **`withCredentials`** read-only property of the
{{domxref("EventSource")}} interface returns a boolean value indicating whether
the `EventSource` object was instantiated with CORS credentials set.

## Value

A boolean value indicating whether the `EventSource` object was
instantiated with CORS credentials set (`true`), or not (`false`,
the default).

## Examples

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.withCredentials);
```

> [!NOTE]
> You can find a full example on GitHub — see [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventSource")}}
