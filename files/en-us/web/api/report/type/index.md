---
title: Report.type
slug: Web/API/Report/type
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Report
  - Reporting API
  - Type
browser-compat: api.Report.type
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`type`** read-only property of the {{domxref("Report")}}
interface returns the type of report generated, e.g. `deprecation` or
`intervention`.

## Syntax

```js
let reportType = reportInstance.type
```

### Returns

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

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
