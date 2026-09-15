---
title: "StylePropertyMapReadOnly: forEach() method"
short-title: forEach()
slug: Web/API/StylePropertyMapReadOnly/forEach
page-type: web-api-instance-method
browser-compat: api.StylePropertyMapReadOnly.forEach
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`forEach()`** method of the {{domxref("StylePropertyMapReadOnly")}} interface executes a provided function once for each declaration in the object.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : The function to execute for each declaration, taking three arguments:
    - `currentValue`
      - : The value of the current declaration being processed — an array of {{domxref("CSSStyleValue")}} objects, as returned by {{domxref("StylePropertyMapReadOnly.getAll", "getAll()")}} for that property.
    - `key` {{optional_inline}}
      - : The CSS property name of the current declaration being processed.
    - `map` {{optional_inline}}
      - : The `StylePropertyMapReadOnly` that `forEach()` is being called on.
- `thisArg` {{optional_inline}}
  - : Value to use as **`this`** when executing `callbackFn`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Basic usage

The following code is an example of using `forEach()` on a retrieved {{domxref('Element.computedStyleMap()')}}.

```js
// get a button element
const buttonEl = document.querySelector(".example");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// forEach will allow us to run code over each property/values pair
allComputedStyles.forEach((values, property, map) => {
  // code to run for each declaration
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("StylePropertyMapReadOnly.entries()")}}
- {{domxref("StylePropertyMapReadOnly.get()")}}
- {{domxref("StylePropertyMapReadOnly.getAll()")}}
- {{domxref("StylePropertyMapReadOnly.has()")}}
- {{domxref("StylePropertyMapReadOnly.keys()")}}
- {{domxref("StylePropertyMapReadOnly.size")}}
- {{domxref("StylePropertyMapReadOnly.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
