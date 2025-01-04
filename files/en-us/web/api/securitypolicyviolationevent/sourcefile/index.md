---
title: "SecurityPolicyViolationEvent: sourceFile property"
short-title: sourceFile
slug: Web/API/SecurityPolicyViolationEvent/sourceFile
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.sourceFile
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`sourceFile`** read-only property of the {{domxref("SecurityPolicyViolationEvent")}} interface is a string representing the URL of the script in which the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) violation occurred.

## Value

A string representing the URL of the script in which the violation occurred, or `null` if the violation is not in a script.

Note that both `columnNumber` and `lineNumber` should have non-null values if this property is not `null`.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.sourceFile);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSPViolationReportBody.sourceFile")}}
