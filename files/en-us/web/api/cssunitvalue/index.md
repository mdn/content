---
title: CSSUnitValue
slug: Web/API/CSSUnitValue
page-type: web-api-interface
browser-compat: api.CSSUnitValue
---

{{APIRef("CSS Typed Object Model API")}}

The **`CSSUnitValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model#css_typed_object_model) represents values that contain a single [unit type](/en-US/docs/Web/CSS/Guides/Values_and_units#units).

For example, the (a {{cssxref("&lt;dimension&gt;")}}) `42px` would be represented by a `CSSNumericValue`.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}}
  - : Creates a new `CSSUnitValue` object.

## Instance properties

- {{domxref('CSSUnitValue.value')}}
  - : Returns a double indicating the number of units. For a `CSSNumericValue` representing `42px`, this would be `42`.
- {{domxref('CSSUnitValue.unit')}}
  - : Returns a string indicating the type of unit. For a `CSSNumericValue` representing `42px`, this would be `"px"`.

## Static methods

_The interface may also inherit methods from its parent interface, {{domxref("CSSNumericValue")}}._

## Instance methods

_The interface may also inherit methods from its parent interface, {{domxref("CSSNumericValue")}}._

## Examples

The following shows a method of creating a {{domxref('CSSPositionValue')}} from individual `CSSUnitValue` constructors.

```js
let pos = new CSSPositionValue(
  new CSSUnitValue(5, "px"),
  new CSSUnitValue(10, "px"),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Numeric data types](/en-US/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- [CSS Values and Units](/en-US/docs/Web/CSS/Guides/Values_and_units), a listing of all possible units and data types
