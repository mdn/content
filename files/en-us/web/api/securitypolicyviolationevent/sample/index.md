---
title: "SecurityPolicyViolationEvent: sample property"
short-title: sample
slug: Web/API/SecurityPolicyViolationEvent/sample
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.sample
---

{{HTTPSidebar}}

The **`sample`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a string
representing a sample of the resource that caused the violation.

## Value

A string containing a sample of the resource that caused the
violation, usually the first 40 characters. This will only be populated if the resource
is an inline script, event handler, or style — external resources causing a violation
will not generate a sample.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.sample);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
