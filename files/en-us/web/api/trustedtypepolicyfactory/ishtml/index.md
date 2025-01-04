---
title: "TrustedTypePolicyFactory: isHTML() method"
short-title: isHTML()
slug: Web/API/TrustedTypePolicyFactory/isHTML
page-type: web-api-instance-method
browser-compat: api.TrustedTypePolicyFactory.isHTML
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`isHTML()`** method of the {{domxref("TrustedTypePolicyFactory")}} interface returns true if it is passed a valid {{domxref("TrustedHTML")}} object.

> [!NOTE]
> The purpose of the functions `isHTML()`, {{domxref("TrustedTypePolicyFactory.isScript","isScript()")}}, and {{domxref("TrustedTypePolicyFactory.isScriptURL","isScriptURL()")}} is to check if the object is a valid TrustedType object, created by a configured policy.

## Syntax

```js-nolint
isHTML(value)
```

### Parameters

- `value`
  - : A {{domxref("TrustedHTML")}} object.

### Return value

A {{jsxref("boolean")}} that is true if the object is a valid {{domxref("TrustedHTML")}} object.

## Examples

In the below example the constant `html` was created by a policy, and therefore `isHTML()` returns true. The second example is an attempt to fake an object, and the third is a string. Both of these will return false when passed to `isHTML()`.

```js
const html = policy.createHTML("<div>");
console.log(trustedTypes.isHTML(html)); // true;

const fake = Object.create(TrustedHTML.prototype);
console.log(trustedTypes.isHTML(fake)); // false

console.log(trustedTypes.isHTML("<div>plain string</div>")); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
