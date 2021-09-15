---
title: SecurityPolicyViolationEvent.documentURI
slug: Web/API/SecurityPolicyViolationEvent/documentURI
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
  - documentURI
browser-compat: api.SecurityPolicyViolationEvent.documentURI
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`documentURI`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a {{domxref("USVString")}}
representing the URI of the document or worker in which the violation was found.

## Syntax

```js
let documentURI = violationEventInstance.documentURI;
```

### Value

A {{domxref("USVString")}} representing the URI of the document or worker in which the
violation was found.

## Example

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

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
