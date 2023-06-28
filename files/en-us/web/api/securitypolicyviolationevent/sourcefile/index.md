---
title: "SecurityPolicyViolationEvent: sourceFile property"
short-title: sourceFile
slug: Web/API/SecurityPolicyViolationEvent/sourceFile
page-type: web-api-instance-property
browser-compat: api.SecurityPolicyViolationEvent.sourceFile
---

{{HTTPSidebar}}

The **`sourceFile`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a string
representing the URI of the document or worker in which the violation was found.

## Value

A string representing the URI of the document or worker in which the
violation was found.

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

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
