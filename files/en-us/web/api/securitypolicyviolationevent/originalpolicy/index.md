---
title: SecurityPolicyViolationEvent.originalPolicy
slug: Web/API/SecurityPolicyViolationEvent/originalPolicy
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
  - originalPolicy
browser-compat: api.SecurityPolicyViolationEvent.originalPolicy
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`originalPolicy`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a {{domxref("DOMString")}}
containing the policy whose enforcement uncovered the violation.

## Syntax

```js
let origPolicy = violationEventInstance.originalPolicy;
```

### Value

A {{domxref("DOMString")}} representing the policy whose enforcement uncovered the
violation.

## Example

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
