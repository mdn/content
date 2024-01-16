---
title: "CanvasRenderingContext2D: letterSpacing property"
short-title: letterSpacing
slug: Web/API/CanvasRenderingContext2D/letterSpacing
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.letterSpacing
---

{{APIRef}}

The **`CanvasRenderingContext2D.letterSpacing`** property of the [Canvas API](/en-US/docs/Web/API/Canvas_API) specifies the spacing between letters when drawing text.

This corresponds to the CSS [`letter-spacing`](/en-US/docs/Web/CSS/letter-spacing) property.

## Value

The letter spacing as a string in the [CSS length](/en-US/docs/Web/CSS/length) data format.
The default is `0px`.

The property can be used to get or set the spacing.
The property value will remain unchanged if set to an invalid/unparsable value.

## Examples

In this example we display the text "Hello World" three times, using the `letterSpacing` property to modify the letter spacing in each case.
The spacing is also displayed for each case, using the value of the property.

### HTML

```html
<canvas id="canvas" width="700"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px serif";

// Default letter spacing
ctx.fillText(`Hello world (default: ${ctx.letterSpacing})`, 10, 40);

// Custom letter spacing: 10px
ctx.letterSpacing = "10px";
ctx.fillText(`Hello world (${ctx.letterSpacing})`, 10, 90);

// Custom letter spacing: 20px
ctx.letterSpacing = "20px";
ctx.fillText(`Hello world (${ctx.letterSpacing})`, 10, 140);
```

### Result

{{ EmbedLiveSample('Examples', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D.wordSpacing")}}
