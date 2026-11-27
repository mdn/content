---
title: "COOPViolationReportBody: disposition property"
short-title: disposition
slug: Web/API/COOPViolationReportBody/disposition
page-type: web-api-instance-property
browser-compat: api.COOPViolationReportBody.disposition
---

{{APIRef("Reporting API")}}

The **`disposition`** read-only property of the {{domxref("COOPViolationReportBody")}} dictionary indicates whether the report is for an enforced or report-only policy violation.

Policy violations are enforced if the policy was set with {{httpheader("Cross-Origin-Opener-Policy")}}, and report-only if set with {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}}.

## Value

A string that can have one of the following values:

- `"enforce"`
  - : The report is for policy violation that was enforced.
- `"reporting"`
  - : The report is for policy violation that was report-only.

## Examples

### Get the disposition of a report

In this example we create a new {{domxref("ReportingObserver")}} to observe COOP violation reports, then log the value of `disposition` to the console.

```js
const options = {
  types: ["coop"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // coop
  console.log(firstReport.body.disposition);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
