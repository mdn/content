---
title: "DOMTokenList: toString() method"
short-title: toString()
slug: Web/API/DOMTokenList/toString
page-type: web-api-instance-method
browser-compat: api.DOMTokenList.toString
---

{{APIRef("DOM")}}

The **`toString()`** {{Glossary("stringifier")}} method of the {{domxref("DOMTokenList")}} interface returns the values of the token list serialized as a string. The return value is a space-separated list of tokens equal to the {{domxref("DOMTokenList.value")}} property.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string.

## Examples

```js
const element = document.createElement("div");
const classes = element.classList;

element.className = "shop empty-cart";
classes.add("logged-in", "dark-mode");

console.log(classes.toString());
// "shop empty-cart logged-in dark-mode"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.classList")}}
- {{domxref("DOMTokenList.add()")}}
