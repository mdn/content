---
title: SecurityPolicyViolationEvent.sample
slug: Web/API/SecurityPolicyViolationEvent/sample
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Property
  - Reference
  - Sample
  - Security
  - SecurityPolicyViolationEvent
browser-compat: api.SecurityPolicyViolationEvent.sample
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`sample`** read-only property of the
{{domxref("SecurityPolicyViolationEvent")}} interface is a {{domxref("DOMString")}}
representing a sample of the resource that caused the violation.

## Syntax

```js
let sample = violationEventInstance.sample;
```

### Value

A {{domxref("DOMString")}} containing a sample of the resource that caused the
violation, usually the first 40 characters. This will only be populated if the resource
is an inline script, event handler, or style — external resources causing a violation
will not generate a sample.

## Example

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.sample);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
