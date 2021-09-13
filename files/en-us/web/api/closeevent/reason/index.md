---
title: CloseEvent.reason
slug: Web/API/CloseEvent/reason
tags:
  - API
  - Property
  - Reference
  - closeEvent
browser-compat: api.CloseEvent.reason
---
{{APIRef("Websockets API")}}

The **`reason`** read-only property of the {{domxref("CloseEvent")}} interface returns the reason that the server closed the connection.

### Value

A {{domxref("DOMString","string")}}.

## Examples

The following example prints the value of `reason` to the console.

```js
WebSocket.onclose = function(event) {
  console.log(event.reason);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
