---
title: SecurityPolicyViolationEvent
slug: Web/API/SecurityPolicyViolationEvent
tags:
  - API
  - CSP
  - Experimental
  - HTTP
  - Interface
  - Reference
  - Security
  - SecurityPolicyViolationEvent
browser-compat: api.SecurityPolicyViolationEvent
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`SecurityPolicyViolationEvent`** interface inherits from {{domxref("Event")}}, and represents the event object of an event sent on a document or worker when its content security policy is violated.

## Constructor

- {{domxref("SecurityPolicyViolationEvent.SecurityPolicyViolationEvent","SecurityPolicyViolationEvent()")}}
  - : Creates a new `SecurityPolicyViolationEvent` object instance.

## Properties

- {{domxref("SecurityPolicyViolationEvent.blockedURI")}}{{readonlyInline}}
  - : A {{domxref("USVString")}} representing the URI of the resource that was blocked because it violates a policy.
- {{domxref("SecurityPolicyViolationEvent.columnNumber")}}{{readonlyInline}}
  - : The column number in the document or worker at which the violation occurred.
- {{domxref("SecurityPolicyViolationEvent.disposition")}}{{readonlyInline}}
  - : Indicates how the violated policy is configured to be treated by the user agent. This will be `"enforce"` or `"report"`.
- {{domxref("SecurityPolicyViolationEvent.documentURI")}}{{readonlyInline}}
  - : A {{domxref("USVString")}} representing the URI of the document or worker in which the violation was found.
- {{domxref("SecurityPolicyViolationEvent.effectiveDirective")}}{{readonlyInline}}
  - : A {{domxref("DOMString")}} representing the directive whose enforcement uncovered the violation.
- {{domxref("SecurityPolicyViolationEvent.lineNumber")}}{{readonlyInline}}
  - : The line number in the document or worker at which the violation occurred.
- {{domxref("SecurityPolicyViolationEvent.originalPolicy")}}{{readonlyInline}}
  - : A {{domxref("DOMString")}} containing the policy whose enforcement uncovered the violation.
- {{domxref("SecurityPolicyViolationEvent.referrer")}}{{readonlyInline}}
  - : A {{domxref("USVString")}} representing the referrer of the resources whose policy was violated. This will be a URL or `null`.
- {{domxref("SecurityPolicyViolationEvent.sample")}}{{readonlyInline}}
  - : A {{domxref("DOMString")}} representing a sample of the resource that caused the violation, usually the first 40 characters. This will only be populated if the resource is an inline script, event handler, or style — external resources causing a violation will not generate a sample.
- {{domxref("SecurityPolicyViolationEvent.sourceFile")}}{{readonlyInline}}
  - : A {{domxref("USVString")}} representing the URI of the document or worker in which the violation was found.
- {{domxref("SecurityPolicyViolationEvent.statusCode")}}{{readonlyInline}}
  - : A number representing the HTTP status code of the document or worker in which the violation occurred.
- {{domxref("SecurityPolicyViolationEvent.violatedDirective")}}{{readonlyInline}}
  - : A {{domxref("DOMString")}} representing the directive whose enforcement uncovered the violation.

## Examples

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.blockedURI);
  console.log(e.violatedDirective);
  console.log(e.originalPolicy);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
