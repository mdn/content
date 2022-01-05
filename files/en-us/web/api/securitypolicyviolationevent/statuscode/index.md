---
title: SecurityPolicyViolationEvent.statusCode
slug: Web/API/SecurityPolicyViolationEvent/statusCode
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
  - Statuscode
browser-compat: api.SecurityPolicyViolationEvent.statusCode
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`statusCode`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a number representing the HTTP
status code of the document or worker in which the violation occurred.

## Syntax

```js
let status = violationEventInstance.statusCode;
```

### Value

A number representing the status code of the document or worker in which the violation
occurred.

## Example

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.statusCode);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
