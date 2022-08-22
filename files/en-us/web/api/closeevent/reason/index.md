---
title: CloseEvent.reason
slug: Web/API/CloseEvent/reason
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - closeEvent
browser-compat: api.CloseEvent.reason
---
{{APIRef("Websockets API")}}

The **`reason`** read-only property of the {{domxref("CloseEvent")}} interface returns the [WebSocket connection close reason](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6) the server gave for closing the connection; that is, a concise human-readable prose explanation for the closure.

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

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (the WebSocket Protocol specification)
