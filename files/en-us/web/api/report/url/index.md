---
title: "Report: url property"
short-title: url
slug: Web/API/Report/url
page-type: web-api-instance-property
browser-compat: api.Report.url
---

{{APIRef("Reporting API")}}

The **`url`** read-only property of the {{domxref("Report")}}
interface returns the URL of the document that generated the report.

## Value

A string representing the URL of the document that generated the report.

## Examples

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
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
