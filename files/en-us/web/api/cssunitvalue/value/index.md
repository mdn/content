---
title: CSSUnitValue.value
slug: Web/API/CSSUnitValue/value
tags:
  - API
  - CSS Typed Object Model API
  - CSSUnitValue
  - Experimental
  - Houdini
  - Property
  - Reference
  - value
browser-compat: api.CSSUnitValue.value
---
{{draft}}{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`CSSUnitValue.value`** property of the
{{domxref("CSSUnitValue")}} interface returns a double indicating the number of units.

## Syntax

```js
var cssUnitValue = CSSUnitValue.value;
CSSUnitValue.value = cssUnitValue;
```

### Value

A double.

## Examples

The following creates a {{domxref('CSSPositionValue')}} from individual
`CSSUnitValue` constructors, then queries the
`CSSUnitValue.value`.

```js
let pos = new CSSPositionValue(
    new CSSUnitValue( 5, "px" ),
    new CSSUnitValue( 10, "px" ));

console.log( pos.x.value ); // 5
console.log( pos.y.value ); // 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('CSSUnitValue.unit')}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
