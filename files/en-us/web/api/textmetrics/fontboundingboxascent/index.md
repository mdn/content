---
title: "TextMetrics: fontBoundingBoxAscent property"
short-title: fontBoundingBoxAscent
slug: Web/API/TextMetrics/fontBoundingBoxAscent
page-type: web-api-instance-property
browser-compat: api.TextMetrics.fontBoundingBoxAscent
---

{{APIRef("Canvas API")}}

The read-only `fontBoundingBoxAscent` property of the {{domxref("TextMetrics")}} interface returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute, to the top of the highest bounding rectangle of all the fonts used to render the text, in CSS pixels.

## Value

A number, in CSS pixels.

## Examples

The code below shows how you can get the `fontBoundingBoxAscent` for some text in a particular font.

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "25px serif";
const text = "Foo";

const textMetrics = ctx.measureText("foo"); // returns TextMetrics object
const ascentCssPixels = textMetrics.fontBoundingBoxAscent;
```

```html hidden
<p id="log"></p>
```

```js hidden
const log = document.getElementById("log");
log.innerText = `fontBoundingBoxAscent: ${ascentCssPixels}`;
```

The ascent in CSS pixels for the text "Foo" in a 25px serif font is shown below.

{{EmbedLiveSample('Examples', 100, 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics.fontBoundingBoxDescent")}}
- {{domxref("TextMetrics")}}
