---
title: InterventionReportBody.sourceFile
slug: Web/API/InterventionReportBody/sourceFile
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Experimental
  - sourceFile
  - InterventionReportBody
spec-urls: https://wicg.github.io/intervention-reporting/#dom-interventionreportbody-sourcefile
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`sourceFile`** read-only property of the {{domxref("InterventionReportBody")}} interface returns the path to the source file where the intervention occurred.

> **Note:** This property can be used with {{domxref("InterventionReportBody.lineNumber")}} and {{domxref("InterventionReportBody.columnNumber")}} to locate the column and line in the file where the feature is used.

## Value

A string, or `null` if the path is not known.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then print the value of `sourceFile` to the console.

```js
let options = {
  types: ['intervention'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.sourceFile);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).
