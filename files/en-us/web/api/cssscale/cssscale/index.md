---
title: CSSScale()
slug: Web/API/CSSScale/CSSScale
tags:
  - API
  - CSS Typed Object Model API
  - CSSScale
  - CSSTransformComponent
  - CSSTransformValue
  - Constructor
  - Experimental
  - Houdini
browser-compat: api.CSSScale.CSSScale
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}{{draft}}

The **`CSSScale()`** constructor creates a new
{{domxref("CSSScale")}} object representing the [scale()](</en-US/docs/Web/CSS/transform-function/scale()>) and [scale3d()](</en-US/docs/Web/CSS/transform-function/scale()>) values of the
individual {{CSSXref('transform')}} property in CSS.

## Syntax

```js
var CSSScale = new CSSScale(x,y[,z]);
```

### Parameters

- {{domxref('CSSScale.x','x')}}
  - : A value for the x-axis of the {{domxref('CSSScale')}} object to be constructed. This
    must either be a double integer or a {{domxref('CSSNumericValue')}}.
- {{domxref('CSSScale.y','y')}}
  - : A value for the y-axis of the {{domxref('CSSScale')}} object to be constructed. This
    must either be a double integer or a {{domxref('CSSNumericValue')}}.
- {{domxref('CSSScale.z','z')}}{{optional_inline}}
  - : A value for the z-axis of the {{domxref('CSSScale')}} object to be constructed. This
    must either be a double integer or a {{domxref('CSSNumericValue')}}. If a value is
    passed for the `z-axis` this is a 3d transform. The value of
    `is2D` will be set to false.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
