---
title: CanvasRenderingContext2D.drawWidgetAsOnScreen()
slug: Web/API/CanvasRenderingContext2D/drawWidgetAsOnScreen
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Non-standard
  - Reference
browser-compat: api.CanvasRenderingContext2D.drawWidgetAsOnScreen
---
{{APIRef}} {{non-standard_header}}

The non-standard and internal only
**`CanvasRenderingContext2D.drawWidgetAsOnScreen()`** method of
the Canvas 2D API renders the root widget of a window into the canvas. Unlike
{{domxref("CanvasRenderingContext2D.drawWindow", "drawWindow()")}}, this API uses the
operating system to snapshot the widget on-screen, rather than reading from Gecko's own
compositor.

This API cannot be used by Web content. It is only supported on Windows, only on
widgets that use [OMTC](https://wiki.mozilla.org/Platform/GFX/OffMainThreadCompositing), and
only from within the chrome process.

## Syntax

```js
void ctx.drawWidgetAsOnScreen(window);
```

### Parameters

- `window`
  - : The {{domxref("Window")}} to render.

## Specifications

Not part of any current specification or draft. This is a non-standard and internal
only API.

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("CanvasRenderingContext2D.drawWindow()")}}
