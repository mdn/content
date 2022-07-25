---
title: Report.url
slug: Web/API/Report/url
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Report
  - Reporting API
  - URL
spec-urls: https://w3c.github.io/reporting/#dom-report-url
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`url`** read-only property of the {{domxref("Report")}}
interface returns the URL of the document that generated the report.

## Value

A string representing the URL of the document that generated the report.

## Examples

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  // Log the URL of the document that generated the first report
  // e.g. "https://www.example.com/cats.html"
  console.log(firstReport.url);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
