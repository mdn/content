---
title: "SecurityPolicyViolationEvent: referrer property"
short-title: referrer
slug: Web/API/SecurityPolicyViolationEvent/referrer
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.referrer
---

{{HTTPSidebar}}

The **`referrer`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a string
representing the referrer of the resources whose policy was violated. This will be a URL
or `null`.

## Value

A string representing the URL of the referrer of the violating
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
