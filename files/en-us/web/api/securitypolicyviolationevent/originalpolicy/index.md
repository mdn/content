---
title: "SecurityPolicyViolationEvent: originalPolicy property"
short-title: originalPolicy
slug: Web/API/SecurityPolicyViolationEvent/originalPolicy
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.originalPolicy
---

{{HTTPSidebar}}

The **`originalPolicy`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a string
containing the policy whose enforcement uncovered the violation.

## Value

A string representing the policy whose enforcement uncovered the
violation.

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

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
