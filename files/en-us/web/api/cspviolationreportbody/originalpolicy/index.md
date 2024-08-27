---
title: "CSPViolationReportBody: originalPolicy property"
short-title: originalPolicy
slug: Web/API/CSPViolationReportBody/originalPolicy
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.originalPolicy
---

{{APIRef("Reporting API")}}

The **`originalPolicy`** read-only property of the {{domxref("CSPViolationReportBody")}} interface is a string that represents the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) whose enforcement uncovered the violation.

This is the string in the {{HTTPHeader("Content-Security-Policy")}} HTTP response header that contains the list of [directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#directives) and their values that make the CSP policy.
Note that differs from the {{domxref("CSPViolationReportBody.effectiveDirective","effectiveDirective")}}, which is the specific directive that is effectively being violated (and which might not be explicitly listed in the policy if `default-src` is used).

## Value

A string representing the policy whose enforcement uncovered the violation.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function in invoked, we log the policy in the first entry of the reports array.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`Document: ${reports[0].body.originalPolicy}`);
    // For example: "default-src 'self'; report-to csp-endpoint",
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the original policy of the first report.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.originalPolicy")}}
