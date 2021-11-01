---
title: SecurityPolicyViolationEvent.sourceFile
slug: Web/API/SecurityPolicyViolationEvent/sourceFile
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Property
  - Reference
  - Security
  - SecurityPolicyViolationEvent
  - sourceFile
browser-compat: api.SecurityPolicyViolationEvent.sourceFile
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`sourceFile`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a {{domxref("USVString")}}
representing the URI of the document or worker in which the violation was found.

## Syntax

```js
let source = violationEventInstance.sourceFile;
```

### Value

A {{domxref("USVString")}} representing the URI of the document or worker in which the
violation was found.

## Example

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
