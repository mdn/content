---
title: "ErrorEvent: error property"
short-title: error
slug: Web/API/ErrorEvent/error
page-type: web-api-instance-property
browser-compat: api.ErrorEvent.error
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

The **`error`** read-only property of the {{domxref("ErrorEvent")}} interface returns a JavaScript value, such as an {{jsxref("Error")}} or {{domxref("DOMException")}}, representing the error associated with this event.

## Value

Any valid JavaScript value.

## Examples

```js
window.addEventListener("error", (ev) => {
  console.log("The error instance: " + ev.error);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
