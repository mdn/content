---
title: "SecurityPolicyViolationEvent: documentURI property"
short-title: documentURI
slug: Web/API/SecurityPolicyViolationEvent/documentURI
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.documentURI
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`documentURI`** read-only property of the {{domxref("SecurityPolicyViolationEvent")}} interface is a string representing the URI of the document or worker in which the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) violation occurred.

## Value

A string representing the URI of the document or worker in which the violation occurred.

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

- {{domxref("CSPViolationReportBody.documentURL")}}
