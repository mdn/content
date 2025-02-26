---
title: CSSVariableReferenceValue
slug: Web/API/CSSVariableReferenceValue
page-type: web-api-interface
browser-compat: api.CSSVariableReferenceValue
---

{{APIRef("CSSOM")}}

The **`CSSVariableReferenceValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) allows you to create a custom name for a built-in CSS value. This object functionality is sometimes called a "CSS variable" and serves the same purpose as the {{cssxref("var", "var()")}} function. The custom name must begin with two dashes.

## Constructor

- {{domxref("CSSVariableReferenceValue.CSSVariableReferenceValue", "CSSVariableReferenceValue()")}}
  - : Creates a new `CSSVariableReferenceValue` object.

## Instance properties

- {{domxref('CSSVariableReferenceValue.variable')}}
  - : Returns the custom name passed to the constructor.
- {{domxref('CSSVariableReferenceValue.fallback')}} {{ReadOnlyInline}}
  - : Returns the built-in CSS value for the custom name.

## Instance methods

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
