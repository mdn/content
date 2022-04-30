---
title: SecurityPolicyViolationEvent.columnNumber
slug: Web/API/SecurityPolicyViolationEvent/columnNumber
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
  - columnNumber
browser-compat: api.SecurityPolicyViolationEvent.columnNumber
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`columnNumber`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is the column number in the
document or worker at which the violation occurred.

## Value

A number representing the column number where the violation occurred.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.columnNumber);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
