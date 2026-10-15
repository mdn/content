---
title: "CSSTransformComponent: toString() method"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
page-type: web-api-instance-method
browser-compat: api.CSSTransformComponent.toString
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`toString()`** method of the {{domxref("CSSTransformComponent")}} interface is a {{Glossary("stringifier")}} returning a [CSS Transforms](/en-US/docs/Web/CSS/Guides/Transforms) function.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string in the form of a CSS [transform function](/en-US/docs/Web/CSS/Reference/Values/transform-function).

This will use the value of `is2D` to return either a 2D or 3D transform.
For example, if the component represents {{domxref("CSSRotate")}} and `is2D` is false, then the string returned will be in the form of the CSS transformation {{cssxref("transform-function/rotate3d", "rotate3d()")}} function.
If true the string returned will be in the form of the 2-dimensional {{cssxref("transform-function/rotate", "rotate()")}} function.

## Examples

### Serializing 2D and 3D components

```js
const translate2D = new CSSTranslate(CSS.px(10), CSS.px(20));
console.log(translate2D.toString()); // "translate(10px, 20px)"

const translate3D = new CSSTranslate(CSS.px(10), CSS.px(20), CSS.px(30));
console.log(translate3D.toString()); // "translate3d(10px, 20px, 30px)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformComponent.is2D")}}
- {{domxref("CSSTransformComponent.toMatrix()")}}
- {{domxref("CSSTransformValue")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
