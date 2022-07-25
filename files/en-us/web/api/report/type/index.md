---
title: Report.type
slug: Web/API/Report/type
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Report
  - Reporting API
  - Type
spec-urls: https://w3c.github.io/reporting/#dom-report-type
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`type`** read-only property of the {{domxref("Report")}}
interface returns the type of report generated, e.g. `deprecation` or
`intervention`.

## Value

A string representing the type of the report. Currently the available types are
`deprecation`, `intervention`, and `crash`.

## Examples

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  // Log the first report's report type, i.e. "deprecation"
  console.log(firstReport.type);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
