---
title: "TrustedTypePolicyFactory: isScriptURL() method"
short-title: isScriptURL()
slug: Web/API/TrustedTypePolicyFactory/isScriptURL
page-type: web-api-instance-method
browser-compat: api.TrustedTypePolicyFactory.isScriptURL
---

{{DefaultAPISidebar("Trusted Types API")}}

The **`isScriptURL()`** method of the {{domxref("TrustedTypePolicyFactory")}} interface returns true if it is passed a valid {{domxref("TrustedScriptURL")}} object.

> **Note:** The purpose of the functions `isScriptURL()`, {{domxref("TrustedTypePolicyFactory.isHTML","isHTML()")}}, and {{domxref("TrustedTypePolicyFactory.isScript","isScript()")}} is to check if the object is a valid TrustedType object, created by a configured policy.

## Syntax

```js-nolint
isScriptURL(value)
```

### Parameters

- `value`
  - : A {{domxref("TrustedScriptURL")}} object.

### Return value

A {{jsxref("boolean")}}that is true if the object is a valid {{domxref("TrustedScriptURL")}} object.

## Examples

In the below example the constant `url` was created by a policy, and therefore `isScriptURL()` returns true. The second example is an attempt to fake an object, and the third is a string. Both of these will return false when passed to `isScriptURL()`.

```js
const url = policy.createScriptURL("https://example.com/myscript.js");
console.log(trustedTypes.isScriptURL(url)); // true;

const fake = Object.create(TrustedScriptURL.prototype);
console.log(trustedTypes.isScriptURL(fake)); // false

console.log(trustedTypes.isScriptURL("https://example.com/myscript.js")); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
