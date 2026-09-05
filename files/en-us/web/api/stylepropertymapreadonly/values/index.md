---
title: "StylePropertyMapReadOnly: values() method"
short-title: values()
slug: Web/API/StylePropertyMapReadOnly/values
page-type: web-api-instance-method
browser-compat: api.StylePropertyMapReadOnly.values
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`values()`** method of the {{domxref("StylePropertyMapReadOnly")}} interface returns a new iterator that yields the values of each declaration in the object.

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A new [iterable iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
Each item yielded is an array of {{domxref("CSSStyleValue")}} objects, as returned by {{domxref("StylePropertyMapReadOnly.getAll", "getAll()")}} for that property.

## Examples

### Basic usage

In this example, we use the `values()` method to access the values within the [`Element.computedStyleMap()`](/en-US/docs/Web/API/Element/computedStyleMap).

```js
// get a button element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// values returns an iterator of CSSStyleValue arrays, one per declaration
const vals = allComputedStyles.values();
console.log(vals.next().value); // returns an array of CSSStyleValue objects
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
- {{domxref("StylePropertyMapReadOnly.size")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
