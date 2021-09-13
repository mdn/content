---
title: CSSUnitValue()
slug: Web/API/CSSUnitValue/CSSUnitValue
tags:
  - API
  - CSS Typed Object Model API
  - CSSUnitValue
  - Constructor
  - Experimental
  - Houdini
  - Reference
browser-compat: api.CSSUnitValue.CSSUnitValue
---
{{draft}}{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`CSSUnitValue()`** constructor creates a
new {{domxref("CSSUnitValue")}} object which returns a new {{domxref('CSSUnitValue')}}
object which represents values that contain a single unit type. For example, "42px"
would be represented by a `CSSNumericValue`.

## Syntax

```js
var CSSUnitValue = new CSSUnitValue()
```

### Parameters

- value
  - : Returns a double indicating the number of units.
- unit
  - : Returns a {{jsxref('USVString')}} indicating the type of unit.

## Examples

The following shows a method of creating a {{domxref('CSSPositionValue')}} from
individual `CSSUnitValue` constructors.

    let pos = new CSSPositionValue(
        new CSSUnitValue(5, "px"),
        new CSSUnitValue(10, "px"));

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('CSSUnitValue.unit')}}
- {{domxref('CSSUnitValue.value')}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
