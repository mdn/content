---
title: "CSPViolationReportBody: effectiveDirective property"
short-title: effectiveDirective
slug: Web/API/CSPViolationReportBody/effectiveDirective
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.effectiveDirective
---

{{APIRef("Reporting API")}}

The **`effectiveDirective`** read-only property of the {{domxref("CSPViolationReportBody")}} interface is a string that represents effective [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) directive that was violated.

Note that this contains the specific directive that was effectively violated, such as `script-src-elem`, and not the policy that was specified, which may have been the (more general) `default-src`.

## Value

A string representing the effective [`Content-Security-Policy` directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#directives) that was violated.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function in invoked, we log the directive in the first entry of the reports array.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`Directive: ${reports[0].body.effectiveDirective}`); // For example: style-src-elem
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the `effectiveDirective` of the first report.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.effectiveDirective")}}
