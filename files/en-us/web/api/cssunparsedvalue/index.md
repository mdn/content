---
title: CSSUnparsedValue
slug: Web/API/CSSUnparsedValue
page-type: web-api-interface
browser-compat: api.CSSUnparsedValue
---

{{APIRef("CSS Typed OM")}}

The **`CSSUnparsedValue`** interface of the {{domxref('CSS_Object_Model#css_typed_object_model','','',' ')}} represents property values that reference [custom properties](/en-US/docs/Web/CSS/CSS_cascading_variables). It consists of a list of string fragments and variable references.

Custom properties are represented by `CSSUnparsedValue` and {{cssxref("var", "var()")}} references are represented using {{domxref('CSSVariableReferenceValue')}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
  - : Creates a new `CSSUnparsedValue` object.

## Instance properties

- {{domxref('CSSUnparsedValue.length')}}
  - : Returns the number of items in the `CSSUnparsedValue` object.

## Instance methods

- {{domxref('CSSUnparsedValue.entries()')}}
  - : Returns an array of a given object's own enumerable property `[key, value]` pairs in the same order as that provided by a {{jsxref("Statements/for...in", "for...in")}} loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
- {{domxref('CSSUnparsedValue.forEach()')}}
  - : Executes a provided function once for each element of the `CSSUnparsedValue` object.
- {{domxref('CSSUnparsedValue.keys()')}}
  - : Returns a new _array iterator_ object that contains the keys for each index in the `CSSUnparsedValue` object.
- {{domxref('CSSUnparsedValue.values()')}}
  - : Returns a new _array iterator_ object that contains the values for each index in the `CSSUnparsedValue` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
