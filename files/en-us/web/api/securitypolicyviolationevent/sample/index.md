---
title: "SecurityPolicyViolationEvent: sample property"
short-title: sample
slug: Web/API/SecurityPolicyViolationEvent/sample
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.sample
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`sample`** read-only property of the {{domxref("SecurityPolicyViolationEvent")}} interface is a string representing a sample of the resource that caused the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) violation.

This is only [`script-src*`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#script-src) and [`style-src*`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#style-src) violations, when the corresponding `Content-Security-Policy` directive contains the [`'report-sample'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample) keyword.
In addition, this will only be populated if the resource is an inline script, event handler, or style — external resources causing a violation will not generate a sample.

> [!NOTE] Violation reports should be considered attacker-controlled data.
> The content of this field should be sanitized before storing or rendering.

## Value

A string containing a sample of the resource that caused the violation, usually the first 40 characters, or the empty string.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.sample);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSPViolationReportBody.sample")}}
