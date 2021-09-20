---
title: Report.url
slug: Web/API/Report/url
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Report
  - Reporting API
  - URL
browser-compat: api.Report.url
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`url`** read-only property of the {{domxref("Report")}}
interface returns the URL of the document that generated the report.

## Syntax

```js
let reportURL = reportInstance.url
```

### Returns

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

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
