---
title: SecurityPolicyViolationEvent.referrer
slug: Web/API/SecurityPolicyViolationEvent/referrer
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
  - referrer
browser-compat: api.SecurityPolicyViolationEvent.referrer
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`referrer`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a {{domxref("USVString")}}
representing the referrer of the resources whose policy was violated. This will be a URL
or `null`.

## Value

A {{domxref("USVString")}} representing the URL of the referrer of the violating
resources.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.referrer);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
