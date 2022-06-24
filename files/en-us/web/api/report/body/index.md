---
title: Report.body
slug: Web/API/Report/body
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Reporting API
spec-urls: https://w3c.github.io/reporting/#dom-report-body
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`body`** read-only property of the {{domxref("Report")}}
interface returns the body of the report, which is a `ReportBody` object
containing the detailed report information.

## Value

A `ReportBody` object containing the detailed report information. Depending
on what `type` the {{domxref("Report")}} is, the object returned will
actually be a
{{domxref("DeprecationReportBody")}}, {{domxref("InterventionReportBody")}},
{{domxref("CrashReportBody")}}, or {{domxref("FeaturePolicyViolationReportBody")}}.
These all inherit from the base `ReportBody` class — study their reference
pages for more information on what the particular report body types contain.

## Examples

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  // Log the first report's report body, i.e. a DeprecationReportBody object
  console.log(firstReport.body);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
