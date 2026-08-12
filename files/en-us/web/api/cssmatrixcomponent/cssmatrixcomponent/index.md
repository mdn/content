---
title: "CSSMatrixComponent: CSSMatrixComponent() constructor"
short-title: CSSMatrixComponent()
slug: Web/API/CSSMatrixComponent/CSSMatrixComponent
page-type: web-api-constructor
browser-compat: api.CSSMatrixComponent.CSSMatrixComponent
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSMatrixComponent()`** constructor creates a new {{domxref("CSSMatrixComponent")}} object representing the {{cssxref("transform-function/matrix", "matrix()")}} and {{cssxref("transform-function/matrix3d", "matrix3d()")}} values of the individual {{CSSXRef('transform')}} property in CSS.

## Syntax

```js-nolint
new CSSMatrixComponent(matrix)
new CSSMatrixComponent(matrix, options)
```

### Parameters

- {{domxref('CSSMatrixComponent.matrix','matrix')}}
  - : A 2d or 3d matrix.
- `options` {{optional_inline}}
  - : An object with the following property:
    - `is2D`
      - : A boolean indicating whether the constructed `CSSMatrixComponent` should be treated as a 2D matrix. If omitted, this defaults to the value of `matrix`'s own {{domxref("DOMMatrixReadOnly.is2D", "is2D")}} property.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
