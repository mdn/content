---
title: "SecurityPolicyViolationEvent: disposition property"
short-title: disposition
slug: Web/API/SecurityPolicyViolationEvent/disposition
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.disposition
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`disposition`** read-only property of the {{domxref("SecurityPolicyViolationEvent")}} interface indicates how the violated [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) is configured to be treated by the user agent.

## Value

Possible values are:

- `"enforce"`
  - : The policy is enforced and the resource request is blocked.
- `"report"`
  - : The violation is reported but the resource request is not blocked.

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

- {{domxref("CSPViolationReportBody.disposition")}}
