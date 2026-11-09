---
title: "CSSTransformComponent: toMatrix() method"
short-title: toMatrix()
slug: Web/API/CSSTransformComponent/toMatrix
page-type: web-api-instance-method
browser-compat: api.CSSTransformComponent.toMatrix
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`toMatrix()`** method of the {{domxref("CSSTransformComponent")}} interface returns a {{domxref("DOMMatrix")}} object.

All transform functions can be represented mathematically as a 4x4 transformation matrix.

> [!NOTE]
> The `is2D` property affects what transform, and therefore type of matrix that will be returned.
> CSS 2D and 3D transforms are different for legacy reasons.
> A brief explanation of 2D vs. 3D transforms can be found in [Using CSS transforms](/en-US/docs/Web/CSS/Guides/Transforms/Using).

## Syntax

```js-nolint
toMatrix()
```

### Parameters

None.

### Return value

A {{domxref("DOMMatrix")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Raised if any lengths involved in generating the matrix are not compatible units with px (such as relative lengths or percentages).

## Examples

### Converting a component to a matrix

```js
const translate = new CSSTranslate(CSS.px(10), CSS.px(20));

const matrix = translate.toMatrix();
console.log(matrix.e, matrix.f); // 10 20
```

### Handling incompatible units

`toMatrix()` throws if a length can't be resolved to pixels, such as a percentage:

```js
const translate = new CSSTranslate(CSS.percent(50), CSS.px(20));

try {
  translate.toMatrix();
} catch (e) {
  console.log(e); // TypeError
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformComponent.is2D")}}
- {{domxref("CSSTransformComponent.toString()")}}
- {{domxref("CSSTransformValue.toMatrix()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
