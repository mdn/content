---
title: "TrustedTypePolicy: createScript() method"
short-title: createScript()
slug: Web/API/TrustedTypePolicy/createScript
page-type: web-api-instance-method
browser-compat: api.TrustedTypePolicy.createScript
---

{{DefaultAPISidebar("Trusted Types API")}}

The **`createScript()`** method of the {{domxref("TrustedTypePolicy")}} interface creates a {{domxref("TrustedScript")}} object using a policy created by {{domxref("TrustedTypePolicyFactory.createPolicy","TrustedTypePolicyFactory.createPolicy()")}}.

## Syntax

```js-nolint
createScript(input)
createScript(input, args)
```

### Parameters

- `input`
  - : A string containing the string to be sanitized by the policy.
- `args` {{optional_inline}}
  - : Additional arguments to be passed to the function represented by {{domxref("TrustedTypePolicy")}}.

### Return value

A {{domxref("TrustedScript")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if {{domxref("TrustedTypePolicy")}} does not contain a function to run on the input.

## Examples

In the below example a string containing a potentially risky script is used as the input for `createScript()`. The policy can sanitize this script before inserting it into an injection sink that could cause it to be executed.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
