---
title: "CanvasRenderingContext2D: beginPath() method"
short-title: beginPath()
slug: Web/API/CanvasRenderingContext2D/beginPath
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.beginPath
---

{{APIRef}}

The
**`CanvasRenderingContext2D.beginPath()`**
method of the Canvas 2D API starts a new path by emptying the list of sub-paths. Call
this method when you want to create a new path.

> **Note:** To create a new sub-path, i.e., one matching the current
> canvas state, you can use {{domxref("CanvasRenderingContext2D.moveTo()")}}.

## Syntax

```js-nolint
beginPath()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Creating distinct paths

This example creates two paths, each of which contains a single line.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The `beginPath()` method is called before beginning each line, so that they
may be drawn with different colors.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// First path
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// Second path
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Creating_distinct_paths', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.closePath()")}}
