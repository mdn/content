---
title: CSSVariableReferenceValue
slug: Web/API/CSSVariableReferenceValue
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
{{draft}}{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`CSSVariableReferenceValue`** interface of the {{domxref('CSS_Object_Model#css_typed_object_model','','',' ')}} allows you to create a custom name for a built-in CSS value. This object functionality is sometimes called a "CSS variable" and serves the same purpose as the {{cssxref('var()')}} function. The custom name must begin with two dashes.

## Constructor

- {{domxref("CSSVariableReferenceValue.CSSVariableReferenceValue()")}}
  - : Creates a new `CSSVariableReferenceValue` object.

## Properties

- {{domxref('CSSVariableReferenceValue.variable')}}
  - : Returns the custom name passed to the constructor.
- {{domxref('CSSVariableReferenceValue.fallback')}} {{readonlyinline}}
  - : Returns the built-in CSS value for the custom name.

## Methods

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
