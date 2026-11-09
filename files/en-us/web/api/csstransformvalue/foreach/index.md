---
title: "CSSTransformValue: forEach() method"
short-title: forEach()
slug: Web/API/CSSTransformValue/forEach
page-type: web-api-instance-method
browser-compat: api.CSSTransformValue.forEach
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`forEach()`** method of the {{domxref("CSSTransformValue")}} interface executes a provided function once for each item in the object.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : The function to execute for each element, taking three arguments:
    - `currentValue`
      - : The item being processed.
    - `index` {{optional_inline}}
      - : The index of the current element being processed.
    - `array` {{optional_inline}}
      - : The `CSSTransformValue` that `forEach()` is being called on.
- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `callbackFn`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Iterating with forEach()

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

transform.forEach((component, index) => {
  console.log(index, component.toString());
});
// 0 "translate(10px, 20px)"
// 1 "scale(2, 3)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}}
- {{domxref("CSSTransformValue.entries()")}}
- {{domxref("CSSTransformValue.keys()")}}
- {{domxref("CSSTransformValue.length")}}
- {{domxref("CSSTransformValue.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
