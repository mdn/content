---
title: FontFace.load()
slug: Web/API/FontFace/load
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

The **`load()`** method of the {{domxref("FontFace")}} interface loads a font based on current object's constructor-passed requirements, including a location or source buffer, and returns a {{jsxref('Promise')}} that resolves with the current `FontFace` object.

## Syntax

```js
FontFace.load()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves with a reference to the current `FontFace` object when the font loads or rejects with a `NetworkError` {{domxref("DOMException")}} if the
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

// load the "Bitter" font from google fonts
let font_file = new FontFace('FontFamily Style Bitter', 'url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)');

font_file.load().then( () => {
  // font loaded successfully!
  mycanvas.width = 650;
  mycanvas.height = 100;
  var ctx = mycanvas.getContext('2d')

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
