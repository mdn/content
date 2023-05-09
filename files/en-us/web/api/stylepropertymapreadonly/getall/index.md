---
title: "StylePropertyMapReadOnly: getAll() method"
short-title: getAll()
slug: Web/API/StylePropertyMapReadOnly/getAll
page-type: web-api-instance-method
browser-compat: api.StylePropertyMapReadOnly.getAll
---

{{APIRef("CSS Typed Object Model API")}}

The **`getAll()`** method of the
{{domxref("StylePropertyMapReadOnly")}} interface returns an array of
{{domxref("CSSStyleValue")}} objects containing the values for the provided property.

## Syntax

```js-nolint
getAll(property)
```

### Parameters

- `property`
  - : The name of the property to retrieve all values of.

### Return value

An array of {{domxref("CSSStyleValue")}} objects.

## Examples

The following example uses `getAll()` with the
{{cssxref('background-image')}} property. An {{jsxref('Array')}} is returned which
contains an item for each background image declared.

```js
// get a button element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// use getAll() with the background image property
const allBkImages = allComputedStyles.getAll("background-image");
console.log(allBkImages); // logs an array with each background image as an item
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
