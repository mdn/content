---
title: HTMLCanvasElement.toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
tags:
  - API
  - Canvas
  - HTMLCanvasElement
  - Method
  - Reference
browser-compat: api.HTMLCanvasElement.toBlob
---
{{APIRef("Canvas API")}}

The **`HTMLCanvasElement.toBlob()`** method creates a
{{domxref("Blob")}} object representing the image contained in the canvas; this file may
be cached on the disk or stored in memory at the discretion of the user agent.

The created image is in a resolution of 96dpi.

## Syntax

```js
canvas.toBlob(callback, type, quality);
```

### Parameters

- `callback`
  - : A callback function with the resulting {{domxref("Blob")}} object as a single
    argument.
- `type` {{optional_inline}}
  - : A {{domxref("DOMString")}} indicating the image format. The default type is
    `image/png`; that type is also used if the given type isn't supported.
- `quality` {{optional_inline}}

  - : A {{jsxref("Number")}} between `0` and `1`, indicating image
    quality if the requested type is `image/jpeg` or `image/webp`.
    If this argument is anything else, the default values 0.92 and 0.80 are used for
    image/jpeg and image/webp respectively. Other arguments are ignored.

    This argument is used when creating images using lossy compression (such as `image/jpeg`), to specify the quality of the output.

### Return value

None.

### Exceptions

- `SecurityError`
  - : The canvas's bitmap is not origin clean; at least some of its contents come from
    secure

## Examples

### Getting a file representing the canvas

Once you have drawn content into a canvas, you can convert it into a file of any
supported image format. The code snippet below, for example, takes the image in the
{{HTMLElement("canvas")}} element whose ID is "canvas", obtains a copy of it as a PNG
image, then appends a new {{HTMLElement("img")}} element to the document, whose source
image is the one created using the canvas.

```js
var canvas = document.getElementById('canvas');

canvas.toBlob(function(blob) {
  var newImg = document.createElement('img'),
      url = URL.createObjectURL(blob);

  newImg.onload = function() {
    // no longer need to read the blob so it's revoked
    URL.revokeObjectURL(url);
  };

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

Note that here we're creating a PNG image; if you add a second parameter to the
`toBlob()` call, you can specify the image type. For example, to get the
image in JPEG format:

```js
 canvas.toBlob(function(blob){...}, 'image/jpeg', 0.95); // JPEG at 95% quality
```

### A way to convert a canvas to an ico (Mozilla only)

This uses `-moz-parse` to convert the canvas to ico. Windows XP doesn't
support converting from PNG to ico, so it uses bmp instead. A download link is created
by setting the download attribute. The value of the download attribute is the name it
will use as the file name.

```js
var canvas = document.getElementById('canvas');
var d = canvas.width;
ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = 'yellow';
ctx.fill();

function blobCallback(iconName) {
  return function(b) {
    var a = document.createElement('a');
    a.textContent = 'Download';
    document.body.appendChild(a);
    a.style.display = 'block';
    a.download = iconName + '.ico';
    a.href = window.URL.createObjectURL(b);
  }
}
canvas.toBlob(blobCallback('passThisString'), 'image/vnd.microsoft.icon',
              '-moz-parse-options:format=bmp;bpp=32');
```

### Save toBlob to disk with OS.File (chrome/add-on context only)

> **Note:** This technique saves it to the desktop and is only useful in Firefox chrome context
> or add-on code, as OS APIs are not present on web sites.

```js
var canvas = document.getElementById('canvas');
var d = canvas.width;
ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = 'yellow';
ctx.fill();

function blobCallback(iconName) {
  return function(b) {
    var r = new FileReader();
    r.onloadend = function () {
    // r.result contains the ArrayBuffer.
    Cu.import('resource://gre/modules/osfile.jsm');
    var writePath = OS.Path.join(OS.Constants.Path.desktopDir,
                                 iconName + '.ico');
    var promise = OS.File.writeAtomic(writePath, new Uint8Array(r.result),
                                      {tmpPath:writePath + '.tmp'});
    promise.then(
      function() {
        console.log('successfully wrote file');
      },
      function() {
        console.log('failure writing file')
      }
    );
  };
  r.readAsArrayBuffer(b);
  }
}

canvas.toBlob(blobCallback('passThisString'), 'image/vnd.microsoft.icon',
              '-moz-parse-options:format=bmp;bpp=32');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
- {{domxref("Blob")}}
