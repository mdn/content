---
title: "WindowControlsOverlay: getTitlebarAreaRect() method"
short-title: getTitlebarAreaRect()
slug: Web/API/WindowControlsOverlay/getTitlebarAreaRect
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WindowControlsOverlay.getTitlebarAreaRect
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

The **`getTitlebarAreaRect()`** method of the {{domxref('WindowControlsOverlay')}} interface queries the current geometry of the title bar area of the Progressive Web App window.

This only applies to Progressive Web Apps installed on desktop operating systems and which use the [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API).

## Syntax

```js-nolint
getTitlebarAreaRect()
```

### Parameters

None.

### Return value

A {{domxref("DOMRect")}} that provides the coordinates and size of the title bar area within the app's content.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
