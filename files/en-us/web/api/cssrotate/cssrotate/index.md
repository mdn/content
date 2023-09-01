---
title: "CSSRotate: CSSRotate() constructor"
short-title: CSSRotate()
slug: Web/API/CSSRotate/CSSRotate
page-type: web-api-constructor
browser-compat: api.CSSRotate.CSSRotate
---

{{APIRef("CSS Typed OM")}}

The **`CSSRotate()`** constructor creates a new
{{domxref("CSSRotate")}} object representing the [rotate()](/en-US/docs/Web/CSS/transform-function/rotate) value of the
individual {{CSSXref('transform')}} property in CSS.

## Syntax

```js-nolint
new CSSRotate(x, y, z, angle)
```

### Parameters

- {{domxref('CSSRotate.x','x')}}
  - : A value for the x-axis of the {{domxref('CSSRotate')}} object to be constructed.
    This must either be a double integer or a {{domxref('CSSNumericValue')}}.
- {{domxref('CSSRotate.y','y')}}
  - : A value for the y-axis of the {{domxref('CSSRotate')}} object to be constructed.
    This must either be a double integer or a {{domxref('CSSNumericValue')}}.
- {{domxref('CSSRotate.z','z')}}
  - : A value for the z-axis of the {{domxref('CSSRotate')}} object to be constructed.
    This must either be a double integer or a {{domxref('CSSNumericValue')}}.
- {{domxref('CSSRotate.angle','angle')}}
  - : A value for the angle of the {{domxref('CSSRotate')}} object to be constructed. This
    must be a {{domxref('CSSNumericValue')}}.

### Exceptions

- [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Raised if the value of `CSSRotate.angle` is not an [\<angle>](/en-US/docs/Web/CSS/angle) value
    or `CSSRotate.x`, `CSSRotate.y`, `CSSRotate.z` are
    not [\<number>](/en-US/docs/Web/CSS/number) values.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
