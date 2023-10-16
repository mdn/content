---
title: "StylePropertyMapReadOnly: size property"
short-title: size
slug: Web/API/StylePropertyMapReadOnly/size
page-type: web-api-instance-property
browser-compat: api.StylePropertyMapReadOnly.size
---

{{APIRef("CSS Typed Object Model API")}}

The **`size`** read-only property of the
{{domxref("StylePropertyMapReadOnly")}} interface returns an unsigned long integer
containing the size of the `StylePropertyMapReadOnly` object.

## Value

An unsigned long integer.

## Examples

Here we use the size property to return the total entries within the button elements
{{domxref('Element.computedStyleMap()','computedStyleMap')}}.

```js
// grab our element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// use size to get the total styles within the map
const amountStyles = allComputedStyles.size;
console.log(amountStyles); // logs 338
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
