---
title: "CSPViolationReportBody: sample property"
short-title: sample
slug: Web/API/CSPViolationReportBody/sample
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.sample
---

{{APIRef("Reporting API")}}

The **`sample`** read-only property of the {{domxref("CSPViolationReportBody")}} interface is a string that contains a sample of the resource that caused the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) violation.

This is usually the first 40 characters of the inline script, event handler, or style that contains the violation — external resources causing a violation will not generate a sample.
If not populated it is the empty string `""`.

Note that this is only populated for CSP [`script-src*`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#script-src) and [`style-src*`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#style-src) violations, when the corresponding `Content-Security-Policy` directive contains the [`'report-sample'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample) keyword.

> [!NOTE] Violation reports should be considered attacker-controlled data.
> The content of this field _in particular_ should be sanitized before storing or rendering.

## Value

A string containing a sample of the resource that caused the violation, usually the first 40 characters, or the empty string.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function in invoked, we log the sample in the first entry of the reports array.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`Sample: ${reports[0].body.sample}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the sample of the first report.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.sample")}}
