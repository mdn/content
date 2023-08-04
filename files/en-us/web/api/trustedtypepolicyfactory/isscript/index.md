---
title: "TrustedTypePolicyFactory: isScript() method"
short-title: isScript()
slug: Web/API/TrustedTypePolicyFactory/isScript
page-type: web-api-instance-method
browser-compat: api.TrustedTypePolicyFactory.isScript
---

{{DefaultAPISidebar("Trusted Types API")}}

The **`isScript()`** method of the {{domxref("TrustedTypePolicyFactory")}} interface returns true if it is passed a valid {{domxref("TrustedScript")}} object.

> **Note:** The purpose of the functions `isScript()`, {{domxref("TrustedTypePolicyFactory.isHTML","isHTML()")}}, and {{domxref("TrustedTypePolicyFactory.isScriptURL","isScriptURL()")}} is to check if the object is a valid TrustedType object, created by a configured policy.

## Syntax

```js-nolint
isScript(value)
```

### Parameters

- `value`
  - : A {{domxref("TrustedScript")}} object.

### Return value

A {{jsxref("boolean")}} that is true if the object is a valid {{domxref("TrustedScript")}} object.

## Examples

In the below example the constant `url` was created by a policy, and therefore `isScriptURL()` returns true. The second example is an attempt to fake an object, and the third is a string. Both of these will return false when passed to `isScriptURL()`.

```js
const myScript = policy.createScript("eval('2 + 2')");
console.log(trustedTypes.isScript(myScript)); // true;

const fake = Object.create(TrustedScript.prototype);
console.log(trustedTypes.isScript(fake)); // false

console.log(trustedTypes.isScript("eval('2 + 2')")); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
