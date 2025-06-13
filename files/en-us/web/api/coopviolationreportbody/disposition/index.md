---
title: "COOPViolationReportBody: disposition property"
short-title: disposition
slug: Web/API/COOPViolationReportBody/disposition
page-type: web-api-instance-property
browser-compat: api.COOPViolationReportBody.disposition
---

{{APIRef("Reporting API")}}

The **`disposition`** read-only property of the {{domxref("COOPViolationReportBody")}} dictionary indicates whether the policy violation was enforced, blocking loading of the associated resource, or just reported.

## Value

A string that can have one of the following values:

- `"enforce"`
  - : The violation caused loading of the embedded resource to be blocked.
    This is set for violations of policies set with {{httpheader("Cross-Origin-Embedder-Policy")}}.
- `"reporting"`
  - : The violation was reported without blocking the resource from loading.
    This is set for violations of policies set with {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}}.

## Examples

### Get the disposition of a report

In this example we create a new {{domxref("ReportingObserver")}} to observe COEP violation reports, then log the value of `disposition` to the console.

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
