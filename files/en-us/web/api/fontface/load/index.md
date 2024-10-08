---
title: "FontFace: load() method"
short-title: load()
slug: Web/API/FontFace/load
page-type: web-api-instance-method
browser-compat: api.FontFace.load
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The **`load()`** method of the {{domxref("FontFace")}} interface requests and loads a font whose `source` was specified as a URL. It returns a {{jsxref('Promise')}} that resolves with the current `FontFace` object.

If the `source` for the font face was specified as binary data, or the font {{domxref("FontFace/status", "status")}} property of the font face is anything other than `unloaded`, then this method does nothing.

## Syntax

```js-nolint
load()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves with a reference to the current `FontFace` object when the font loads or rejects with a `NetworkError` {{domxref("DOMException")}} if the loading process fails.

### Exceptions

- `NetworkError` {{domxref("DOMException")}}
  - : Indicates that the attempt to load the font failed.

## Examples

This simple example loads a font and uses it to display some text in a canvas element (with an id of `js-canvas`).

```html hidden
<canvas id="js-canvas"></canvas>
```

```js
const canvas = document.getElementById("js-canvas");

// load the "Bitter" font from Google Fonts
const fontFile = new FontFace(
  "FontFamily Style Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(fontFile);

fontFile.load().then(
  () => {
    // font loaded successfully!
    canvas.width = 650;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");

    ctx.font = '36px "FontFamily Style Bitter"';
    ctx.fillText("Bitter font loaded", 20, 50);
  },
  (err) => {
    console.error(err);
  },
);
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
