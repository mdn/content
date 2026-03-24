---
title: "SecurityPolicyViolationEvent: columnNumber property"
short-title: columnNumber
slug: Web/API/SecurityPolicyViolationEvent/columnNumber
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.columnNumber
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`columnNumber`** read-only property of the {{domxref("SecurityPolicyViolationEvent")}} interface is the character position in the source file line of the document or worker script at which the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) violation occurred.

This property is used with the {{domxref("SecurityPolicyViolationEvent.sourceFile")}} and {{domxref("SecurityPolicyViolationEvent.lineNumber")}} properties, which together provide the the exact location in the source that caused the violation.

## Value

A number representing the character position number where the violation occurred.

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

- {{domxref("CSPViolationReport.columnNumber")}}
