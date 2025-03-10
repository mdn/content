---
title: "CanvasRenderingContext2D: strokeText() method"
short-title: strokeText()
slug: Web/API/CanvasRenderingContext2D/strokeText
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.strokeText
---

{{APIRef}}

The {{domxref("CanvasRenderingContext2D")}} method
**`strokeText()`**, part of the Canvas 2D API, strokes — that
is, draws the outlines of — the characters of a text string at the specified
coordinates. An optional parameter allows specifying a maximum width for the rendered
text, which the {{Glossary("user agent")}} will achieve by condensing the text or by
using a lower font size.

This method draws directly to the canvas without modifying the current path, so any
subsequent {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} or
{{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} calls will have no effect
on it.

> [!NOTE]
> Use the {{domxref('CanvasRenderingContext2D.fillText()', 'fillText()')}} method to
> fill the text characters rather than having just their outlines drawn.

## Syntax

```js-nolint
strokeText(text, x, y)
strokeText(text, x, y, maxWidth)
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
  - : The x-axis coordinate of the point at which to begin drawing the text.
- `y`
  - : The y-axis coordinate of the point at which to begin drawing the text.
- `maxWidth` {{optional_inline}}
  - : The maximum width the text may be once rendered. If not specified, there is no limit
    to the width of the text. However, if this value is provided, the user agent will
    adjust the kerning, select a more horizontally condensed font (if one is available or
    can be generated without loss of quality), or scale down to a smaller font size in
    order to fit the text in the specified width.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Drawing text outlines

This example writes the words "Hello world" using the `strokeText()` method.

#### HTML

First, we need a canvas to draw into. This code creates a context 400 pixels wide and
150 pixels high.

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

The JavaScript code for this example follows.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.strokeText("Hello world", 50, 90);
```

This code obtains a reference to the {{HTMLElement("canvas")}}, then gets a reference
to its 2D graphics context.

With that in hand, we set the {{domxref("CanvasRenderingContext2D.font", "font")}} to
50-pixel-tall "serif" (the user's default [serif](https://en.wikipedia.org/wiki/Serif) font),
then call `strokeText()` to draw the text "Hello world," starting at the
coordinates (50, 90).

#### Result

{{ EmbedLiveSample('Drawing_text_outlines', 700, 180) }}

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
ctx.strokeText("Hello world", 50, 90, 140);
```

#### Result

{{ EmbedLiveSample('Restricting_the_text_size', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drawing text](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillText()")}}
