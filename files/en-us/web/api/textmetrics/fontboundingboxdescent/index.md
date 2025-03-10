---
title: "TextMetrics: fontBoundingBoxDescent property"
short-title: fontBoundingBoxDescent
slug: Web/API/TextMetrics/fontBoundingBoxDescent
page-type: web-api-instance-property
browser-compat: api.TextMetrics.fontBoundingBoxDescent
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The read-only `fontBoundingBoxDescent` property of the {{domxref("TextMetrics")}} interface returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the bottom of the bounding rectangle of all the fonts used to render the text, in CSS pixels.

## Value

A number, in CSS pixels.

## Examples

The code below shows how you can get the `fontBoundingBoxDescent` for text in a particular font.

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "25px serif";
const text = "Foo";

const textMetrics = ctx.measureText(text); // returns TextMetrics object
const descentCssPixels = textMetrics.fontBoundingBoxDescent;
```

```html hidden
<p id="log"></p>
```

```js hidden
const log = document.getElementById("log");
log.innerText = `fontBoundingBoxDescent: ${descentCssPixels}`;
```

The descent in CSS pixels for the text "Foo" in a 25px serif font is shown below.

{{EmbedLiveSample('Examples', 100, 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics.fontBoundingBoxAscent")}}
- {{domxref("TextMetrics")}}
