---
title: "StylePropertyMapReadOnly: size property"
short-title: size
slug: Web/API/StylePropertyMapReadOnly/size
page-type: web-api-instance-property
browser-compat: api.StylePropertyMapReadOnly.size
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`size`** read-only property of the {{domxref("StylePropertyMapReadOnly")}} interface returns a non-negative integer containing the number of declarations in the `StylePropertyMapReadOnly` object.

## Value

A non-negative integer.

## Examples

### Basic usage

Here we use the size property to return the total entries within the button elements {{domxref('Element.computedStyleMap()','computedStyleMap')}}.

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

## See also

- {{domxref("StylePropertyMapReadOnly.entries()")}}
- {{domxref("StylePropertyMapReadOnly.forEach()")}}
- {{domxref("StylePropertyMapReadOnly.get()")}}
- {{domxref("StylePropertyMapReadOnly.getAll()")}}
- {{domxref("StylePropertyMapReadOnly.has()")}}
- {{domxref("StylePropertyMapReadOnly.keys()")}}
- {{domxref("StylePropertyMapReadOnly.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
