---
title: CanvasRenderingContext2D.drawImage()
slug: Web/API/CanvasRenderingContext2D/drawImage
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.drawImage
---
{{APIRef}}

The **`CanvasRenderingContext2D.drawImage()`** method of the
Canvas 2D API provides different ways to draw an image onto the canvas.

## Syntax

```js
void ctx.drawImage(image, dx, dy);
void ctx.drawImage(image, dx, dy, dWidth, dHeight);
void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

![drawImage](canvas_drawimage.jpg)

### Parameters

- `image`
  - : An element to draw into the context. The specification permits any canvas image
    source ({{domxref("CanvasImageSource")}}), specifically, a
    {{domxref("CSSImageValue")}}, an {{domxref("HTMLImageElement")}}, an
    {{domxref("SVGImageElement")}}, an {{domxref("HTMLVideoElement")}}, an
    {{domxref("HTMLCanvasElement")}}, an {{domxref("ImageBitmap")}}, or an
    {{domxref("OffscreenCanvas")}}.
- `sx` {{optional_inline}}
  - : The x-axis coordinate of the top left corner of the sub-rectangle of the source
    `image` to draw into the destination context. Use the 3- or 5-argument syntax
    to omit this argument.
- `sy` {{optional_inline}}
  - : The y-axis coordinate of the top left corner of the sub-rectangle of the source
    `image` to draw into the destination context. Use the 3- or 5-argument syntax
    to omit this argument.
- `sWidth` {{optional_inline}}
  - : The width of the sub-rectangle of the source `image` to draw into the
    destination context. If not specified, the entire rectangle from the coordinates
    specified by `sx` and `sy` to the bottom-right corner of the
    image is used. Use the 3- or 5-argument syntax to omit this argument.
- `sHeight` {{optional_inline}}
  - : The height of the sub-rectangle of the source `image` to draw into the
    destination context. Use the 3- or 5-argument syntax to omit this argument.
- `dx`
  - : The x-axis coordinate in the destination canvas at which to place the top-left
    corner of the source `image`.
- `dy`
  - : The y-axis coordinate in the destination canvas at which to place the top-left
    corner of the source `image`.
- `dWidth`
  - : The width to draw the `image` in the destination canvas. This allows
    scaling of the drawn image. If not specified, the image is not scaled in width when
    drawn. Note that this argument is not included in the 3-argument syntax.
- `dHeight`
  - : The height to draw the `image` in the destination canvas. This allows
    scaling of the drawn image. If not specified, the image is not scaled in height when
    drawn. Note that this argument is not included in the 3-argument syntax.

### Exceptions thrown

- `INDEX_SIZE_ERR`
  - : If the canvas or source rectangle width or height is zero.
- `INVALID_STATE_ERR`
  - : The image has no image data.
- `TYPE_MISMATCH_ERR`
  - : The specified source element isn't supported.
- `NS_ERROR_NOT_AVAILABLE`
  - : The image is not loaded yet. Use `.complete === true` and
    `.onload` to determine when it is ready.

## Examples

### Drawing an image to the canvas

This example draws an image to the canvas using the `drawImage()` method.

#### HTML

```html
<canvas id="canvas"></canvas>
<div style="display:none;">
  <img id="source"
       src="rhino.jpg"
       width="300" height="227">
</div>
```

#### JavaScript

The source image is taken from the coordinates (33, 71), with a width of 104 and a
height of 124. It is drawn to the canvas at (21, 20), where it is given a width of 87
and a height of 104.

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('source');

image.addEventListener('load', e => {
  ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
});
```

#### Result

{{ EmbedLiveSample('Drawing_an_image_to_the_canvas', 700, 180) }}

### Understanding source element size

The `drawImage()` method uses the source element's _intrinsic size in CSS
pixels_ when drawing.

For example, if you load an `Image` and specify the optional size parameters
in its [constructor](/en-US/docs/Web/API/HTMLImageElement/Image), you will
have to use the `naturalWidth` and `naturalHeight` properties of
the created instance to properly calculate things like crop and scale regions, rather
than `element.width` and `element.height`. The same goes for
`videoWidth` and `videoHeight` if the element is a
{{htmlelement("video")}} element, and so on.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image(60, 45); // Using optional size for image
image.onload = drawImageActualSize; // Draw when image has loaded

// Load an image of intrinsic size 300x227 in CSS pixels
image.src = 'rhino.jpg';

function drawImageActualSize() {
  // Use the intrinsic size of image in CSS pixels for the canvas element
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // Will draw the image as 300x227, ignoring the custom size of 60x45
  // given in the constructor
  ctx.drawImage(this, 0, 0);

  // To use the custom size we'll have to specify the scale parameters
  // using the element's width and height properties - lets draw one
  // on top in the corner:
  ctx.drawImage(this, 0, 0, this.width, this.height);
}
```

#### Result

{{EmbedLiveSample('Understanding_source_element_size', 700, 260)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Gecko-specific notes

- Support for flipping the image by using negative values for `sw` and
  `sh` was added in Gecko 5.0 {{geckoRelease("5.0")}}.
- Starting with {{geckoRelease("5.0")}}, `drawImage()` handles negative
  arguments in accordance with the specification, by flipping the rectangle around the
  appropriate axis.
- Specifying a `null` or `undefined` image when calling or
  `drawImage()` correctly throws a `TYPE_MISMATCH_ERR` exception
  starting with {{geckoRelease("5.0")}}.
- Prior to Gecko 7.0 {{ geckoRelease("7.0") }}, Firefox threw an exception if any of
  the coordinate values was non-finite or zero. As per the specification, this no longer
  happens.
- Gecko 9.0 {{ geckoRelease("9.0") }} now correctly supports CORS for drawing images
  across domains without [tainting the
  canvas](/en-US/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- Gecko 11.0 {{ geckoRelease("11.0") }} now allows SVG-as-an-image to be drawn into a
  canvas without [tainting the
  canvas](/en-US/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).

## Notes

- `drawImage()` only works correctly on an {{domxref("HTMLVideoElement")}}
  when its {{domxref("HTMLMediaElement.readyState")}} is greater than 1 (i.e.,
  **seek** event fired after setting the `currentTime`
  property).
- `drawImage()` will always use the source element's _intrinsic size in
  CSS pixels_ when drawing, cropping, and/or scaling.
- In some older browser versions, `drawImage()` will ignore all EXIF
  metadata in images, including the Orientation. This behavior is especially troublesome
  on iOS devices. You should detect the Orientation yourself and use
  `rotate()` to make it right.

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
