---
title: "SecurityPolicyViolationEvent: effectiveDirective property"
short-title: effectiveDirective
slug: Web/API/SecurityPolicyViolationEvent/effectiveDirective
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.effectiveDirective
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`effectiveDirective`** read-only property of the {{domxref("SecurityPolicyViolationEvent")}} interface is a string representing the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) directive that was violated.

This supersedes {{domxref("SecurityPolicyViolationEvent.violatedDirective")}}, its historical alias.

## Value

A string representing the particular [`Content-Security-Policy` directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#directives) that was violated.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.effectiveDirective);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSPViolationReportBody.effectiveDirective")}}
