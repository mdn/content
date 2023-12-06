---
title: "CSSStyleDeclaration: item() method"
short-title: item()
slug: Web/API/CSSStyleDeclaration/item
page-type: web-api-instance-method
browser-compat: api.CSSStyleDeclaration.item
---

{{ APIRef("CSSOM") }}

The `CSSStyleDeclaration.item()`
method interface returns a CSS property name from a {{domxref('CSSStyleDeclaration')}}
by index.

This method doesn't throw exceptions as long as you provide
arguments; the empty string is returned if the index is out of range and a
{{jsxref("TypeError")}} is thrown if no argument is provided.

## Syntax

```js-nolint
item(index)
```

### Parameters

- `index`
  - : The index of the node to be fetched. The index is zero-based.

### Return value

A string that is the name of the CSS property at the specified index.

JavaScript has a special simpler syntax for obtaining an item from a NodeList by index:

```js
const propertyName = style[index];
```

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if no argument is provided.

## Examples

```js
const style = document.getElementById("div1").style;
const propertyName = style.item(1); // or style[1] - returns the second style listed
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
