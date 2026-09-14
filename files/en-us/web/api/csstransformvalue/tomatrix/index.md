---
title: "CSSTransformValue: toMatrix() method"
short-title: toMatrix()
slug: Web/API/CSSTransformValue/toMatrix
page-type: web-api-instance-method
browser-compat: api.CSSTransformValue.toMatrix
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`toMatrix()`** method of the {{domxref("CSSTransformValue")}} interface returns a {{domxref("DOMMatrix")}} object.

The returned matrix is the product of the matrices of each {{domxref("CSSTransformComponent")}} in the `CSSTransformValue`, computed by calling {{domxref("CSSTransformComponent.toMatrix()")}} on each component in turn and multiplying the results together, in order.

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

### Converting a transform to a matrix

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

const matrix = transform.toMatrix();
console.log(matrix.a, matrix.d); // 2 3
console.log(matrix.e, matrix.f); // 10 20
```

### Handling incompatible units

`toMatrix()` throws if a component's length can't be resolved to pixels, such as a percentage:

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.percent(50), CSS.px(20)),
]);

try {
  transform.toMatrix();
} catch (e) {
  console.log(e); // TypeError
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}}
- {{domxref("CSSTransformComponent.toMatrix()")}}
- {{domxref("CSSTransformValue.is2D")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
