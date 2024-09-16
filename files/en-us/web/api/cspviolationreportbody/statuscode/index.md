---
title: "CSPViolationReportBody: statusCode property"
short-title: statusCode
slug: Web/API/CSPViolationReportBody/statusCode
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.statusCode
---

{{APIRef("Reporting API")}}

The **`statusCode`** read-only property of the {{domxref("CSPViolationReportBody")}} interface is a number representing the [HTTP status code](/en-US/docs/Web/HTTP/Status) of the response to the request that triggered a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) violation (when loading a window or worker).

## Value

A number representing the HTTP status code of the response to the request that triggered the CSP violation.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function is invoked, we log the status code for the first entry of the reports array.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`statusCode: ${reports[0].body.statusCode}`);
    // For example: 200
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the status code of the first report.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.statusCode")}}
