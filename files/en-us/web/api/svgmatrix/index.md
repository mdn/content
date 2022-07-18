---
title: SVGMatrix
slug: Web/API/SVGMatrix
page-type: web-api-interface
tags:
  - API
  - Deprecated
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGMatrix
---
{{APIRef("SVG")}}{{deprecated_header}}

Many of SVG's graphics operations utilize 2x3 matrices of the form:

```plain
[a c e]
[b d f]
```

which, when expanded into a 3x3 matrix for the purposes of matrix arithmetic, become:

```plain
[a c e]
[b d f]
[0 0 1]
```

An **`SVGMatrix`** object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

**`SVGMatrix`** does not have a public constructor. You can create an **`SVGMatrix`** using the `createSVGMatrix()` method of [`SVGSVGElement`](/en-US/docs/Web/API/SVGSVGElement#methods).

> **Warning:** SVG 2 replaced the `SVGMatrix` interface by the more general {{domxref("DOMMatrix")}} and {{domxref("DOMMatrixReadOnly")}} interfaces.

## Properties

- {{domxref("SVGMatrix.a")}}
  - : A float representing the _a_ component of the matrix.
- {{domxref("SVGMatrix.b")}}
  - : A float representing the _b_ component of the matrix.
- {{domxref("SVGMatrix.c")}}
  - : A float representing the _c_ component of the matrix.
- {{domxref("SVGMatrix.d")}}
  - : A float representing the _d_ component of the matrix.
- {{domxref("SVGMatrix.e")}}
  - : A float representing the _e_ component of the matrix.
- {{domxref("SVGMatrix.f")}}
  - : A float representing the _f_ component of the matrix.

## Methods

- {{domxref("SVGMatrix.multiply()")}}
  - : Performs matrix multiplication. This matrix is post-multiplied by another matrix, returning the resulting new matrix as `SVGMatrix`.
- {{domxref("SVGMatrix.inverse()")}}
  - : Returns the inverse matrix as `SVGMatrix`.
- {{domxref("SVGMatrix.translate()")}}
  - : Post-multiplies a translation transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.
- {{domxref("SVGMatrix.scale()")}}
  - : Post-multiplies a uniform scale transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.
- {{domxref("SVGMatrix.scaleNonUniform()")}}
  - : Post-multiplies a non-uniform scale transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.
- {{domxref("SVGMatrix.rotate()")}}
  - : Post-multiplies a rotation transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.
- {{domxref("SVGMatrix.rotateFromVector()")}}
  - : Post-multiplies a rotation transformation on the current matrix and returns the resulting matrix as `SVGMatrix`. The rotation angle is determined by taking (+/-) atan(y/x). The direction of the vector (x, y) determines whether the positive or negative angle value is used.
- {{domxref("SVGMatrix.flipX()")}}
  - : Post-multiplies the transformation \[-1 0 0 1 0 0] and returns the resulting matrix as `SVGMatrix`.
- {{domxref("SVGMatrix.flipY()")}}
  - : Post-multiplies the transformation \[1 0 0 -1 0 0] and returns the resulting matrix as `SVGMatrix`.
- {{domxref("SVGMatrix.skewX()")}}
  - : Post-multiplies a skewX transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.
- {{domxref("SVGMatrix.skewY()")}}
  - : Post-multiplies a skewY transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.

## Exceptions

A {{domxref("DOMException")}} with the code `NO_MODIFICATION_ALLOWED_ERR` is raised when attempting updating a read-only attribute or when the object itself is read-only.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
