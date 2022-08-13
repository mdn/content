---
title: FontFace.load()
slug: Web/API/FontFace/load
page-type: web-api-instance-method
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Method
  - Reference
  - load
browser-compat: api.FontFace.load
---
{{APIRef("CSS Font Loading API")}}

The **`load()`** method of the {{domxref("FontFace")}} interface requests and loads a font whose `source` was specified as a URL. It returns a {{jsxref('Promise')}} that resolves with the current `FontFace` object.

If the `source` for the font face was specified  as binary data, or the font {{domxref("FontFace/status", "status")}} property of the font face is anything other than `unloaded`, then this method does nothing.

## Syntax

```js
load()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves with a reference to the current `FontFace` object when the font loads or rejects with a `NetworkError` {{domxref("DOMException")}} if the
loading process fails.

### Exceptions

- `NetworkError`  {{domxref("DOMException")}}
  - : Indicates that the attempt to load the font failed.

## Examples

This simple example loads a font and uses it to display some text in a canvas element (with an id of `js-canvas`).

```html hidden
<canvas id="js-canvas"></canvas>
```

```js
const mycanvas = document.getElementById("js-canvas");

// load the "Bitter" font from Google Fonts
let font_file = new FontFace('FontFamily Style Bitter', 'url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)');

font_file.load().then(() => {
  // font loaded successfully!
  mycanvas.width = 650;
  mycanvas.height = 100;
  const ctx = mycanvas.getContext('2d')

  ctx.font = '36px "FontFamily Style Bitter"'
  ctx.fillText('Bitter font loaded', 20, 50)
  },
(err) => {
  console.error(err)
});
```

{{EmbedLiveSample('Examples')}}:

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
