---
title: "SecurityPolicyViolationEvent: originalPolicy property"
short-title: originalPolicy
slug: Web/API/SecurityPolicyViolationEvent/originalPolicy
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.originalPolicy
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`originalPolicy`** read-only property of the {{domxref("SecurityPolicyViolationEvent")}} interface is a string containing the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) whose enforcement uncovered the violation.

## Value

A string representing the policy whose enforcement uncovered the violation.

This is the string in the {{HTTPHeader("Content-Security-Policy")}} HTTP header that contains the list of [directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#directives) and their values that make the CSP policy.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.originalPolicy);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSPViolationReportBody.originalPolicy")}}
