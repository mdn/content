---
title: "SecurityPolicyViolationEvent: SecurityPolicyViolationEvent() constructor"
short-title: SecurityPolicyViolationEvent()
slug: Web/API/SecurityPolicyViolationEvent/SecurityPolicyViolationEvent
page-type: web-api-constructor
browser-compat: api.SecurityPolicyViolationEvent.SecurityPolicyViolationEvent
---

{{HTTPSidebar}}

The **`SecurityPolicyViolationEvent()`** constructor creates a new {{domxref("SecurityPolicyViolationEvent")}} object.

## Syntax

```js-nolint
new SecurityPolicyViolationEvent(type)
new SecurityPolicyViolationEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `securitypolicyviolation`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `blockedURI` {{optional_inline}}
      - : The {{domxref("SecurityPolicyViolationEvent.blockedURI","blockedURI")}} of the `SecurityPolicyViolationEvent`.
        If not included, the default value is `""`.
    - `columnNumber` {{optional_inline}}
      - : The {{domxref("SecurityPolicyViolationEvent.columnNumber","columnNumber")}} of the `SecurityPolicyViolationEvent`.
        If not included, the default value is `0`.
    - `disposition`
      - : The {{domxref("SecurityPolicyViolationEvent.disposition","disposition")}} of the `SecurityPolicyViolationEvent`.
    - `documentURI`
      - : The {{domxref("SecurityPolicyViolationEvent.documentURI","documentURI")}} of the `SecurityPolicyViolationEvent`.
    - `effectiveDirective`
      - : The {{domxref("SecurityPolicyViolationEvent.effectiveDirective","effectiveDirective")}} of the `SecurityPolicyViolationEvent`.
    - `lineNumber` {{optional_inline}}
      - : The {{domxref("SecurityPolicyViolationEvent.lineNumber","lineNumber")}} of the `SecurityPolicyViolationEvent`.
        If not included, the default value is `0`.
    - `originalPolicy`
      - : The {{domxref("SecurityPolicyViolationEvent.originalPolicy","originalPolicy")}} of the `SecurityPolicyViolationEvent`.
    - `referrer` {{optional_inline}}
      - : The {{domxref("SecurityPolicyViolationEvent.referrer","referrer")}} of the `SecurityPolicyViolationEvent`.
        If not included, the default value is `""`.
    - `sample` {{optional_inline}}
      - : The {{domxref("SecurityPolicyViolationEvent.sample","sample")}} of the `SecurityPolicyViolationEvent`.
        If not included, the default value is `""`.
    - `sourceFile` {{optional_inline}}
      - : The {{domxref("SecurityPolicyViolationEvent.sourceFile","sourceFile")}} of the `SecurityPolicyViolationEvent`.
        If not included, the default value is `""`.
    - `statusCode`
      - : The {{domxref("SecurityPolicyViolationEvent.statusCode","statusCode")}} of the `SecurityPolicyViolationEvent`.
    - `violatedDirective`
      - : The {{domxref("SecurityPolicyViolationEvent.violatedDirective","violatedDirective")}} of the `SecurityPolicyViolationEvent`.

### Return value

A new `SecurityPolicyViolationEvent` object.

## Examples

```js
let SPVEvt = new SecurityPolicyViolationEvent("foo", {
  /* ... */
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
