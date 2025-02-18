---
title: "SVGSVGElement: createSVGTransformFromMatrix() method"
short-title: createSVGTransformFromMatrix()
slug: Web/API/SVGSVGElement/createSVGTransformFromMatrix
page-type: web-api-instance-method
browser-compat: api.SVGSVGElement.createSVGTransformFromMatrix
---

{{APIRef("SVG")}}

The `createSVGTransformFromMatrix()` method of the {{domxref("SVGSVGElement")}} interface creates an {{domxref("SVGTransform")}} object outside of any document trees, based on the given {{domxref("DOMMatrix")}} object.

## Syntax

```js-nolint
createSVGTransformFromMatrix(matrix)
```

### Parameters

- `matrix`
  - : A {{domxref("DOMMatrix")}} object representing the initial matrix for the transform.

### Return value

An {{domxref("SVGTransform")}} object, initialized to the given matrix transform. It is a `matrix()` transform if the `matrix` is [2D](/en-US/docs/Web/API/DOMMatrixReadOnly/is2D), and a `matrix3d()` transform otherwise.

## Examples

### Creating a Transform from a Matrix

```html
<svg id="exampleSVG" width="200" height="200">
  <rect id="exampleRect" x="50" y="50" width="100" height="50" fill="blue" />
</svg>
```

```js
const svgElement = document.getElementById("exampleSVG");
const rectElement = document.getElementById("exampleRect");

// Create a new matrix
const matrix = svgElement.createSVGMatrix();
matrix.a = 1; // Scale x
matrix.d = 1; // Scale y
matrix.e = 50; // Translate x
matrix.f = 50; // Translate y

// Create a new SVGTransform from the matrix
const transform = svgElement.createSVGTransformFromMatrix(matrix);

// Apply the transform to the rectangle
rectElement.transform.baseVal.appendItem(transform);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform")}}
- {{domxref("DOMMatrix")}}
