---
title: SecurityPolicyViolationEvent.blockedURI
slug: Web/API/SecurityPolicyViolationEvent/blockedURI
page-type: web-api-instance-property
tags:
  - API
  - CSP
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
browser-compat: api.SecurityPolicyViolationEvent.blockedURI
---
{{HTTPSidebar}}

The **`blockedURI`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a string
representing the URI of the resource that was blocked because it violates a policy.

## Value

A string representing the URI of the blocked resource.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.blockedURI);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
