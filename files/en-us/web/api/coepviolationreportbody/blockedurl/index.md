---
title: "COEPViolationReportBody: blockedURL property"
short-title: blockedURL
slug: Web/API/COEPViolationReportBody/blockedURL
page-type: web-api-instance-property
browser-compat: api.COEPViolationReportBody.blockedURL
---

{{APIRef("Reporting API")}}

The **`blockedURL`** read-only property of the {{domxref("COEPViolationReportBody")}} interface returns the URL of the resource that was blocked from loading by an enforced COEP violation, or would be blocked if a report-only policy was enforced.

## Value

An string containing a URL value.

## Examples

### Get the URL of the resource that triggered the report

In this example we create a new {{domxref("ReportingObserver")}} to observe COEP violation reports, then log the value of `blockedURL` to the console.

```js
const options = {
  types: ["coep"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // coep
  console.log(firstReport.body.blockedURL); // URL of the violating resource
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
