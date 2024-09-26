---
title: "SecurityPolicyViolationEvent: referrer property"
short-title: referrer
slug: Web/API/SecurityPolicyViolationEvent/referrer
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.referrer
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`referrer`** read-only property of the {{domxref("SecurityPolicyViolationEvent")}} interface is a string representing the referrer for the resources whose [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) was violated.
This will be a URL or `null`.

## Value

A string representing the URL for the referrer of the resources whose policy was violated, or `null`.

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

- {{domxref("CSPViolationReportBody.referrer")}}
