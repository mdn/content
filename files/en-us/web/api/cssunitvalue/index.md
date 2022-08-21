---
title: CSSUnitValue
slug: Web/API/CSSUnitValue
page-type: web-api-interface
tags:
  - API
  - CSS Typed Object Model API
  - CSSUnitValue
  - Experimental
  - Houdini
  - Interface
  - Reference
browser-compat: api.CSSUnitValue
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`CSSUnitValue`** interface of the {{domxref('CSS_Object_Model#css_typed_object_model','','',' ')}} represents values that contain a single unit type. For example, "42px" would be represented by a `CSSNumericValue`.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}}
  - : Creates a new `CSSUnitValue` object.

## Properties

- {{domxref('CSSUnitValue.value')}}
  - : Returns a double indicating the number of units.
- {{domxref('CSSUnitValue.unit')}}
  - : Returns a string indicating the type of unit.

### Event handlers

None.

## Methods

None.

## Examples

The following shows a method of creating a {{domxref('CSSPositionValue')}} from individual `CSSUnitValue` constructors.

```js
let pos = new CSSPositionValue(
    new CSSUnitValue(5, "px"),
    new CSSUnitValue(10, "px"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
