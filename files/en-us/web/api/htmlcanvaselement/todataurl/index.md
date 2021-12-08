---
title: HTMLCanvasElement.toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
tags:
  - API
  - Canvas
  - HTMLCanvasElement
  - Method
  - Reference
browser-compat: api.HTMLCanvasElement.toDataURL
---
{{APIRef("Canvas API")}}

The **`HTMLCanvasElement.toDataURL()`** method returns a [data URI](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) containing a representation of the image in the format specified by the `type` parameter (defaults to [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)).
The returned image is in a resolution of 96 dpi.

- If the height or width of the canvas is `0` or larger than the [maximum canvas size](/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size), the string `"data:,"` is returned.
- If the requested type is not `image/png`, but the returned value starts with `data:image/png`, then the requested type is not supported.
- Chrome also supports the `image/webp` type.

## Syntax

```js
canvas.toDataURL(type, encoderOptions);
```

### Parameters

- `type` {{optional_inline}}
  - : A {{domxref("DOMString")}} indicating the image format. The default format type is `image/png`.
- `encoderOptions` {{optional_inline}}
  - : A {{jsxref("Number")}} between `0` and `1` indicating the image quality to use for image formats that use lossy compression such as `image/jpeg` and `image/webp`.
    If this argument is anything else, the default value for image quality is used.
    The default value is `0.92`. Other arguments are ignored.

### Return value

A {{domxref("DOMString")}} containing the requested [data URI](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs).

### Exceptions

- `SecurityError`
  - : The canvas's bitmap is not origin clean;
    at least some of its contents have or may have been loaded from a site other than the one from which the document itself was loaded.

## Examples

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

You can get a data-URL of the canvas with the following lines:

```js
var canvas = document.getElementById('canvas');
var dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### Setting image quality with jpegs

```js
var fullQuality = canvas.toDataURL('image/jpeg', 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...9oADAMBAAIRAxEAPwD/AD/6AP/Z"
var mediumQuality = canvas.toDataURL('image/jpeg', 0.5);
var lowQuality = canvas.toDataURL('image/jpeg', 0.1);
```

### Example: Dynamically change images

You can use this technique in coordination with mouse events in order to dynamically change images (gray-scale vs. color in this example):

#### HTML

```html
<img class="grayscale" src="myPicture.png" alt="Description of my picture" />
```

#### JavaScript

```js
window.addEventListener('load', removeColors);

function showColorImg() {
  this.style.display = 'none';
  this.nextSibling.style.display = 'inline';
}

function showGrayImg() {
  this.previousSibling.style.display = 'inline';
  this.style.display = 'none';
}

function removeColors() {
  var aImages = document.getElementsByClassName('grayscale'),
      nImgsLen = aImages.length,
      oCanvas = document.createElement('canvas'),
      oCtx = oCanvas.getContext('2d');
  for (var nWidth, nHeight, oImgData, oGrayImg, nPixel, aPix, nPixLen, nImgId = 0; nImgId < nImgsLen; nImgId++) {
    oColorImg = aImages[nImgId];
    nWidth = oColorImg.offsetWidth;
    nHeight = oColorImg.offsetHeight;
    oCanvas.width = nWidth;
    oCanvas.height = nHeight;
    oCtx.drawImage(oColorImg, 0, 0);
    oImgData = oCtx.getImageData(0, 0, nWidth, nHeight);
    aPix = oImgData.data;
    nPixLen = aPix.length;
    for (nPixel = 0; nPixel < nPixLen; nPixel += 4) {
      aPix[nPixel + 2] = aPix[nPixel + 1] = aPix[nPixel] = (aPix[nPixel] + aPix[nPixel + 1] + aPix[nPixel + 2]) / 3;
    }
    oCtx.putImageData(oImgData, 0, 0);
    oGrayImg = new Image();
    oGrayImg.src = oCanvas.toDataURL();
    oGrayImg.onmouseover = showColorImg;
    oColorImg.onmouseout = showGrayImg;
    oCtx.clearRect(0, 0, nWidth, nHeight);
    oColorImg.style.display = "none";
    oColorImg.parentNode.insertBefore(oGrayImg, oColorImg);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
- [Data URIs](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) in the [HTTP](/en-US/docs/Web/HTTP) reference.
