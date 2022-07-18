---
title: DeprecationReportBody.sourceFile
slug: Web/API/DeprecationReportBody/sourceFile
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Experimental
  - sourceFile
  - DeprecationReportBody
spec-urls: https://wicg.github.io/deprecation-reporting/#dom-deprecationreportbody-sourcefile
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`sourceFile`** read-only property of the {{domxref("DeprecationReportBody")}} interface returns the path to the source file where the deprecated feature was used.

> **Note:** This property can be used with {{domxref("DeprecationReportBody.lineNumber")}} and {{domxref("DeprecationReportBody.columnNumber")}} to locate the column and line in the file where the error occurred.

## Value

A string, or `null` if the path is not known.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe deprecation reports, then print the value of `sourceFile` to the console.

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.sourceFile);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).
