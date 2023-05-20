---
title: "DeprecationReportBody: lineNumber property"
short-title: lineNumber
slug: Web/API/DeprecationReportBody/lineNumber
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.DeprecationReportBody.lineNumber
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`lineNumber`** read-only property of the {{domxref("DeprecationReportBody")}} interface returns the line in the source file in which the deprecated feature was used.

> **Note:** This property is most useful alongside {{domxref("DeprecationReportBody.sourceFile")}} as it enables the location of the line in that file where the error occurred.

## Value

An integer, or `null` if the line is not known.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe deprecation reports, then print the value of `lineNumber` to the console.

```js
let options = {
  types: ["deprecation"],
  buffered: true,
};

let observer = new ReportingObserver((reports, observer) => {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.sourceFile); // the source file
  console.log(firstReport.body.lineNumber); // the line in that file
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
