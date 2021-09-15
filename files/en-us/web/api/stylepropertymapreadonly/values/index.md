---
title: StylePropertyMapReadOnly.values()
slug: Web/API/StylePropertyMapReadOnly/values
tags:
  - API
  - CSS Typed Object Model API
  - Experimental
  - Houdini
  - Method
  - Reference
  - StylePropertyMapReadOnly
  - values()
browser-compat: api.StylePropertyMapReadOnly.values
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`StylePropertyMapReadOnly.values()`** method returns a
new _array iterator_ containing the values for each index in the
`StylePropertyMapReadOnly` object.

## Syntax

```js
StylePropertyMapReadOnly.values()
```

### Parameters

None.

### Return value

A new {{jsxref("Array")}}.

## Example

In this example we use the `values()` method to be able to access the values
within our [`Element.computedStyleMap()`](/en-US/docs/Web/API/Element/computedStyleMap).

```js
// get a button element
const buttonEl = document.querySelector('button');

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// values returns an iterable list of the css values
const vals = allComputedStyles.values();
console.log(vals.next().value); // returns a CSSStyleValue
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
