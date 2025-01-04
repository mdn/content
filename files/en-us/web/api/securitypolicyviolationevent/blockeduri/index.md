---
title: "SecurityPolicyViolationEvent: blockedURI property"
short-title: blockedURI
slug: Web/API/SecurityPolicyViolationEvent/blockedURI
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.blockedURI
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`blockedURI`** read-only property of the {{domxref("SecurityPolicyViolationEvent")}} interface is a string representing the URI of the resource that was blocked because it violates a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP).

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

- {{domxref("CSPViolationReportBody.blockedURL")}}
