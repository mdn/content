---
title: cssTransformValue.forEach()
slug: Web/API/CSSTransformValue/forEach
page-type: web-api-instance-method
tags:
  - API
  - CSS Typed Object Model API
  - CSSTransformValue
  - Experimental
  - Houdini
  - Method
  - Reference
  - forEach
browser-compat: api.CSSTransformValue.forEach
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`CSSTransformValue.forEach()`** method executes a provided function once for each element of the `CSSTransformValue`.

## Syntax

```js
// Arrow function
forEach((currentValue) => { /* … */ } )
forEach((currentValue, index) => { /* … */ } )
forEach((currentValue, index, array) => { /* … */ } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function(currentValue) { /* … */ })
forEach(function(currentValue, index) { /* … */ })
forEach(function(currentValue, index, array) { /* … */ })
forEach(function(currentValue, index, array) { /* … */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : The function to execute for each element, taking three arguments:

    - `currentValue`
      - : The value of the current element being processed.
    - `index` {{optional_inline}}
      - : The index of the current element being processed.
    - `array` {{optional_inline}}
      - : The `CSSTransformValue` that `forEach()` is being called on.

- `thisArg` {{Optional_inline}}
  - : Value to use as **`this`** (i.e., the reference `Object`) when executing `callback`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

To Do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
