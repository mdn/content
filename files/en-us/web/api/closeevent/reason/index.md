---
title: "CloseEvent: reason property"
short-title: reason
slug: Web/API/CloseEvent/reason
page-type: web-api-instance-property
browser-compat: api.CloseEvent.reason
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

The **`reason`** read-only property of the {{domxref("CloseEvent")}} interface returns the [WebSocket connection close reason](https://www.rfc-editor.org/info/rfc6455/#section-7.1.6) the server gave for closing the connection; that is, a concise human-readable prose explanation for the closure.

## Value

A string.

## Examples

The following example prints the value of `reason` to the console.

```js
WebSocket.onclose = (event) => {
  console.log(event.reason);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [RFC 6455](https://www.rfc-editor.org/info/rfc6455/) (the WebSocket Protocol specification)
