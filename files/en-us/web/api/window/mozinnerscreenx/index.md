---
title: Window.mozInnerScreenX
slug: Web/API/Window/mozInnerScreenX
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Reference
  - Window
  - Non-standard
browser-compat: api.Window.mozInnerScreenX
---
{{APIRef}}{{Non-standard_Header}}

## Summary

Gets the X coordinate of the top-left corner of the window's viewport, in screen
coordinates.

> **Note:** This coordinate is reported in CSS pixels, not in hardware pixels. That means it can be affected by the zoom level; to compute the actual number of physical screen pixels, you should use the `nsIDOMWindowUtils.screenPixelsPerCSSPixel` property.

## Value

The `window.mozInnerScreenX` property is a floating point, read-only value; it has no default value.

## Specifications

Not part of any W3C technical
specification or recommendation.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.mozInnerScreenY")}}
- `nsIDOMWindowUtils.screenPixelsPerCSSPixel`
