---
title: "StylePropertyMapReadOnly: entries() method"
short-title: entries()
slug: Web/API/StylePropertyMapReadOnly/entries
page-type: web-api-instance-method
browser-compat: api.StylePropertyMapReadOnly.entries
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`entries()`** method of the {{domxref("StylePropertyMapReadOnly")}} interface returns a new iterator that yields `[property, values]` pairs for each declaration in the object.

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

A new [iterable iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
Each item yielded is a two-element array of `[property, values]`, where `property` is a CSS property name and `values` is an array of {{domxref("CSSStyleValue")}} objects, as returned by {{domxref("StylePropertyMapReadOnly.getAll", "getAll()")}} for that property.

## Examples

### Basic usage

The following code shows an example of using the `entries()` method on an element's computed styles.

```js
// grab a DOM element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// entries returns an iterator of [property, values] pairs
const iterableStyles = allComputedStyles.entries();

// returns a two item array: "align-content" as the property, and an array of CSSStyleValue objects as the values
console.log(iterableStyles.next().value);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("StylePropertyMapReadOnly.forEach()")}}
- {{domxref("StylePropertyMapReadOnly.get()")}}
- {{domxref("StylePropertyMapReadOnly.getAll()")}}
- {{domxref("StylePropertyMapReadOnly.has()")}}
- {{domxref("StylePropertyMapReadOnly.keys()")}}
- {{domxref("StylePropertyMapReadOnly.size")}}
- {{domxref("StylePropertyMapReadOnly.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
