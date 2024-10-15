---
title: "ErrorEvent: colno property"
short-title: colno
slug: Web/API/ErrorEvent/colno
page-type: web-api-instance-property
browser-compat: api.ErrorEvent.colno
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

The **`colno`** read-only property of the {{domxref("ErrorEvent")}} interface returns an integer containing the column number of the script file on which the error occurred.

## Value

An integer.

## Examples

```js
window.addEventListener("error", (ev) => {
  console.log("The error occur in column: " + ev.colno);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
