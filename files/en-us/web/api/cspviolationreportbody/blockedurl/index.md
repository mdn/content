---
title: "CSPViolationReportBody: blockedURL property"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.blockedURL
---

{{APIRef("Reporting API")}}

The **`blockedURL`** read-only property of the {{domxref("CSPViolationReportBody")}} interface represent the URL of a resource that was blocked because it violates a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP).

## Value

An string containing the URL of the blocked resource.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function in invoked, we log the blocked URL in the first entry of the reports array.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`Value: ${reports[0].body.blockedURL}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the blocked URL of the first report.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.blockedURI")}}
