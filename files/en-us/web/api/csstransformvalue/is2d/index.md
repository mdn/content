---
title: "CSSTransformValue: is2D property"
short-title: is2D
slug: Web/API/CSSTransformValue/is2D
page-type: web-api-instance-property
browser-compat: api.CSSTransformValue.is2D
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`is2D`** read-only property of the {{domxref("CSSTransformValue")}} interface returns whether the transform is 2D or 3D.

`is2D` is `true` only if every {{domxref("CSSTransformComponent")}} in the `CSSTransformValue` is itself 2D (see {{domxref("CSSTransformComponent.is2D")}}), otherwise it is `false`.

## Value

A boolean. `true` if every object in the value is 2D, otherwise `false`.

## Examples

### Comparing 2D and 3D transforms

```js
const transform2D = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

console.log(transform2D.is2D); // true

const transform3D = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20), CSS.px(30)),
  new CSSScale(2, 3),
]);

console.log(transform3D.is2D); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}}
- {{domxref("CSSTransformComponent.is2D")}}
- {{domxref("CSSTransformValue.toMatrix()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
