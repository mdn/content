---
title: InterventionReportBody.columnNumber
slug: Web/API/InterventionReportBody/columnNumber
tags:
  - API
  - Property
  - Reference
  - columnNumber
  - InterventionReportBody
browser-compat: api.InterventionReportBody.columnNumber
---
{{APIRef("Reporting API")}}

The **`columnNumber`** read-only property of the {{domxref("InterventionReportBody")}} interface returns the line in the source file in which the intervention occurred.

> **Note:** This property is most useful alongside {{domxref("InterventionReportBody.sourceFile")}} and {{domxref("InterventionReportBody.lineNumber")}} as it enables the location of the column in that file and line where the feature is used.

## Syntax

```js
let columnNumber = InterventionReportBody.columnNumber;
```

### Value

An integer, or `null` if the column is not known.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then print the value of `columnNumber` to the console.

```js
let options = {
  types: ['intervention'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.sourceFile); // the source file
  console.log(firstReport.body.lineNumber); // the line in that file
  console.log(firstReport.body.columnNumber); // the column in that file.
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
