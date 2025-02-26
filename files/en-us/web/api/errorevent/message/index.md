---
title: "ErrorEvent: message property"
short-title: message
slug: Web/API/ErrorEvent/message
page-type: web-api-instance-property
browser-compat: api.ErrorEvent.message
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

The **`message`** read-only property of the {{domxref("ErrorEvent")}} interface returns a string containing a human-readable error message describing the problem.

## Value

A string.

## Examples

```js
window.addEventListener("error", (ev) => {
  console.log("The error message: " + ev.message);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
