---
title: CSSUnitValue.unit
slug: Web/API/CSSUnitValue/unit
page-type: web-api-instance-property
tags:
  - API
  - CSS Typed Object Model API
  - CSSUnitValue
  - Experimental
  - Houdini
  - Property
  - Reference
  - unit
browser-compat: api.CSSUnitValue.unit
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`CSSUnitValue.unit`** read-only property
of the {{domxref("CSSUnitValue")}} interface returns a string
indicating the type of unit.

## Value

A string.

## Examples

The following creates a {{domxref('CSSPositionValue')}} from individual
`CSSUnitValue` constructors, then queries the
`CSSUnitValue.unit`.

```js
const pos = new CSSPositionValue(
  new CSSUnitValue(5, "px"),
  new CSSUnitValue(10, "em"),
);

console.log(pos.x.unit); // "px"
console.log(pos.y.unit); // "em"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('CSSUnitValue.value')}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
