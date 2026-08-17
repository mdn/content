---
title: "CSSTransformValue: length property"
short-title: length
slug: Web/API/CSSTransformValue/length
page-type: web-api-instance-property
browser-compat: api.CSSTransformValue.length
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`length`** read-only property of the {{domxref("CSSTransformValue")}} interface returns the number of items in the object.

## Value

An integer.

## Examples

### Basic usage

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

console.log(transform.length); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}}
- {{domxref("CSSTransformValue.entries()")}}
- {{domxref("CSSTransformValue.forEach()")}}
- {{domxref("CSSTransformValue.keys()")}}
- {{domxref("CSSTransformValue.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
