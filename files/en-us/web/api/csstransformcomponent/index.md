---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
page-type: web-api-interface
browser-compat: api.CSSTransformComponent
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSTransformComponent`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) is part of the {{domxref('CSSTransformValue')}} interface.

## Instance properties

- {{domxref("CSSTransformComponent.is2D")}}
  - : A boolean that represents whether the transform is 2D or 3D.

## Instance methods

- {{domxref("CSSTransformComponent.toMatrix()")}}
  - : Returns a new {{domxref('DOMMatrix')}} object.
- {{domxref("CSSTransformComponent.toString()")}}
  - : A string in the form of a CSS [transform function](/en-US/docs/Web/CSS/Reference/Values/transform-function).

    This will use the value of `is2D` to return either a 2D or 3D transform. For example if the component represents {{domxref("CSSRotate")}} and `is2D` is false then the string returned will be in the form of the CSS transformation {{cssxref("transform-function/rotate3d", "rotate3d()")}} function. If true the string returned will be in the form of the 2-dimensional {{cssxref("transform-function/rotate", "rotate()")}} function.

## Interfaces based on CSSTransformComponent

- {{domxref('CSSTranslate')}}
- {{domxref('CSSRotate')}}
- {{domxref('CSSScale')}}
- {{domxref('CSSSkew')}}
- {{domxref('CSSSkewX')}}
- {{domxref('CSSSkewY')}}
- {{domxref('CSSPerspective')}}
- {{domxref('CSSMatrixComponent')}}

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
