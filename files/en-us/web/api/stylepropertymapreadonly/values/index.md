---
title: "StylePropertyMapReadOnly: values() method"
short-title: values()
slug: Web/API/StylePropertyMapReadOnly/values
page-type: web-api-instance-method
browser-compat: api.StylePropertyMapReadOnly.values
---

{{APIRef("CSS Typed Object Model API")}}

The **`StylePropertyMapReadOnly.values()`** method returns a
new _array iterator_ containing the values for each index in the
`StylePropertyMapReadOnly` object.

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A new {{jsxref("Array")}}.

## Examples

In this example we use the `values()` method to be able to access the values
within our [`Element.computedStyleMap()`](/en-US/docs/Web/API/Element/computedStyleMap).

```js
// get a button element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// values returns an iterable list of the CSS values
const vals = allComputedStyles.values();
console.log(vals.next().value); // returns a CSSStyleValue
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
