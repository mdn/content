---
title: "CSSUnitValue: value property"
short-title: value
slug: Web/API/CSSUnitValue/value
page-type: web-api-instance-property
browser-compat: api.CSSUnitValue.value
---

{{APIRef("CSS Typed Object Model API")}}

The **`CSSUnitValue.value`** property of the
{{domxref("CSSUnitValue")}} interface returns a double indicating the number of units.

## Value

A double.

## Examples

The following creates a {{domxref('CSSPositionValue')}} from individual
`CSSUnitValue` constructors, then queries the
`CSSUnitValue.value`.

```js
const pos = new CSSPositionValue(
  new CSSUnitValue(5, "px"),
  new CSSUnitValue(10, "px"),
);

console.log(pos.x.value); // 5
console.log(pos.y.value); // 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('CSSUnitValue.unit')}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
