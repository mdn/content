---
title: Window.mozInnerScreenX
slug: Web/API/Window/mozInnerScreenX
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Reference
  - Window
browser-compat: api.Window.mozInnerScreenX
---
{{APIRef}}

## Summary

Gets the X coordinate of the top-left corner of the window's viewport, in screen
coordinates.

> **Note:** This coordinate is reported in CSS pixels, not in hardware pixels. That means it can be affected by the zoom level; to compute the actual number of physical screen pixels, you should use the [`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/en-US/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils) property.

## Syntax

```js
screenX = window.mozInnerScreenX;
```

### Value

- _screenX_ stores the `window.mozInnerScreenX` property value.
- The `window.mozInnerScreenX` property is a floating point, read-only
  value; it has no default value.

## Specifications

Not part of any W3C technical
specification or recommendation.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.mozInnerScreenY")}}
- [`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/en-US/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils)
