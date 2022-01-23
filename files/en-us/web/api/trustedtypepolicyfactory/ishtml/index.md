---
title: TrustedTypePolicyFactory.isHTML()
slug: Web/API/TrustedTypePolicyFactory/isHTML
tags:
  - API
  - Method
  - Reference
  - isHTML
  - TrustedTypePolicyFactory
browser-compat: api.TrustedTypePolicyFactory.isHTML
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`isHTML()`** method of the {{domxref("TrustedTypePolicyFactory")}} interface returns true if it is passed a valid {{domxref("TrustedHTML")}} object.

> **Note:** The purpose of the functions `isHTML()`, {{domxref("TrustedTypePolicyFactory.isScript","isScript()")}}, and {{domxref("TrustedTypePolicyFactory.isScriptURL","isScriptURL()")}} is to check if the object is a valid TrustedType object, created by a configured policy.

## Syntax

```js
var isHTML = TrustedTypePolicyFactory.isHTML(value);
```

### Parameters

- `value`
  - : A {{domxref("TrustedHTML")}} object.

### Return value

A {{jsxref("boolean")}} that is true if the object is a valid {{domxref("TrustedHTML")}} object.

## Examples

In the below example the constant `html` was created by a policy, and therefore `isHTML()` returns true. The second example is an attempt to fake an object, and the third is a string. Both of these will return false when passed to `isHTML()`.

```js
const html = policy.createHTML('<div>');
console.log(trustedTypes.isHTML(html)) // true;

const fake = Object.create(TrustedHTML.prototype);
console.log(trustedTypes.isHTML(fake)); // false

console.log(trustedTypes.isHTML("<div>plain string</div>")); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
