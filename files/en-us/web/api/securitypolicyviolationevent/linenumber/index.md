---
title: "SecurityPolicyViolationEvent: lineNumber property"
short-title: lineNumber
slug: Web/API/SecurityPolicyViolationEvent/lineNumber
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.lineNumber
---

{{HTTPSidebar}}

The **`lineNumber`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is the line number in the document
or worker at which the violation occurred.

## Value

A number representing the line number at which the violation occurred.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.lineNumber);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
