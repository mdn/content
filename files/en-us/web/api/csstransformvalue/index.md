---
title: CSSTransformValue
slug: Web/API/CSSTransformValue
page-type: web-api-interface
browser-compat: api.CSSTransformValue
---

{{APIRef("CSS Typed OM")}}

The **`CSSTransformValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents `transform-list` values as used by the CSS {{CSSxref('transform')}} property.

{{InheritanceDiagram}}

## Interfaces based on CSSTransformValue

Below is a list of interfaces based on the `CSSTransformValue` interface.

- {{domxref('CSSTranslate')}}
- {{domxref('CSSRotate')}}
- {{domxref('CSSScale')}}
- {{domxref('CSSSkew')}}
- {{domxref('CSSSkewX')}}
- {{domxref('CSSSkewY')}}
- {{domxref('CSSPerspective')}}
- {{domxref('CSSMatrixComponent')}}

## Constructor

- {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}}
  - : Creates a new `CSSTransformValue` object.

## Instance properties

- {{domxref("CSSTransformValue.length")}} {{ReadOnlyInline}}
  - : Returns how many transform components are contained within the `CSSTransformValue`.
- {{domxref("CSSTransformValue.is2D")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the transform is 2D or 3D.

## Instance methods

_Inherits methods from its ancestor {{domxref('CSSStyleValue')}}._

- {{domxref("CSSTransformValue.toMatrix()")}}
  - : Returns a new {{domxref('DOMMatrix')}} object.
- {{domxref('CSSTransformValue.entries()')}}
  - : Returns an array of a given object's own enumerable property `[key, value]` pairs in the same order as that provided by a {{jsxref("Statements/for...in", "for...in")}} loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
- {{domxref('CSSTransformValue.forEach()')}}
  - : Executes a provided function once for each element of the `CSSTransformValue` object.
- {{domxref('CSSTransformValue.keys()')}}
  - : Returns a new _array iterator_ object that contains the keys for each index in the `CSSTransformValue` object.
- {{domxref('CSSTransformValue.values()')}}
  - : Returns a new _array iterator_ object that contains the values for each index in the `CSSTransformValue` object.

## Examples

To Do.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
