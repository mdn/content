---
title: Navigator.windowControlsOverlay
slug: Web/API/Navigator/windowControlsOverlay
tags:
  - API
  - Window Controls Overlay
  - Property
  - Reference
  - Progressive Web Apps
browser-compat: api.Navigator.windowControlsOverlay
---
{{securecontext_header}}{{APIRef("")}}

The **`windowControlsOverlay`** property of the {{domxref("Navigator")}}
interface returns the {{domxref("WindowControlsOverlay")}} interface, which exposes
information about the title bar area geometry in desktop Progressive Web Apps.

Progressive Web Apps installed on desktop Operating Systems can opt-in to the
Window Controls Overlay feature by using the `window-controls-overlay` value in the
[`display_override`](/en-US/docs/Web/Manifest/display_override) web app manifest member.

Doing so hides the default window title bar and gives the app access to the full
surface area of the app window.

The `navigator.windowControlsOverlay` API can then be used to query the geometry of
the title bar area, and know whenever it changes, in order to position web content in
that area.

## Syntax

```js
var wco = navigator.windowControlsOverlay
```

### Value

The {{domxref("WindowControlsOverlay")}} interface.

## Example

```js
if ('windowControlsOverlay' in navigator) {
  var rect = navigator.windowControlsOverlay.getTitlebarAreaRect();
  // Do something with the titlebar are rectangle.
} else {
  // The Window Controls Overlay feature is not available.
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
