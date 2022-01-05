---
title: cssTransformValue.forEach()
slug: Web/API/CSSTransformValue/forEach
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

The **`CSSTransformValue.forEach()`** method executes a provided function once for each element of the `CSSTransformValue`.

## Syntax

```js
CSSUnparsedValue.forEach(function callback(currentValue[, index[, array]]) {
    // your iterator
}[, thisArg]);
```

### Parameters

- `callback`

  - : The function to execute for each element, taking three arguments:

    - `currentValue`
      - : The value of the current element being processed.
    - `index`{{optional_inline}}
      - : The index of the current element being processed.
    - `array`{{optional_inline}}
      - : The `CSSTransformValue` that `forEach()` is being called on.

- `thisArg` {{Optional_inline}}
  - : Value to use as **`this`** (i.e the reference `Object`) when executing `callback`.

### Return value

{{jsxref("undefined")}}.

## Examples

To Do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
