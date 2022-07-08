---
title: SecurityPolicyViolationEvent.documentURI
slug: Web/API/SecurityPolicyViolationEvent/documentURI
page-type: web-api-instance-property
tags:
  - API
  - CSP
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
  - documentURI
browser-compat: api.SecurityPolicyViolationEvent.documentURI
---
{{HTTPSidebar}}

The **`documentURI`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a string
representing the URI of the document or worker in which the violation was found.

## Value

A string representing the URI of the document or worker in which the
violation was found.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.documentURI);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
