---
title: "CSPViolationReportBody: documentURL property"
short-title: documentURL
slug: Web/API/CSPViolationReportBody/documentURL
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.documentURL
---

{{APIRef("Reporting API")}}

The **`documentURL`** read-only property of the {{domxref("CSPViolationReportBody")}} interface is a string that represents the URL of the document or worker that violated the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP).

## Value

A string containing the URL of the document or worker that violated the CSP.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function in invoked, we log the document URL in the first entry of the reports array.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`Document: ${reports[0].body.documentURL}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the document URL of the first report.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.documentURI")}}
