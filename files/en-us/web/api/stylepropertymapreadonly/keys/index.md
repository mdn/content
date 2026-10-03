---
title: "StylePropertyMapReadOnly: keys() method"
short-title: keys()
slug: Web/API/StylePropertyMapReadOnly/keys
page-type: web-api-instance-method
browser-compat: api.StylePropertyMapReadOnly.keys
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`keys()`** method of the {{domxref("StylePropertyMapReadOnly")}} interface returns a new iterator that yields the CSS property name of each declaration in the object.

## Syntax

```js-nolint
keys()
```

### Parameters

None.

### Return value

A new [iterable iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

## Examples

### Basic usage

In this example, we use the `keys()` method to access the properties within the {{domxref('Element.computedStyleMap()')}}.

```js
// get a button element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// keys returns an iterator of property names
const props = allComputedStyles.keys();
console.log(props.next().value); // returns align-content
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
- {{domxref("StylePropertyMapReadOnly.size")}}
- {{domxref("StylePropertyMapReadOnly.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
