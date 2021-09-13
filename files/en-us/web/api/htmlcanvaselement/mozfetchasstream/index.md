---
title: HTMLCanvasElement.mozFetchAsStream()
slug: Web/API/HTMLCanvasElement/mozFetchAsStream
tags:
  - API
  - Canvas
  - HTMLCanvasElement
  - Method
  - Reference
  - Deprecated
browser-compat: api.HTMLCanvasElement.mozFetchAsStream
---
{{APIRef("Canvas API")}} {{deprecated_header}}

The **`HTMLCanvasElement.mozFetchAsStream()`** internal method
used to create a new input stream that, when ready, would provide the contents of the
canvas as image data. However, this non-standard and internal method has been removed.

## Syntax

```js
void canvas.mozFetchAsStream(callback, type);
```

### Parameters

- `callback`
  - : An {{interface("nsIInputStreamCallback")}}.
- `type` {{optional_inline}}
  - : A {{domxref("DOMString")}} indicating the image format. The default type is
    `image/png`.

### Return value

None.

## Examples

### Save to disk with `mozFetchAsStream` (Chrome context only)

This technique also converts it to ico, however it will not work in Windows XP as
WinXP cannot convert from PNG to ICO. It saves to the desktop it uses
FileUtils.jsm. Also uses NetUtil.jsm

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

var netutilCallback = function() {
    return function(result) {
       if (!Components.isSuccessCode(result)) {
          alert('FAILED to create icon');
       } else {
           alert('successfully made');
       }
    };
}

var mfasCallback = function(iconName) {
    return function(inStream) {
       var file = FileUtils.getFile('Desk', [iconName + '.ico']);
       var outStream = FileUtils.openFileOutputStream(file);
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
