---
title: "SecurityPolicyViolationEvent: violatedDirective property"
short-title: violatedDirective
slug: Web/API/SecurityPolicyViolationEvent/violatedDirective
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.violatedDirective
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`violatedDirective`** read-only property of the {{domxref("SecurityPolicyViolationEvent")}} interface is a string representing the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) directive that was violated.

This is a historical alias of {{domxref("SecurityPolicyViolationEvent.effectiveDirective")}}, and has the same value.

## Value

A string representing the [`Content-Security-Policy` directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#directives) that was violated.

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
