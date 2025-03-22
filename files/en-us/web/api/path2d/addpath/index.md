---
title: "Path2D: addPath() method"
short-title: addPath()
slug: Web/API/Path2D/addPath
page-type: web-api-instance-method
browser-compat: api.Path2D.addPath
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`Path2D.addPath()`** method
of the Canvas 2D API adds one {{domxref("Path2D")}} object to another
`Path2D` object.

## Syntax

```js-nolint
addPath(path)
addPath(path, transform)
```

### Parameters

- `path`
  - : A {{domxref("Path2D")}} path to add.
- `transform` {{optional_inline}}
  - : A {{domxref("DOMMatrix")}} to be used as the transformation matrix for the path that
    is added. (Technically an object that possesses the same properties as a `DOMMatrix` object.)

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Adding a path to an existing path

This example adds one path to another.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

First, we create two separate {{domxref("Path2D")}} objects, each of which contains a
rectangle made using the {{domxref("CanvasRenderingContext2D.rect()", "rect()")}}
method. We then create a matrix using {{Domxref("DOMMatrix.DOMMatrix", "DOMMatrix()")}}. We then add the second path to the first using
`addPath()`, also applying the matrix to move the second path to the right.
Finally, we draw the first path (which now contains both rectangles) using
{{domxref("CanvasRenderingContext2D.fill()", "fill()")}}.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create first path and add a rectangle
let p1 = new Path2D();
p1.rect(0, 0, 100, 150);

// Create second path and add a rectangle
let p2 = new Path2D();
p2.rect(0, 0, 100, 75);

// Create transformation matrix that moves 200 points to the right
let m = new DOMMatrix();
m.a = 1;
m.b = 0;
m.c = 0;
m.d = 1;
m.e = 200;
m.f = 0;

// Add second path to the first path
p1.addPath(p2, m);

// Draw the first path
ctx.fill(p1);
```

#### Result

{{ EmbedLiveSample('Adding_a_path_to_an_existing_path', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("Path2D")}}
