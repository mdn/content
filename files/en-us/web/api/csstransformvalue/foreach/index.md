---
title: "cssTransformValue: forEach() method"
short-title: forEach()
slug: Web/API/CSSTransformValue/forEach
page-type: web-api-instance-method
browser-compat: api.CSSTransformValue.forEach
---

{{APIRef("CSS Typed OM")}}

The **`CSSTransformValue.forEach()`** method executes a provided function once for each element of the `CSSTransformValue`.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
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
