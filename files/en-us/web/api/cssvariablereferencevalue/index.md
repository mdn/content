---
title: CSSVariableReferenceValue
slug: Web/API/CSSVariableReferenceValue
page-type: web-api-interface
tags:
  - API
  - CSS Typed Object Model API
  - CSSVariableReferenceValue
  - Experimental
  - Houdini
  - Interface
  - Reference
browser-compat: api.CSSVariableReferenceValue
---
{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`CSSVariableReferenceValue`** interface of the {{domxref('CSS_Object_Model#css_typed_object_model','','',' ')}} allows you to create a custom name for a built-in CSS value. This object functionality is sometimes called a "CSS variable" and serves the same purpose as the {{cssxref('var()')}} function. The custom name must begin with two dashes.

## Constructor

- {{domxref("CSSVariableReferenceValue.CSSVariableReferenceValue", "CSSVariableReferenceValue()")}}
  - : Creates a new `CSSVariableReferenceValue` object.

## Properties

- {{domxref('CSSVariableReferenceValue.variable')}}
  - : Returns the custom name passed to the constructor.
- {{domxref('CSSVariableReferenceValue.fallback')}} {{ReadOnlyInline}}
  - : Returns the built-in CSS value for the custom name.

## Methods

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
