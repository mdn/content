---
title: SecurityPolicyViolationEvent.violatedDirective
slug: Web/API/SecurityPolicyViolationEvent/violatedDirective
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
  - violatedDirective
browser-compat: api.SecurityPolicyViolationEvent.violatedDirective
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`violatedDirective`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a {{domxref("DOMString")}}
representing the directive whose enforcement uncovered the violation.

## Syntax

```js
let violatedDir = violationEventInstance.violatedDirective;
```

### Value

A {{domxref("DOMString")}} representing the directive whose enforcement uncovered the
violation.

## Example

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
