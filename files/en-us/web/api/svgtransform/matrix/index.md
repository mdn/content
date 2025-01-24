---
title: "SVGTransform: matrix property"
short-title: matrix
slug: Web/API/SVGTransform/matrix
page-type: web-api-instance-property
browser-compat: api.SVGTransform.matrix
---

{{APIRef("SVG")}}

The **`matrix`** read-only property of the {{domxref("SVGTransform")}} interface represents the transformation matrix that corresponds to the transformation `type`.

In case the `matrix` object is changed directly (i.e., without using the methods on the `SVGTransform` interface itself) then the `type` of the `SVGTransform` changes to `SVG_TRANSFORM_MATRIX`.

- For `SVG_TRANSFORM_MATRIX`, the matrix contains the a, b, c, d, e, f values supplied by the user.

- For `SVG_TRANSFORM_TRANSLATE`, e and f represent the translation amounts (a=1, b=0, c=0 and d=1).

- For `SVG_TRANSFORM_SCALE`, a and d represent the scale amounts (b=0, c=0, e=0 and f=0).

- For `SVG_TRANSFORM_SKEWX` and `SVG_TRANSFORM_SKEWY`, a, b, c and d represent the matrix which will result in the given skew (e=0 and f=0).

- For `SVG_TRANSFORM_ROTATE`, a, b, c, d, e and f together represent the matrix which will result in the given rotation. When the rotation is around the center point (0, 0), e and f will be zero.

## Value

A live {{domxref("DOMMatrix")}} object.

## Examples

### Accessing and Modifying the Matrix

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="red" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// Create and add a rotation transform
const rotateTransform = rect.ownerSVGElement.createSVGTransform();
rotateTransform.setRotate(30, 100, 100); // Rotate 30 degrees
transformList.appendItem(rotateTransform);

// Access the matrix
const matrix = transformList.getItem(0).matrix;
console.log(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);

// Modify the matrix directly
matrix.a = 2; // Double the horizontal scaling
console.log(transformList.getItem(0).type); // Output: 1 (SVG_TRANSFORM_MATRIX)
```

### Understanding Transformation Types

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="blue" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// Apply a translation transform
const translateTransform = rect.ownerSVGElement.createSVGTransform();
translateTransform.setTranslate(20, 30);
transformList.appendItem(translateTransform);

// Access the matrix
const matrix = transformList.getItem(0).matrix;
console.log(matrix.e, matrix.f); // Output: 20, 30
console.log(transformList.getItem(0).type); // Output: 2 (SVG_TRANSFORM_TRANSLATE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform.type")}}
- {{domxref("DOMMatrix")}}
