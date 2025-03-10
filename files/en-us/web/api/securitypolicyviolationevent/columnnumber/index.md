---
title: "SecurityPolicyViolationEvent: columnNumber property"
short-title: columnNumber
slug: Web/API/SecurityPolicyViolationEvent/columnNumber
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.columnNumber
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`columnNumber`** read-only property of the {{domxref("SecurityPolicyViolationEvent")}} interface is the column number in the document or worker script at which the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) violation occurred.

## Value

A number representing the column number where the violation occurred.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.columnNumber);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSPViolationReportBody.columnNumber")}}
