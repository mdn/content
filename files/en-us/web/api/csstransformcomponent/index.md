---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
page-type: web-api-interface
browser-compat: api.CSSTransformComponent
---

{{APIRef("CSS Typed OM")}}

The **`CSSTransformComponent`** interface of the {{domxref('CSS_Object_Model#css_typed_object_model','','',' ')}} is part of the {{domxref('CSSTransformValue')}} interface.

## Instance properties

- {{domxref("CSSTransformComponent.is2D")}} {{ReadOnlyInline}}
  - : Returns a boolean indicting whether the transform is 2D or 3D.

## Instance methods

- {{domxref("CSSTransformComponent.toMatrix()")}}
  - : Returns a new {{domxref('DOMMatrix')}} object.
- {{domxref("CSSTransformComponent.toString()")}}

  - : A string in the form of a CSS {{cssxref("transform-function","Transforms function")}}.

    This will use the value of `is2D` to return either a 2D or 3D transform. For example if the component represents {{domxref("CSSRotate")}} and `is2D` is false then the string returned will be in the form of the CSS transformation [`rotate3D()`](/en-US/docs/Web/CSS/transform-function/rotate3d) function. If true the string returned will be in the form of the 2-dimensional [`rotate3D()`](/en-US/docs/Web/CSS/transform-function/rotate) function.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
