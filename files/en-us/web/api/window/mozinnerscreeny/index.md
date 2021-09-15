---
title: Window.mozInnerScreenY
slug: Web/API/Window/mozInnerScreenY
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Reference
  - Window
browser-compat: api.Window.mozInnerScreenY
---
{{APIRef}}

## Summary

Gets the Y coordinate of the top-left corner of the window's viewport, in screen
coordinates.

> **Note:** This coordinate is reported in CSS pixels, not in hardware pixels. That means it can be affected by the zoom level; to compute the actual number of physical screen pixels, you should use the [`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/en-US/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils) property.

## Syntax

```js
screenY = window.mozInnerScreenY;
```

### Value

- _screenY_ stores the `window.mozInnerScreenY` property value.
- The `window.mozInnerScreenY` property is a floating point, read-only
  value; it has no default value.

## Specifications

Not part of any W3C technical
specification or recommendation.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.mozInnerScreenX")}}
- [`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/en-US/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils)
