---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
page-type: web-api-interface
browser-compat: api.CSSTransformComponent
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSTransformComponent`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) is the base interface for objects that represent individual {{cssxref("transform-function", "transform functions")}}, such as [`rotate()`](/en-US/docs/Web/CSS/Reference/Values/transform-function/rotate) and [`scale()`](/en-US/docs/Web/CSS/Reference/Values/transform-function/scale).

## Instance properties

- {{domxref("CSSTransformComponent.is2D")}}
  - : A boolean that represents whether the transform is 2D or 3D.

## Instance methods

- {{domxref("CSSTransformComponent.toMatrix()")}}
  - : Returns a new {{domxref("DOMMatrix")}} object.
- {{domxref("CSSTransformComponent.toString()")}}
  - : A string in the form of a CSS [transform function](/en-US/docs/Web/CSS/Reference/Values/transform-function).

## Interfaces based on `CSSTransformComponent`

- {{domxref("CSSTranslate")}}
- {{domxref("CSSRotate")}}
- {{domxref("CSSScale")}}
- {{domxref("CSSSkew")}}
- {{domxref("CSSSkewX")}}
- {{domxref("CSSSkewY")}}
- {{domxref("CSSPerspective")}}
- {{domxref("CSSMatrixComponent")}}

## Description

The `CSSTransformComponent` interface is the abstract base interface for objects that represent a single {{cssxref("transform-function")}} in the `transform-list` of values as used by the CSS {{cssxref("transform")}} property.

A `CSSTransformComponent` in isolation can't represent a CSS property value.
Instead, the {{domxref("CSSTransformValue")}} interface represents the `transform-list` itself, and can be iterated to get each of the values in the transform.

The [concrete interfaces representing each transform function](#interfaces_based_on_csstransformcomponent) are listed in the previous section (the interface has no constructor of its own, so it can't be instantiated directly).

The interface has an `is2D` property for determining whether a component is a 2D or 3D transform.
This is used to format the output, ignoring 3D attributes when a component represents a 2D transform.
This allows a single interface to represent both the 2D and 3D forms of a given transform function.

## Examples

### Basic usage

This example shows how you might construct a {{domxref("CSSTranslate")}} instance (one of the `CSSTransformComponent`-derived types) and read its matrix and string forms.

```js
const translate = new CSSTranslate(CSS.px(10), CSS.px(20));

console.log(translate.is2D); // true
console.log(translate.toString()); // "translate(10px, 20px)"

const matrix = translate.toMatrix();
console.log(matrix.e, matrix.f); // 10 20
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSTransformValue")}}
- {{domxref("DOMMatrix")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
