---
title: Report.type
slug: Web/API/Report/type
page-type: web-api-instance-property
browser-compat: api.Report.type
---

{{APIRef("Reporting API")}}

The **`type`** read-only property of the {{domxref("Report")}}
interface returns the type of report generated, e.g. `deprecation` or
`intervention`.

## Value

A string representing the type of the report. Currently the available types are
`deprecation`, `intervention`, and `crash`.

## Examples

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
  // Log the first report's report type, i.e. "deprecation"
  console.log(firstReport.type);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
