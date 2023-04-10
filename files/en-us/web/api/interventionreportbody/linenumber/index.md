---
title: "InterventionReportBody: lineNumber property"
short-title: lineNumber
slug: Web/API/InterventionReportBody/lineNumber
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.InterventionReportBody.lineNumber
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`lineNumber`** read-only property of the {{domxref("InterventionReportBody")}} interface returns the line in the source file in which the intervention occurred.

> **Note:** This property is most useful alongside {{domxref("InterventionReportBody.sourceFile")}} as it enables the location of the line in that file where the feature is used.

## Value

An integer, or `null` if the line is not known.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then print the value of `lineNumber` to the console.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.sourceFile); // the source file
  console.log(firstReport.body.lineNumber); // the line in that file
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
