---
title: TrustedTypePolicy.createScriptURL()
slug: Web/API/TrustedTypePolicy/createScriptURL
tags:
  - API
  - Method
  - Reference
  - createScriptURL
  - TrustedTypePolicy
browser-compat: api.TrustedTypePolicy.createScriptURL
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`createScriptURL()`** method of the {{domxref("TrustedTypePolicy")}} interface creates a {{domxref("TrustedScriptURL")}} object using a policy created by {{domxref("TrustedTypePolicyFactory.createPolicy","TrustedTypePolicyFactory.createPolicy()")}}.

## Syntax

```js
var str = TrustedTypePolicy.createScriptURL(input[,args]);
```

### Parameters

- `input`
  - : A {{domxref("DOMString")}} containing the string to be sanitized by the policy.
- `args`{{optional_inline}}
  - : Additional arguments to be passed to the function represented by {{domxref("TrustedTypePolicy")}}.

### Return value

A {{domxref("TrustedScriptURL")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if {{domxref("TrustedTypePolicy")}} does not contain a function to run on the input.

## Examples

In the below example a string containing the URL to an external resource is used as the input for `createScriptURL()`. The policy can check that this is an allowed URL before inserting it into an injection sink that could cause this external script to be executed.

```js
const escaped = escapeURLPolicy.createScriptURL("https://example.com/my-script.js");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
