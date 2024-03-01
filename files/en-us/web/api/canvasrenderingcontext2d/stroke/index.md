---
title: "CanvasRenderingContext2D: stroke() method"
short-title: stroke()
slug: Web/API/CanvasRenderingContext2D/stroke
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.stroke
---

{{APIRef}}

The
**`CanvasRenderingContext2D.stroke()`**
method of the Canvas 2D API strokes (outlines) the current or given path with the
current stroke style.

Strokes are aligned to the center of a path; in other words, half of the stroke is
drawn on the inner side, and half on the outer side.

The stroke is drawn using the [non-zero winding rule](https://en.wikipedia.org/wiki/Nonzero-rule), which
means that path intersections will still get filled.

## Syntax

```js-nolint
stroke()
stroke(path)
```

### Parameters

- `path`
  - : A {{domxref("Path2D")}} path to stroke.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### A simple stroked rectangle

This example creates a rectangle using the `rect()` method, and then draws
it to the canvas using `stroke()`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.rect(10, 10, 150, 100);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('A_simple_stroked_rectangle', 700, 180) }}

### Re-stroking paths

Typically, you'll want to call {{domxref("CanvasRenderingContext2D.beginPath()", "beginPath()")}} for each new thing you want to stroke. If you don't, the previous
sub-paths will remain part of the current path, and get stroked every time you call the
`stroke()` method. In some cases, however, this may be the desired effect.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

This code strokes the first path three times, the second path two times, and the third
path only once.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// First sub-path
ctx.lineWidth = 26;
ctx.strokeStyle = "orange";
ctx.moveTo(20, 20);
ctx.lineTo(160, 20);
ctx.stroke();

// Second sub-path
ctx.lineWidth = 14;
ctx.strokeStyle = "green";
ctx.moveTo(20, 80);
ctx.lineTo(220, 80);
ctx.stroke();

// Third sub-path
ctx.lineWidth = 4;
ctx.strokeStyle = "pink";
ctx.moveTo(20, 140);
ctx.lineTo(280, 140);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Re-stroking_paths', 700, 180) }}

### Stroking and filling

If you want to both stroke and fill a path, the order in which you perform these
actions will determine the result. In this example, the square on the left is drawn with
the stroke on top of the fill. The square on the right is drawn with the fill on top of
the stroke.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 16;
ctx.strokeStyle = "red";

// Stroke on top of fill
ctx.beginPath();
ctx.rect(25, 25, 100, 100);
ctx.fill();
ctx.stroke();

// Fill on top of stroke
ctx.beginPath();
ctx.rect(175, 25, 100, 100);
ctx.stroke();
ctx.fill();
```

#### Result

{{ EmbedLiveSample('Stroking_and_filling', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
