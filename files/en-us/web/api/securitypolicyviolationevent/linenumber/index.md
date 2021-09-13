---
title: SecurityPolicyViolationEvent.lineNumber
slug: Web/API/SecurityPolicyViolationEvent/lineNumber
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
  - lineNumber
browser-compat: api.SecurityPolicyViolationEvent.lineNumber
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`lineNumber`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is the line number in the document
or worker at which the violation occurred.

## Syntax

```js
let lineNumber = violationEventInstance.lineNumber;
```

### Value

A number representing the line number at which the violation occurred.

## Example

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.lineNumber);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
