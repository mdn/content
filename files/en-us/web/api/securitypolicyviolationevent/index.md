---
title: SecurityPolicyViolationEvent
slug: Web/API/SecurityPolicyViolationEvent
page-type: web-api-interface
browser-compat: api.SecurityPolicyViolationEvent
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`SecurityPolicyViolationEvent`** interface inherits from {{domxref("Event")}}, and represents the event object of a `securitypolicyviolation` event sent on an {{domxref("Element/securitypolicyviolation_event", "Element")}}, {{domxref("Document/securitypolicyviolation_event", "Document")}}, or {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "worker","","nocode")}} when its [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) is violated.

{{InheritanceDiagram}}

## Constructor

- {{domxref("SecurityPolicyViolationEvent.SecurityPolicyViolationEvent","SecurityPolicyViolationEvent()")}}
  - : Creates a new `SecurityPolicyViolationEvent` object instance.

## Instance properties

- {{domxref("SecurityPolicyViolationEvent.blockedURI")}} {{ReadOnlyInline}}
  - : A string representing the URI of the resource that was blocked because it violates a policy.
- {{domxref("SecurityPolicyViolationEvent.columnNumber")}} {{ReadOnlyInline}}
  - : The column number in the document or worker at which the violation occurred.
- {{domxref("SecurityPolicyViolationEvent.disposition")}} {{ReadOnlyInline}}
  - : A string indicating whether the user agent is configured to enforce or just report the policy violation.
- {{domxref("SecurityPolicyViolationEvent.documentURI")}} {{ReadOnlyInline}}
  - : A string representing the URI of the document or worker in which the violation occurred.
- {{domxref("SecurityPolicyViolationEvent.effectiveDirective")}} {{ReadOnlyInline}}
  - : A string representing the directive that was violated.
- {{domxref("SecurityPolicyViolationEvent.lineNumber")}} {{ReadOnlyInline}}
  - : The line number in the document or worker at which the violation occurred.
- {{domxref("SecurityPolicyViolationEvent.originalPolicy")}} {{ReadOnlyInline}}
  - : A string containing the policy whose enforcement caused the violation.
- {{domxref("SecurityPolicyViolationEvent.referrer")}} {{ReadOnlyInline}}
  - : A string representing the URL for the referrer of the resources whose policy was violated, or `null`.
- {{domxref("SecurityPolicyViolationEvent.sample")}} {{ReadOnlyInline}}
  - : A string representing a sample of the resource that caused the violation, usually the first 40 characters. This will only be populated if the resource is an inline script, event handler, or style — external resources causing a violation will not generate a sample.
- {{domxref("SecurityPolicyViolationEvent.sourceFile")}} {{ReadOnlyInline}}
  - : If the violation occurred as a result of a script, this will be the URL of the script; otherwise, it will be `null`.
    Both `columnNumber` and `lineNumber` should have non-null values if this property is not `null`.
- {{domxref("SecurityPolicyViolationEvent.statusCode")}} {{ReadOnlyInline}}
  - : A number representing the HTTP status code of the document or worker in which the violation occurred.
- {{domxref("SecurityPolicyViolationEvent.violatedDirective")}} {{ReadOnlyInline}}
  - : A string representing the directive that was violated.
    This is a historical alias of [`effectiveDirective`](#effectivedirective).

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

- HTTP [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
- {{domxref("CSPViolationReportBody")}}
- The {{domxref("Element/securitypolicyviolation_event", "securitypolicyviolation")}} event of the {{domxref("Element")}} interface
- The {{domxref("Document/securitypolicyviolation_event", "securitypolicyviolation")}} event of the {{domxref("Document")}} interface
- The {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}} event of the {{domxref("WorkerGlobalScope")}} interface
