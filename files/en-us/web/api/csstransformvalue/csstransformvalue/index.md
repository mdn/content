---
title: "CSSTransformValue: CSSTransformValue() constructor"
short-title: CSSTransformValue()
slug: Web/API/CSSTransformValue/CSSTransformValue
page-type: web-api-constructor
browser-compat: api.CSSTransformValue.CSSTransformValue
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSTransformValue()`** constructor creates a new {{domxref("CSSTransformValue")}} object, representing a `transform-list` value made up of the given {{domxref("CSSTransformComponent")}} objects.

## Syntax

```js-nolint
new CSSTransformValue(transforms)
```

### Parameters

- `transforms`
  - : An array of {{domxref("CSSTransformComponent")}} objects.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `transforms` is empty.

## Examples

### Basic usage

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

console.log(transform.length); // 2
console.log(transform.toString()); // "translate(10px, 20px) scale(2, 3)"
```

### Handling an empty array

The constructor throws a `TypeError` if `transforms` is empty:

```js
try {
  const transform = new CSSTransformValue([]);
} catch (e) {
  console.log(e); // TypeError
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformComponent")}}
- {{domxref("CSSTransformValue.entries()")}}
- {{domxref("CSSTransformValue.forEach()")}}
- {{domxref("CSSTransformValue.is2D")}}
- {{domxref("CSSTransformValue.keys()")}}
- {{domxref("CSSTransformValue.length")}}
- {{domxref("CSSTransformValue.toMatrix()")}}
- {{domxref("CSSTransformValue.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
