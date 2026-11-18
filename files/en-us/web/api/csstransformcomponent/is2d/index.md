---
title: "CSSTransformComponent: is2D property"
short-title: is2D
slug: Web/API/CSSTransformComponent/is2D
page-type: web-api-instance-property
browser-compat: api.CSSTransformComponent.is2D
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`is2D`** property of the {{domxref("CSSTransformComponent")}} interface represents whether the transform is 2D or 3D.

## Value

A boolean.
`true` if the transform is a 2D transform, `false` if it is a 3D transform.

## Description

The property can be both read and written, and is used in other methods to determine the form of the output.

For example, if the component represents {{domxref("CSSRotate")}} and `is2D` is `false`, then the string returned by {{domxref("CSSTransformComponent.toString()")}} will be in the form of the CSS transformation {{cssxref("transform-function/rotate3d", "rotate3d()")}} function.
If the value is `true`, the string returned will be in the form of the 2-dimensional {{cssxref("transform-function/rotate", "rotate()")}} function.

More generally, when `is2D` is `true`, any attributes of the component that are only relevant to 3D transforms (such as {{domxref("CSSTranslate.z")}}) are ignored, and have no effect on the component's serialization ({{domxref("CSSTransformComponent.toString()")}}) or its {{domxref("CSSTransformComponent.toMatrix()", "matrix")}}.

## Examples

### Reading and setting is2D

```js
const translate = new CSSTranslate(CSS.px(10), CSS.px(20), CSS.px(30));

console.log(translate.is2D); // false
console.log(translate.toString()); // "translate3d(10px, 20px, 30px)"

translate.is2D = true;

console.log(translate.toString()); // "translate(10px, 20px)"
console.log(translate.z.toString()); // "30px" — z is still set, just ignored
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformComponent.toString()")}}
- {{domxref("CSSTransformComponent.toMatrix()")}}
- {{domxref("CSSTransformValue.is2D")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
