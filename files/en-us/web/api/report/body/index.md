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
browser-compat: api.Report.body
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
const options = {
  types: ['deprecation'],
  buffered: true
}

const observer = new ReportingObserver(([firstReport], observer) => {
  // Log the first report's report body, i.e. a DeprecationReportBody object
  console.log(firstReport.body);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
