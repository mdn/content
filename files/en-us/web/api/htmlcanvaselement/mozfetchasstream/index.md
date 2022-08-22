---
title: HTMLCanvasElement.mozFetchAsStream()
slug: Web/API/HTMLCanvasElement/mozFetchAsStream
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - HTMLCanvasElement
  - Method
  - Reference
  - Deprecated
  - Non-standard
browser-compat: api.HTMLCanvasElement.mozFetchAsStream
---
{{APIRef("Canvas API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`HTMLCanvasElement.mozFetchAsStream()`** internal method
used to create a new input stream that, when ready, would provide the contents of the
canvas as image data. However, this non-standard and internal method has been removed.

## Syntax

```js
mozFetchAsStream(callback)
mozFetchAsStream(callback, type)
```

### Parameters

- `callback`
  - : An `nsIInputStreamCallback`.
- `type` {{optional_inline}}
  - : A string indicating the image format. The default type is
    `image/png`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Save to disk with `mozFetchAsStream` (Chrome context only)

This technique also converts it to ico, however it will not work in Windows XP as
WinXP cannot convert from PNG to ICO. It saves to the desktop it uses
FileUtils.jsm. Also uses NetUtil.jsm

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

const netutilCallback = () => {
    return (result) => {
       if (!Components.isSuccessCode(result)) {
          alert('FAILED to create icon');
       } else {
           alert('successfully made');
       }
    };
}

const mfasCallback = (iconName) => {
    return (inStream) => {
       const file = FileUtils.getFile('Desk', [`${iconName}.ico`]);
       const outStream = FileUtils.openFileOutputStream(file);
       Cu.import('resource://gre/modules/NetUtil.jsm');
       NetUtil.asyncCopy(inStream, outStream, netutilCallback());
    }
}

canvas.mozFetchAsStream(mfasCallback('myIcon'), 'image/vnd.microsoft.icon');
```

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
