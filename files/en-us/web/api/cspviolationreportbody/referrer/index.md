---
title: "CSPViolationReportBody: referrer property"
short-title: referrer
slug: Web/API/CSPViolationReportBody/referrer
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.referrer
---

{{APIRef("Reporting API")}}

The **`referrer`** read-only property of the {{domxref("CSPViolationReportBody")}} interface is a string that represents the referrer whose enforcement uncovered the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) violation.
This will be the URL of the web page that made the request, or `null`.

## Value

A string representing the URL for the referrer of the resources whose policy was violated, or `null`.

Note that if the referrer is an HTTP URL then any username, password or fragment is removed.
If the URL scheme is not `http:` then just the scheme is returned.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function in invoked, we log the referrer in the first entry of the reports array.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`Referrer: ${reports[0].body.referrer}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the referrer of the first report.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.referrer")}}
- {{httpheader("Referer")}}
