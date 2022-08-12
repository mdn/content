---
title: Path2D()
slug: Web/API/Path2D/Path2D
page-type: web-api-constructor
tags:
  - API
  - Canvas
  - Constructor
  - Drawing
  - Graphics
  - Path2D
  - Paths
  - Reference
browser-compat: api.Path2D.Path2D
---
{{APIRef("Canvas API")}}

The **`Path2D()`** constructor returns a newly instantiated
`Path2D` object, optionally with another path as an argument (creates a
copy), or optionally with a string consisting of [SVG path](/en-US/docs/Web/SVG/Tutorial/Paths) data.

## Syntax

```js
new Path2D()
new Path2D(path)
new Path2D(d)
```

### Parameters

- `path` {{optional_inline}}
  - : When invoked with another `Path2D` object, a copy of the
    `path` argument is created.
- `d` {{optional_inline}}
  - : When invoked with a string consisting of [SVG path](/en-US/docs/Web/SVG/Tutorial/Paths) data, a new path is created
    from that description.

## Examples

### Creating and copying paths

This example creates and copies a `Path2D` path.

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let path1 = new Path2D();
path1.rect(10, 10, 100,100);

let path2 = new Path2D(path1);
path2.moveTo(220, 60);
path2.arc(170, 60, 50, 0, 2 * Math.PI);

ctx.stroke(path2);
```

{{ EmbedLiveSample('Creating_and_copying_paths', 700, 180) }}

### Using SVG paths

This example creates a `Path2D` path using [SVG path data](/en-US/docs/Web/SVG/Tutorial/Paths). The path will move to
point (`M10 10`) and then move horizontally 80 points to the right
(`h 80`), then 80 points down (`v 80`), then 80 points to the left
(`h -80`), and then back to the start (`Z`).

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let p = new Path2D('M10 10 h 80 v 80 h -80 Z');
ctx.fill(p);
```

{{ EmbedLiveSample('Using_SVG_paths', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Path2D")}}, the interface this constructor belongs to
