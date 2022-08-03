---
title: CanvasRenderingContext2D.imageSmoothingEnabled
slug: Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
page-type: web-api-instance-property
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
browser-compat: api.CanvasRenderingContext2D.imageSmoothingEnabled
---
{{APIRef}}

The **`imageSmoothingEnabled`** property of the
{{domxref("CanvasRenderingContext2D")}} interface, part of the [Canvas API](/en-US/docs/Web/API/Canvas_API), determines whether scaled images
are smoothed (`true`, default) or not (`false`). On getting the
`imageSmoothingEnabled` property, the last value it was set to is returned.

This property is useful for games and other apps that use pixel art. When enlarging
images, the default resizing algorithm will blur the pixels. Set this property to
`false` to retain the pixels' sharpness.

> **Note:** You can adjust the smoothing quality with the
> {{domxref("CanvasRenderingContext2D.imageSmoothingQuality", "imageSmoothingQuality")}}
> property.

## Value

A boolean value indicating whether to smooth scaled images or not. The default value is `true`.

## Examples

### Disabling image smoothing

This example compares three images. The first image is drawn at its natural size, the
second is scaled to 3X and drawn with image smoothing enabled, and the third is scaled
to 3X but drawn with image smoothing disabled.

#### HTML

```html
<canvas id="canvas" width="460" height="210"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
ctx.font = '16px sans-serif';
ctx.textAlign = 'center';

const img = new Image();
img.src = 'https://interactive-examples.mdn.mozilla.net/media/examples/star.png';
img.onload = () => {
  const w = img.width,
        h = img.height;

  ctx.fillText('Source', w * .5, 20);
  ctx.drawImage(img, 0, 24, w, h);

  ctx.fillText('Smoothing = TRUE', w * 2.5, 20);
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(img, w, 24, w * 3, h * 3);

  ctx.fillText('Smoothing = FALSE', w * 5.5, 20);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, w * 4, 24, w * 3, h * 3);
};
```

#### Result

{{ EmbedLiveSample('Disabling_image_smoothing', 700, 240) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}}
- {{cssxref("image-rendering")}}
