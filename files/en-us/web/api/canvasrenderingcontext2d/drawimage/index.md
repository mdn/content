---
title: CanvasRenderingContext2D.drawImage()
slug: Web/API/CanvasRenderingContext2D/drawImage
page-type: web-api-instance-method
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
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

![drawImage](canvas_drawimage.jpg)

### Parameters

- `image`
  - : An element to draw into the context. The specification permits any canvas image
    source, specifically,
    an {{domxref("HTMLImageElement")}},
    an {{domxref("SVGImageElement")}},
    an {{domxref("HTMLVideoElement")}},
    an {{domxref("HTMLCanvasElement")}},
    an {{domxref("ImageBitmap")}},
    an {{domxref("OffscreenCanvas")}},
    or a {{domxref("VideoFrame")}}.
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
    A negative value will flip the image.
- `sHeight` {{optional_inline}}
  - : The height of the sub-rectangle of the source `image` to draw into the
    destination context. Use the 3- or 5-argument syntax to omit this argument.
    A negative value will flip the image.
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

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown when the image has no image data or if the canvas or source rectangle width or height is zero.
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Thrown when a `null` or `undefined` image is passed as parameter.

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

image.addEventListener('load', (e) => {
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

## Notes

- `drawImage()` only works correctly on an {{domxref("HTMLVideoElement")}}
  when its {{domxref("HTMLMediaElement.readyState")}} is greater than 1 (i.e.,
  **seek** event fired after setting the `currentTime`
  property).
- `drawImage()` will always use the source element's _intrinsic size in
  CSS pixels_ when drawing, cropping, and/or scaling.
- In some older browser versions, `drawImage()` will ignore all EXIF
  metadata in images, including the Orientation. This behavior is especially troublesome
  on iOS devices. You should detect the Orientation yourself and use
  `rotate()` to make it right.

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
