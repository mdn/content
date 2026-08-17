---
title: CSSUnitValue
slug: Web/API/CSSUnitValue
page-type: web-api-interface
browser-compat: api.CSSUnitValue
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSUnitValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) represents values that contain a single [unit type](/en-US/docs/Web/CSS/Guides/Values_and_units#units).

For example, the value `42px` (a {{cssxref("&lt;dimension&gt;")}}) would be represented by a `CSSNumericValue`.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}}
  - : Creates a new `CSSUnitValue` object.

## Instance properties

- {{domxref('CSSUnitValue.value')}}
  - : A number representing the number of units.
    For a `CSSNumericValue` representing `42px`, this would be `42`.
- {{domxref('CSSUnitValue.unit')}} {{ReadOnlyInline}}
  - : Returns a string indicating the type of unit. For a `CSSNumericValue` representing `42px`, this would be `"px"`.

## Static methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSNumericValue")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSNumericValue")}}._

## Examples

### Basic usage

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

- [CSS numeric data types](/en-US/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- [CSS values and units](/en-US/docs/Web/CSS/Guides/Values_and_units), a listing of all possible units and data types
