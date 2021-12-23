---
title: HTMLCanvasElement.mozGetAsFile()
slug: Web/API/HTMLCanvasElement/mozGetAsFile
tags:
  - API
  - Canvas
  - Firefox
  - HTMLCanvasElement
  - Method
  - Mozilla
  - Non-standard
  - Reference
  - mozGetAsFile
  - Deprecated
browser-compat: api.HTMLCanvasElement.mozGetAsFile
---
{{APIRef("Canvas API")}} {{Deprecated_Header}} {{non-standard_header}}

The non-standard, Firefox-specific the {{domxref("HTMLCanvasElement")}} method
{{domxref("HTMLCanvasElement.mozGetAsFile", "mozGetAsFile()")}} returns a memory-based
{{domxref("File")}} object representing the image contained in the canvas.

## Syntax

```js
canvas.mozGetAsFile(name, type);
```

### Parameters

- `name`
  - : A {{domxref("DOMString")}} indicating the file name to give the file representing
    the image file in memory.
- `type` {{optional_inline}}
  - : A {{domxref("DOMString")}} which specifies the image file format to use when
    creating the new image file. The default type is `image/png`. For other
    options, see our [Image file type
    and format guide](/en-US/docs/Web/Media/Formats/Image_types).

### Return value

A {{domxref("File")}} object representing the image contained in the canvas. The file's
data is entirely located in memory until such time as it is explicitly written to disk.

## Examples

This example creates an image file from the {{HTMLElement("canvas")}} element on the
page, then uses a {{domxref("FileReader")}} to read the image data from the file.

### HTML

```html
<canvas id="canvas" width="100" height="100"></canvas>
<p><a href="#" id="link">Click here to try out mozGetAsFile()</a>.</p>
```

### JavaScript

The following code uses `mozGetAsFile()` to create a {{domxref("File")}}
object from the canvas and appends it as an image to the page by loading it as a data
URL using the {{domxref("FileReader.readAsDataURL", "readAsDataURL()")}} method. Then
a new {{HTMLElement("img")}} element is created using the new data URL.

```js
function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(10, 10, 55, 50);

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 55, 50);

  var link = document.getElementById('link');
  link.addEventListener('click', copy);
}

function copy() {
  var canvas = document.getElementById('canvas');
  var f = canvas.mozGetAsFile('test.png');
  var reader = new FileReader();
  reader.readAsDataURL(f);

  reader.onloadend = function() {
   var newImg = document.createElement('img');
   newImg.src = reader.result;
   document.body.appendChild(newImg);
  }
}

window.addEventListener('load', draw);
```

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}
