---
title: "CSPViolationReportBody: disposition property"
short-title: disposition
slug: Web/API/CSPViolationReportBody/disposition
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.disposition
---

{{APIRef("Reporting API")}}

The **`disposition`** read-only property of the {{domxref("CSPViolationReportBody")}} interface indicates whether the user agent is configured to enforce [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) violations or only report them.

## Value

Possible values are:

- `"enforce"`
  - : The policy is enforced and the resource request is blocked.
- `"report"`
  - : The violation is reported but the resource request is not blocked.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function in invoked, we log the disposition in the first entry of the reports array.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`Disposition: ${reports[0].body.disposition}`);
    // For example: "enforce"
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the disposition of the first report.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.disposition")}}
