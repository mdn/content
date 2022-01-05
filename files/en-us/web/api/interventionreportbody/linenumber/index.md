---
title: InterventionReportBody.lineNumber
slug: Web/API/InterventionReportBody/lineNumber
tags:
  - API
  - Property
  - Reference
  - lineNumber
  - InterventionReportBody
browser-compat: api.InterventionReportBody.lineNumber
---
{{APIRef("Reporting API")}}

The **`lineNumber`** read-only property of the {{domxref("InterventionReportBody")}} interface returns the line in the source file in which the intervention occurred.

> **Note:** This property is most useful alongside {{domxref("InterventionReportBody.sourceFile")}} as it enables the location of the line in that file where the feature is used.

## Syntax

```js
let lineNumber = InterventionReportBody.lineNumber;
```

### Value

An integer, or `null` if the line is not known.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then print the value of `lineNumber` to the console.

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
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
