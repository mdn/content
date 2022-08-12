---
title: SecurityPolicyViolationEvent.disposition
slug: Web/API/SecurityPolicyViolationEvent/disposition
page-type: web-api-instance-property
tags:
  - API
  - CSP
  - Disposition
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
browser-compat: api.SecurityPolicyViolationEvent.disposition
---
{{HTTPSidebar}}")}}

The **`disposition`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface indicates how the violated policy
is configured to be treated by the user agent.

## Value

A value defined in the [SecurityPolicyViolationEventDisposition enum](https://w3c.github.io/webappsec-csp/#enumdef-securitypolicyviolationeventdisposition)
representing the URI of the blocked resource. Possible values are `"enforce"` or `"report"`

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.disposition);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
