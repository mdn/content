---
title: "SVGTransformList: createSVGTransformFromMatrix() method"
short-title: createSVGTransformFromMatrix()
slug: Web/API/SVGTransformList/createSVGTransformFromMatrix
page-type: web-api-instance-method
browser-compat: api.SVGTransformList.createSVGTransformFromMatrix
---

{{APIRef("SVG")}}

The `createSVGTransformFromMatrix()` method of the {{domxref("SVGTransformList")}} interface creates an {{domxref("SVGTransform")}} object which is initialized to a transform of type `SVG_TRANSFORM_MATRIX` and whose values are the given matrix.

The values from the parameter matrix are copied; the matrix parameter is not adopted as `SVGTransform::matrix`.

## Syntax

```js-nolint
createSVGTransformFromMatrix(matrix)
```

### Parameters

- `matrix`
  - : A {{domxref("DOMMatrix")}} object; the transformation matrix.

### Return value

An {{domxref("SVGTransform")}} object.

## Examples

### Creating a Transformation from a Matrix

```html
<svg width="200" height="200">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// Access the transform list of the <rect> element
const transformList = rectElement.transform.baseVal;

// Create a DOMMatrix object for a rotation transformation
const rotationMatrix = new DOMMatrix();
rotationMatrix.a = Math.cos(Math.PI / 4); // 45-degree rotation
rotationMatrix.b = Math.sin(Math.PI / 4);
rotationMatrix.c = -Math.sin(Math.PI / 4);
rotationMatrix.d = Math.cos(Math.PI / 4);

// Create an SVGTransform object from the matrix
const svgTransform = transformList.createSVGTransformFromMatrix(rotationMatrix);

// Append the new transformation to the transform list
transformList.appendItem(svgTransform);

console.dir(svgTransform); // Output: SVGTransform { type: 1, matrix: SVGMatrix, angle: 0 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform")}}
- {{domxref("DOMMatrix")}}
