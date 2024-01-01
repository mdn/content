---
title: "SecurityPolicyViolationEvent: violatedDirective property"
short-title: violatedDirective
slug: Web/API/SecurityPolicyViolationEvent/violatedDirective
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.violatedDirective
---

{{HTTPSidebar}}

The **`violatedDirective`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a string
representing the directive whose enforcement uncovered the violation.

## Value

A string representing the directive whose enforcement uncovered the
violation.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.violatedDirective);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
