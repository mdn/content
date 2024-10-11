---
title: "ErrorEvent: filename property"
short-title: filename
slug: Web/API/ErrorEvent/filename
page-type: web-api-instance-property
browser-compat: api.ErrorEvent.filename
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

The **`filename`** read-only property of the {{domxref("ErrorEvent")}} interface returns a string containing the name of the script file in which the error occurred.

## Value

A string.

## Examples

```js
window.addEventListener("error", (ev) => {
  console.log("The error occur in file: " + ev.filename);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
