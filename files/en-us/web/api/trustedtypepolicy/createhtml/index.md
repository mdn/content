---
title: TrustedTypePolicy.createHTML()
slug: Web/API/TrustedTypePolicy/createHTML
tags:
  - API
  - Method
  - Reference
  - createHTML
  - TrustedTypePolicy
browser-compat: api.TrustedTypePolicy.createHTML
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`createHTML()`** method of the {{domxref("TrustedTypePolicy")}} interface creates a {{domxref("TrustedHTML")}} object using a policy created by {{domxref("TrustedTypePolicyFactory.createPolicy","TrustedTypePolicyFactory.createPolicy()")}}.

## Syntax

    var str = TrustedTypePolicy.createHTML(input[,args]);

### Parameters

- `input`
  - : A {{domxref("DOMString")}} containing the string to be sanitized by the policy.
- `args`{{optional_inline}}
  - : Additional arguments to be passed to the function represented by {{domxref("TrustedTypePolicy")}}.

### Return value

A {{domxref("TrustedHTML")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if {{domxref("TrustedTypePolicy")}} does not contain a function to run on the input.

## Examples

In the below example a string containing a potentially dangerous script is used as the input for `createHTML()`. Dangerous code inserted by a user could then be sanitized before insertion into any injection sink.

```js
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
