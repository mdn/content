---
title: CloseEvent.wasClean
slug: Web/API/CloseEvent/wasClean
tags:
  - API
  - Property
  - Reference
  - closeEvent
browser-compat: api.CloseEvent.wasClean
---
{{APIRef("Websockets API")}}

The **`wasClean`** read-only property of the {{domxref("CloseEvent")}} interface returns `true` if the connection closed cleanly.

### Value

A {{jsxref("Boolean")}}. True if the connection closed cleanly, false otherwise.

## Examples

The following example prints the value of `wasClean` to the console.

```js
WebSocket.onclose = function(event) {
  console.log(event.wasClean);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
