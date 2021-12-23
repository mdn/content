---
title: SecurityPolicyViolationEvent.effectiveDirective
slug: Web/API/SecurityPolicyViolationEvent/effectiveDirective
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
  - effectiveDirective
browser-compat: api.SecurityPolicyViolationEvent.effectiveDirective
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`effectiveDirective`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a {{domxref("DOMString")}}
representing the directive whose enforcement uncovered the violation.

## Syntax

```js
let effDir = violationEventInstance.effectiveDirective;
```

### Value

A {{domxref("DOMString")}} representing the directive whose enforcement uncovered the
violation.

## Example

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

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
