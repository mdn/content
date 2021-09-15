---
title: DOMMatrix()
slug: Web/API/DOMMatrix/DOMMatrix
tags:
  - API
  - Constructor
  - Experimental
  - Geometry
  - Geometry Interfaces
  - Reference
  - matrix
browser-compat: api.DOMMatrix.DOMMatrix
---
{{APIRef("Geometry Interfaces")}}

The **`DOMMatrix`** constructor creates a new
{{domxref("DOMMatrix")}} object which represents 4x4 matrices, suitable for 2D and 3D
operations..

## Syntax

```js
var domMatrix = new DOMMatrix([init])
```

### Parameters

- init {{optional_inline}}
  - : A string containing a sequence of numbers or an array of numbers specifying the
    matrix you want to create, or a CSS transform string.

## Example

This example creates a DOMMatrix to use as an argument for calling
{{domxref("Point.matrixTransform()")}}.

```js
var point = new DOMPoint(5, 4);
var scaleX = 2;
var scaleY = 3;
var translateX = 12;
var translateY = 8;
var angle = Math.PI / 2;
var matrix = new DOMMatrix([
  Math.sin(angle) * scaleX,
  Math.cos(angle) * scaleX,
  -Math.sin(angle) * scaleY,
  Math.cos(angle) * scaleY,
  translateX,
  translateY
]);
var transformedPoint = point.matrixTransform(matrix);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
