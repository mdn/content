---
title: CSSVariableReferenceValue
slug: Web/API/CSSVariableReferenceValue
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSVariableReferenceValue
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`CSSVariableReferenceValue`** interface of the {{domxref('CSS_Object_Model#css_typed_object_model','','',' ')}} allows you to create a custom name for a built-in CSS value. This object functionality is sometimes called a "CSS variable" and serves the same purpose as the {{cssxref('var()')}} function. The custom name must begin with two dashes.

## Constructor

- {{domxref("CSSVariableReferenceValue.CSSVariableReferenceValue", "CSSVariableReferenceValue()")}} {{Experimental_Inline}}
  - : Creates a new `CSSVariableReferenceValue` object.

## Instance properties

- {{domxref('CSSVariableReferenceValue.variable')}} {{Experimental_Inline}}
  - : Returns the custom name passed to the constructor.
- {{domxref('CSSVariableReferenceValue.fallback')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the built-in CSS value for the custom name.

## Instance methods

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
