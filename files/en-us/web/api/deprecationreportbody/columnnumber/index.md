---
title: DeprecationReportBody.columnNumber
slug: Web/API/DeprecationReportBody/columnNumber
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Experimental
  - columnNumber
  - DeprecationReportBody
browser-compat: api.DeprecationReportBody.columnNumber
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`columnNumber`** read-only property of the {{domxref("DeprecationReportBody")}} interface returns the line in the source file in which the deprecated feature was used.

> **Note:** This property is most useful alongside {{domxref("DeprecationReportBody.sourceFile")}} and {{domxref("DeprecationReportBody.lineNumber")}} as it enables the location of the column in that file and line where the error occurred.

## Value

An integer, or `null` if the column is not known.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe deprecation reports, then print the value of `columnNumber` to the console.

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver((reports, observer) => {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.sourceFile); // the source file
  console.log(firstReport.body.lineNumber); // the line in that file
  console.log(firstReport.body.columnNumber); // the column in that file.
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
