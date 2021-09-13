---
title: SecurityPolicyViolationEvent.blockedURI
slug: Web/API/SecurityPolicyViolationEvent/blockedURI
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
browser-compat: api.SecurityPolicyViolationEvent.blockedURI
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`blockedURI`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a {{domxref("USVString")}}
representing the URI of the resource that was blocked because it violates a policy.

## Syntax

```js
let blockedURI = violationEventInstance.blockedURI;
```

### Value

A {{domxref("USVString")}} representing the URI of the blocked resource.

## Example

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
