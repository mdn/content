---
title: "DeprecationReportBody: message property"
short-title: message
slug: Web/API/DeprecationReportBody/message
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.DeprecationReportBody.message
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`message`** read-only property of the {{domxref("DeprecationReportBody")}} interface returns a human-readable description of the deprecation. This typically matches the message a browser will display in its DevTools console regarding a deprecated feature.

## Value

A string.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe deprecation reports, then print the value of `message` to the console.

```js
let options = {
  types: ["deprecation"],
  buffered: true,
};

let observer = new ReportingObserver((reports, observer) => {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.message);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
