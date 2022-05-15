---
title: DeprecationReportBody.lineNumber
slug: Web/API/DeprecationReportBody/lineNumber
tags:
  - API
  - Property
  - Reference
  - Experimental
  - lineNumber
  - DeprecationReportBody
spec-urls: https://wicg.github.io/deprecation-reporting/#dom-deprecationreportbody-linenumber
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
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.sourceFile); // the source file
  console.log(firstReport.body.lineNumber); // the line in that file
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).
