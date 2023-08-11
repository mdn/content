---
title: TextMetrics
slug: Web/API/TextMetrics
page-type: web-api-interface
browser-compat: api.TextMetrics
---

{{APIRef("Canvas API")}}

The **`TextMetrics`** interface represents the dimensions of a piece of text in the canvas; a `TextMetrics` instance can be retrieved using the {{domxref("CanvasRenderingContext2D.measureText()")}} method.

## Instance properties

- {{domxref("TextMetrics.width")}} {{ReadOnlyInline}}
  - : Returns the width of a segment of inline text in CSS pixels. It takes into account the current font of the context.
- {{domxref("TextMetrics.actualBoundingBoxLeft")}} {{ReadOnlyInline}}
  - : Distance parallel to the baseline from the alignment point given by the {{domxref("CanvasRenderingContext2D.textAlign")}} property to the left side of the bounding rectangle of the given text, in CSS pixels; positive numbers indicating a distance going left from the given alignment point.
- {{domxref("TextMetrics.actualBoundingBoxRight")}} {{ReadOnlyInline}}
  - : Returns the distance from the alignment point given by the {{domxref("CanvasRenderingContext2D.textAlign")}} property to the right side of the bounding rectangle of the given text, in CSS pixels. The distance is measured parallel to the baseline.
- {{domxref("TextMetrics.fontBoundingBoxAscent")}} {{ReadOnlyInline}}
  - : Returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the top of the highest bounding rectangle of all the fonts used to render the text, in CSS pixels.
- {{domxref("TextMetrics.fontBoundingBoxDescent")}} {{ReadOnlyInline}}
  - : Returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the bottom of the bounding rectangle of all the fonts used to render the text, in CSS pixels.
- {{domxref("TextMetrics.actualBoundingBoxAscent")}} {{ReadOnlyInline}}
  - : Returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the top of the bounding rectangle used to render the text, in CSS pixels.
- {{domxref("TextMetrics.actualBoundingBoxDescent")}} {{ReadOnlyInline}}
  - : Returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the bottom of the bounding rectangle used to render the text, in CSS pixels.
- {{domxref("TextMetrics.emHeightAscent")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the top of the _em_ square in the line box, in CSS pixels.
- {{domxref("TextMetrics.emHeightDescent")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the bottom of the _em_ square in the line box, in CSS pixels.
- {{domxref("TextMetrics.hangingBaseline")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the hanging baseline of the line box, in CSS pixels.
- {{domxref("TextMetrics.alphabeticBaseline")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the alphabetic baseline of the line box, in CSS pixels.
- {{domxref("TextMetrics.ideographicBaseline")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the ideographic baseline of the line box, in CSS pixels.

## Examples

### Baselines illustrated

This example demonstrates the baselines the `TextMetrics` object holds. The default baseline is the `alphabeticBaseline`. See also the {{domxref("CanvasRenderingContext2D.textBaseline")}} property.

#### HTML

```html
<canvas id="canvas" width="550" height="500"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const baselinesAboveAlphabetic = [
  "fontBoundingBoxAscent",
  "actualBoundingBoxAscent",
  "emHeightAscent",
  "hangingBaseline",
];
const baselinesBelowAlphabetic = [
  "ideographicBaseline",
  "emHeightDescent",
  "actualBoundingBoxDescent",
  "fontBoundingBoxDescent",
];
const baselines = [...baselinesAboveAlphabetic, ...baselinesBelowAlphabetic];
ctx.font = "25px serif";
ctx.strokeStyle = "red";

baselines.forEach((baseline, index) => {
  const text = `Abcdefghijklmnop (${baseline})`;
  const textMetrics = ctx.measureText(text);
  const y = 50 + index * 50;
  ctx.beginPath();
  ctx.fillText(text, 0, y);
  let lineY = y - Math.abs(textMetrics[baseline]);
  if (baselinesBelowAlphabetic.includes(baseline)) {
    lineY = y + Math.abs(textMetrics[baseline]);
  }
  ctx.moveTo(0, lineY);
  ctx.lineTo(550, lineY);
  ctx.stroke();
});
```

#### Result

{{EmbedLiveSample('Baselines_illustrated', 700, 550)}}

### Measuring text width

When measuring the x-direction of a piece of text, the sum of `actualBoundingBoxLeft` and `actualBoundingBoxRight` can be wider than the width of the inline box (`width`), due to slanted/italic fonts where characters overhang their advance width.

It can therefore be useful to use the sum of `actualBoundingBoxLeft` and `actualBoundingBoxRight` as a more accurate way to get the absolute text width:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const text = "Abcdefghijklmnop";
ctx.font = "italic 50px serif";
const textMetrics = ctx.measureText(text);

console.log(textMetrics.width);
// 459.8833312988281

console.log(
  textMetrics.actualBoundingBoxRight + textMetrics.actualBoundingBoxLeft,
);
// 462.8833333333333
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Creator method in {{domxref("CanvasRenderingContext2D")}}
- The {{HTMLElement("canvas")}} element and its associated interface, {{domxref("HTMLCanvasElement")}}
