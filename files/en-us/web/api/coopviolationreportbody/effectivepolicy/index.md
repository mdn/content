---
title: "COOPViolationReportBody: effectivePolicy property"
short-title: effectivePolicy
slug: Web/API/COOPViolationReportBody/effectivePolicy
page-type: web-api-instance-property
browser-compat: api.COOPViolationReportBody.effectivePolicy
---

{{APIRef("Reporting API")}}

The **`effectivePolicy`** read-only property of the {{domxref("COOPViolationReportBody")}} dictionary indicates the COOP policy of the opened or opener document that triggered the report.
It is present on all reports of type `coop`.

Note that the term "effective" is used for the property because to indicate that it is a policy that is either enforced or reported.

## Value

A string that indicates the policy set in {{httpheader("Cross-Origin-Opener-Policy")}} or {{httpheader("Cross-Origin-Opener-Policy-Report-Only")}} for the document associated with the report.

This will be one of the allowed directive values for [`Cross-Origin-Opener-Policy`](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy#directives).

## Examples

### Get the effectivePolicy of a COOP violation report

In this example we create a new {{domxref("ReportingObserver")}} to observe COEP violation reports, then log the value of `effectivePolicy` to the console.

```js
const options = {
  types: ["coep"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // coep
  console.log(firstReport.body.effectivePolicy); // A COOP directive such as unsafe-none or same-site
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
