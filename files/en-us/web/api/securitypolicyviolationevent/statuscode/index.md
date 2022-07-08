---
title: SecurityPolicyViolationEvent.statusCode
slug: Web/API/SecurityPolicyViolationEvent/statusCode
page-type: web-api-instance-property
tags:
  - API
  - CSP
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
  - statusCode
browser-compat: api.SecurityPolicyViolationEvent.statusCode
---
{{HTTPSidebar}}

The **`statusCode`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a number representing the HTTP
status code of the document or worker in which the violation occurred.

## Value

A number representing the status code of the document or worker in which the violation
occurred.

## Examples

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
