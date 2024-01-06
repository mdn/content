---
title: "CanvasRenderingContext2D: fillText() method"
short-title: fillText()
slug: Web/API/CanvasRenderingContext2D/fillText
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.fillText
---

{{APIRef("HTML DOM")}}

The {{domxref("CanvasRenderingContext2D")}} method
**`fillText()`**, part of the Canvas 2D API, draws a text string
at the specified coordinates, filling the string's characters with the current
{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}. An optional parameter
allows specifying a maximum width for the rendered text, which the {{Glossary("user
  agent")}} will achieve by condensing the text or by using a lower font size.

This method draws directly to the canvas without modifying the current path, so any
subsequent {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} or
{{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} calls will have no effect
on it.

The text is rendered using the font and text layout configuration as defined by the
{{domxref("CanvasRenderingContext2D.font","font")}},
{{domxref("CanvasRenderingContext2D.textAlign","textAlign")}},
{{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}}, and
{{domxref("CanvasRenderingContext2D.direction","direction")}} properties.

> **Note:** To draw the outlines of the characters in a string, call the context's
> {{domxref("CanvasRenderingContext2D.strokeText", "strokeText()")}} method.

## Syntax

```js-nolint
fillText(text, x, y)
fillText(text, x, y, maxWidth)
```

### Parameters

- `text`
  - : A string specifying the text string to render into the context.
    The text is rendered using the settings specified by
    {{domxref("CanvasRenderingContext2D.font","font")}},
    {{domxref("CanvasRenderingContext2D.textAlign","textAlign")}},
    {{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}}, and
    {{domxref("CanvasRenderingContext2D.direction","direction")}}.
- `x`
  - : The x-axis coordinate of the point at which to begin drawing the text, in pixels.
- `y`
  - : The y-axis coordinate of the baseline on which to begin drawing the text, in pixels.
- `maxWidth` {{optional_inline}}
  - : The maximum number of pixels wide the text may be once rendered. If not specified,
    there is no limit to the width of the text. However, if this value is provided, the
    user agent will adjust the kerning, select a more horizontally condensed font (if one
    is available or can be generated without loss of quality), or scale down to a smaller
    font size in order to fit the text in the specified width.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Drawing filled text

This example writes the words "Hello world" using the `fillText()` method.

#### HTML

First, we need a canvas to draw into. This code creates a context 400 pixels wide and
150 pixels across.

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

The JavaScript code for this example follows.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.fillText("Hello world", 50, 90);
```

This code obtains a reference to the {{HTMLElement("canvas")}}, then gets a reference
to its 2D graphics context.

With that in hand, we set the {{domxref("CanvasRenderingContext2D.font", "font")}} to
50-pixel-tall "serif" (the user's default [serif](https://en.wikipedia.org/wiki/Serif) font),
then call `fillText()` to draw the text "Hello world," starting at the
coordinates (50, 90).

#### Result

{{ EmbedLiveSample('Drawing_filled_text', 700, 180) }}

### Restricting the text size

This example writes the words "Hello world," restricting its width to 140 pixels.

#### HTML

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.fillText("Hello world", 50, 90, 140);
```

#### Result

{{ EmbedLiveSample('Restricting_the_text_size', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drawing text](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
