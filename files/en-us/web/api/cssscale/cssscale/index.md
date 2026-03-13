---
title: "CSSScale: CSSScale() constructor"
short-title: CSSScale()
slug: Web/API/CSSScale/CSSScale
page-type: web-api-constructor
browser-compat: api.CSSScale.CSSScale
---

{{APIRef("CSS Typed OM")}}

The **`CSSScale()`** constructor creates a new
{{domxref("CSSScale")}} object representing the {{cssxref("transform-function/scale", "scale()")}} and {{cssxref("transform-function/scale3d", "scale3d()")}} values of the
individual {{CSSXref('transform')}} property in CSS.

## Syntax

```js-nolint
new CSSScale(x, y)
new CSSScale(x, y, z)
```

### Parameters

- {{domxref('CSSScale.x','x')}}
  - : A value for the x-axis of the {{domxref('CSSScale')}} object to be constructed. This must either be a number (which is wrapped into a {{domxref("CSSUnitValue")}} of `unit: "number"`) or a {{domxref("CSSNumericValue")}}.
- {{domxref('CSSScale.y','y')}}
  - : A value for the y-axis of the {{domxref('CSSScale')}} object to be constructed. This must either be a number (which is wrapped into a {{domxref("CSSUnitValue")}} of `unit: "number"`) or a {{domxref("CSSNumericValue")}}.
- {{domxref('CSSScale.z','z')}} {{optional_inline}}
  - : A value for the z-axis of the {{domxref('CSSScale')}} object to be constructed. This must either be a number (which is wrapped into a {{domxref("CSSUnitValue")}} of `unit: "number"`) or a {{domxref("CSSNumericValue")}}. If a value is passed, the value of `is2D` will be set to false.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
