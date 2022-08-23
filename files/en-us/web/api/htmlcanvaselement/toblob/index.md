---
title: HTMLCanvasElement.toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - HTMLCanvasElement
  - Method
  - Reference
browser-compat: api.HTMLCanvasElement.toBlob
---
{{APIRef("Canvas API")}}

The **`HTMLCanvasElement.toBlob()`** method creates a {{domxref("Blob")}} object representing the image contained in the canvas.
This file may be cached on the disk or stored in memory at the discretion of the user agent.

The desired file format and image quality may be specified.
If the file format is not specified, or if the given format is not supported, then the data will be exported as `image/png`.
Browsers are required to support `image/png`; many will support additional formats including `image/jpeg` and `image/webp`.

The created image will have a resolution of 96dpi for file formats that support encoding resolution metadata.

## Syntax

```js
toBlob(callback)
toBlob(callback, type)
toBlob(callback, type, quality)
```

### Parameters

- `callback`
  - : A callback function with the resulting {{domxref("Blob")}} object as a single argument.
    `null` may be passed if the image cannot be created for any reason.
- `type` {{optional_inline}}
  - : A string indicating the image format.
    The default type is `image/png`; that type is also used if the given type isn't supported.
- `quality` {{optional_inline}}
  - : A {{jsxref("Number")}} between `0` and `1` indicating the image quality to be used when creating images using file formats that support lossy compression (such as `image/jpeg` or `image/webp`).
    A user agent will use its default quality value if this option is not specified, or if the number is outside the allowed range.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `SecurityError`
  - : The canvas's bitmap is not origin-clean; at least some of its contents have or may have been loaded from a site other than the one from which the document itself was loaded.

## Examples

### Getting a file representing the canvas

Once you have drawn content into a canvas, you can convert it into a file of any supported image format.
The code snippet below, for example, takes the image in the {{HTMLElement("canvas")}} element whose ID is "canvas", obtains a copy of it as a PNG image, then appends a new {{HTMLElement("img")}} element to the document, whose source image is the one created using the canvas.

```js
const canvas = document.getElementById('canvas');

canvas.toBlob((blob) => {
  const newImg = document.createElement('img');
  const url = URL.createObjectURL(blob);

  newImg.onload = () => {
    // no longer need to read the blob so it's revoked
    URL.revokeObjectURL(url);
  };

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

Note that here we're creating a PNG image; if you add a second parameter to the `toBlob()` call, you can specify another image type supported by the user agent.
For example, to get the image in JPEG format:

```js
canvas.toBlob((blob) => { /* … */ }, 'image/jpeg', 0.95); // JPEG at 95% quality
```

### Convert a canvas to an ico (Mozilla only)

This uses `-moz-parse` to convert the canvas to ico, and hence only works on Firefox.
Windows XP doesn't support converting from PNG to ico, so it uses bmp instead.
A download link is created by setting the download attribute. The value of the download attribute is the name it will use as the file name.

```js
const canvas = document.getElementById('canvas');
const d = canvas.width;
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = 'yellow';
ctx.fill();

function blobCallback(iconName) {
  return (b) => {
    const a = document.createElement('a');
    a.textContent = 'Download';
    document.body.appendChild(a);
    a.style.display = 'block';
    a.download = `${iconName}.ico`;
    a.href = window.URL.createObjectURL(b);
  }
}
canvas.toBlob(blobCallback('passThisString'), 'image/vnd.microsoft.icon',
              '-moz-parse-options:format=bmp;bpp=32');
```

### Save toBlob to disk with OS.File (Chrome/add-on context only)

> **Note:** This technique saves it to the desktop and is only useful in Firefox chrome context or add-on code, as OS APIs are not present on web sites.

```js
const canvas = document.getElementById('canvas');
const d = canvas.width;
ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = 'yellow';
ctx.fill();

function blobCallback(iconName) {
  return (b) => {
    const r = new FileReader();
    r.onloadend = () => {
    // r.result contains the ArrayBuffer.
    Cu.import('resource://gre/modules/osfile.jsm');
    const writePath = OS.Path.join(OS.Constants.Path.desktopDir,
                                 `${iconName}.ico`);
    const promise = OS.File.writeAtomic(writePath, new Uint8Array(r.result),
                                      {tmpPath:`${writePath}.tmp`});
    promise.then(
      () => {
        console.log('successfully wrote file');
      },
      () => {
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

- {{domxref("Blob")}}
