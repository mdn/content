---
title: CanvasRenderingContext2D.drawWindow()
slug: Web/API/CanvasRenderingContext2D/drawWindow
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Non-standard
  - Reference
  - Deprecated
browser-compat: api.CanvasRenderingContext2D.drawWindow
---
{{APIRef}} {{deprecated_header}}{{Non-standard_header}}

The deprecated, non-standard and internal only
**`CanvasRenderingContext2D.drawWindow()`**
method of the Canvas 2D API renders a region of a window into the `canvas`.
The contents of the window's viewport are rendered, ignoring viewport clipping and
scrolling.

This API cannot be used by Web content. It is synchronous, and as such can't capture
cross-origin (out of process) iframes with Fission.  If you're using it from an
extension, you should switch to {{WebExtAPIRef('tabs.captureTab')}} to capture the
tab's image as a [data: URL](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) and then render the captured image onto canvas using
{{domxref("CanvasRenderingContext2D.drawImage")}}. If you're writing chrome code,
you probably want [WindowGlobalParent.drawSnapshot](https://searchfox.org/mozilla-central/rev/9b282b34b5/dom/chrome-webidl/WindowGlobalActors.webidl#81-98)
from the parent process.

## Syntax

```js
drawWindow(window, x, y, w, h, bgColor)
drawWindow(window, x, y, w, h, bgColor, flags)
```

### Parameters

- `window`
  - : The {{domxref("Window")}} to render.
- `x`
  - : The x-axis coordinate of the window.
- `y`
  - : The y-axis coordinate of the window.
- `w`
  - : The width of the window.
- `h`
  - : The height of the window.
- `bgColor`

  - : A string that specifies the color the canvas is filled with before
    the window is rendered into it. This color may be transparent/translucent. It is given
    as a CSS color string (for example, `rgb()` or `rgba()`).
    > **Note:**
    >
    > - If "`rgba(0,0,0,0)`" is used for the background color, the drawing
    >   will be transparent wherever the window is transparent.
    > - Top-level browsed documents are usually not transparent because the user's
    >   background-color preference is applied, but {{HTMLElement("iframe", "iframes")}}
    >   are transparent if the page doesn't set a background.
    > - If an opaque color is used for the background color, rendering will be faster
    >   because we won't have to compute the window's transparency.

- `flags` {{optional_inline}}

  - : Used to better control the `drawWindow` call. Several flags can be set at the same time, by
    grouping them with an _or_ (`|`) connector:
    - `DRAWWINDOW_DRAW_CARET` (`0x01`)
      - : Show the caret if appropriate when drawing.
    - `DRAWWINDOW_DO_NOT_FLUSH` (`0x02`)
      - : Do not flush pending layout notifications that could otherwise be batched up.
    - `DRAWWINDOW_DRAW_VIEW` (`0x04`)
      - : Draw scrollbars and scroll the viewport if they are present.
    - `DRAWWINDOW_USE_WIDGET_LAYERS` (`0x08`)
      - : Use the widget layer manager if available. This means hardware acceleration may be used, but it might actually be slower or lower quality than normal. It will, however, more accurately reflect the pixels rendered to the screen.
    - `DRAWWINDOW_ASYNC_DECODE_IMAGES` (`0x10`)
      - : Do not synchronously decode images: draw what we have.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This method draws a snapshot of the contents of a DOM `window` into the
canvas. For example,

```js
ctx.drawWindow(window, 0, 0, 100, 200, 'rgb(255,255,255)');
```

… would draw the contents of the current window, in the rectangle (0,0,100,200) in
pixels relative to the top-left of the viewport, on a white background, into the canvas.
By specifying "`rgba(255,255,255,0)`" as the color, the contents would be
drawn with a transparent background (which would be slower).

It is usually a bad idea to use any background other than pure white
"`rgb(255,255,255)`" or transparent, as this is what all browsers do, and
many websites expect that transparent parts of their interface will be drawn on white
background.

With this method, it is possible to fill a hidden IFRAME with arbitrary content (e.g.,
CSS-styled HTML text, or SVG) and draw it into a canvas. It will be scaled, rotated and
so on according to the current transformation.

Ted Mielczarek's [tab preview](https://ted.mielczarek.org/code/mozilla/tabpreview/) extension
uses this technique in chrome to provide thumbnails of web pages, and the source is
available for reference.

## Specifications

Not part of any current specification or draft. This is a non-standard and internal
only API.

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- [Using images](/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images)
