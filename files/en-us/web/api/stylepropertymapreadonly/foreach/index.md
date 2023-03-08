---
title: StylePropertyMapReadOnly.forEach()
slug: Web/API/StylePropertyMapReadOnly/forEach
page-type: web-api-instance-method
browser-compat: api.StylePropertyMapReadOnly.forEach
---

{{APIRef("CSS Typed Object Model API")}}

The **`StylePropertyMapReadOnly.forEach()`** method executes a
provided function once for each element of {{domxref('StylePropertyMapReadOnly')}}.

## Syntax

```js-nolint
// Arrow function
forEach((currentValue) => { /* … */ } )
forEach((currentValue, index) => { /* … */ } )
forEach((currentValue, index, array) => { /* … */ } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function (currentValue) { /* … */ })
forEach(function (currentValue, index) { /* … */ })
forEach(function (currentValue, index, array) { /* … */ })
forEach(function (currentValue, index, array) { /* … */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : The function to execute for each element, taking three arguments:

    - `currentValue`
      - : The value of the current element being processed.
    - `index` {{optional_inline}}
      - : The index of the current element being processed.
    - `array` {{optional_inline}}
      - : The StylePropertyMapReadOnly that `forEach()` is being called on.

- `thisArg` {{Optional_inline}}
  - : Value to use as **`this`** (i.e., the reference
    `Object`) when executing `callback`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Here is an example of using `forEach()` on a retrieved
{{domxref('Element.computedStyleMap()')}}.

```js
// get a button element
const buttonEl = document.querySelector(".example");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// forEach will allow us to run code over each prop/val pair
allComputedStyles.forEach((elem, index, arr) => {
  // code to run for each pair
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
