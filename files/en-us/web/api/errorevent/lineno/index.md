---
title: "ErrorEvent: lineno property"
short-title: lineno
slug: Web/API/ErrorEvent/lineno
page-type: web-api-instance-property
browser-compat: api.ErrorEvent.lineno
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

The **`lineno`** read-only property of the {{domxref("ErrorEvent")}} interface returns an integer containing the line number of the script file on which the error occurred.

## Value

An integer.

## Examples

```js
window.addEventListener("error", (ev) => {
  console.log("The error occur in line: " + ev.lineno);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
