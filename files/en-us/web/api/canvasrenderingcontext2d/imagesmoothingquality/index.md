---
title: CanvasRenderingContext2D.imageSmoothingQuality
slug: Web/API/CanvasRenderingContext2D/imageSmoothingQuality
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Experimental
  - Property
  - Reference
  - imageSmoothingQuality
browser-compat: api.CanvasRenderingContext2D.imageSmoothingQuality
---
{{APIRef}} {{SeeCompatTable}}

The **`imageSmoothingQuality`** property of the
{{domxref("CanvasRenderingContext2D")}} interface, part of the [Canvas API](/en-US/docs/Web/API/Canvas_API), lets you set the quality of
image smoothing.

> **Note:** For this property to have an effect,
> {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}
> must be `true`.

## Syntax

```js
ctx.imageSmoothingQuality = "low" || "medium" || "high"
```

### Options

Possible values:

- `"low"`
  - : Low quality.
- `"medium"`
  - : Medium quality.
- `"high"`
  - : High quality.

## Example

### Setting image smoothing quality

This example uses the `imageSmoothingQuality` property with a scaled image.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
img.src = 'canvas_createpattern.png';
img.onload = function() {
  ctx.imageSmoothingQuality = 'low';
  ctx.drawImage(img, 0, 0, 300, 150);
};
```

#### Result

{{ EmbedLiveSample('Setting_image_smoothing_quality', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
- {{cssxref("image-rendering")}}
