---
title: SecurityPolicyViolationEvent()
slug: Web/API/SecurityPolicyViolationEvent/SecurityPolicyViolationEvent
tags:
  - API
  - CSP
  - Constructor
  - Experimental
  - HTTP
  - Reference
  - Security
  - SecurityPolicyViolationEvent
browser-compat: api.SecurityPolicyViolationEvent.SecurityPolicyViolationEvent
---
{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}

The **`SecurityPolicyViolationEvent`** constructor creates a
new `SecurityPolicyViolationEvent` object instance.

## Syntax

```js
new SecurityPolicyViolationEvent(type);
new SecurityPolicyViolationEvent(type, init);
```

### Properties

- type
  - : A {{domxref("DOMString")}} representing the type of security policy violation that
    occurred.
- init {{optional_inline}}

  - : An object containing information about the properties of the
    `SecurityPolicyViolationEvent` to be constructed. This can include the
    following properties, but bear in mind that if you do include an
    `eventInitDict`, certain properties must be included (marked below with
    **required**):

    - `blockedURI`: The
      {{domxref("SecurityPolicyViolationEvent.blockedURI","blockedURI")}} of the
      `SecurityPolicyViolationEvent`. If not included, the default value is
      `""`.
    - `columnNumber`: The
      {{domxref("SecurityPolicyViolationEvent.columnNumber","columnNumber")}} of the
      `SecurityPolicyViolationEvent`. If not included, the default value is
      `0`.
    - `disposition`: The
      {{domxref("SecurityPolicyViolationEvent.disposition","disposition")}} of the
      `SecurityPolicyViolationEvent` (**required**).
    - `documentURI`: The
      {{domxref("SecurityPolicyViolationEvent.documentURI","documentURI")}} of the
      `SecurityPolicyViolationEvent` (**required**).
    - `effectiveDirective`: The
      {{domxref("SecurityPolicyViolationEvent.effectiveDirective","effectiveDirective")}}
      of the `SecurityPolicyViolationEvent` (**required**).
    - `lineNumber`: The
      {{domxref("SecurityPolicyViolationEvent.lineNumber","lineNumber")}} of the
      `SecurityPolicyViolationEvent`. If not included, the default value is
      `0`.
    - `originalPolicy`: The
      {{domxref("SecurityPolicyViolationEvent.originalPolicy","originalPolicy")}} of the
      `SecurityPolicyViolationEvent` (**required**).
    - `referrer`: The
      {{domxref("SecurityPolicyViolationEvent.referrer","referrer")}} of the
      `SecurityPolicyViolationEvent`. If not included, the default value is
      `""`.
    - `sample`: The
      {{domxref("SecurityPolicyViolationEvent.sample","sample")}} of the
      `SecurityPolicyViolationEvent`. If not included, the default value is
      `""`.
    - `sourceFile`: The
      {{domxref("SecurityPolicyViolationEvent.sourceFile","sourceFile")}} of the
      `SecurityPolicyViolationEvent`. If not included, the default value is
      `""`.
    - `statusCode`: The
      {{domxref("SecurityPolicyViolationEvent.statusCode","statusCode")}} of the
      `SecurityPolicyViolationEvent` (**required**).
    - `violatedDirective`: The
      {{domxref("SecurityPolicyViolationEvent.violatedDirective","violatedDirective")}}
      of the `SecurityPolicyViolationEvent` (**required**).

### Return value

A `SecurityPolicyViolationEvent` object instance.

## Example

```js
let SPVEvt = new SecurityPolicyViolationEvent('foo', {
  ...
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
