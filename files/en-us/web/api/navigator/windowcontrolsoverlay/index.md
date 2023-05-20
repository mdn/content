---
title: "Navigator: windowControlsOverlay property"
short-title: windowControlsOverlay
slug: Web/API/Navigator/windowControlsOverlay
page-type: web-api-instance-property
browser-compat: api.Navigator.windowControlsOverlay
---

{{SecureContext_Header}}{{APIRef("")}}

The **`windowControlsOverlay`** property of the {{domxref("Navigator")}}
interface returns the {{domxref("WindowControlsOverlay")}} interface, which exposes
information about the title bar geometry in desktop Progressive Web Apps that use the [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API).

Progressive Web Apps installed on desktop Operating Systems can opt-in to the
Window Controls Overlay feature by using the `window-controls-overlay` value in the
[`display_override`](/en-US/docs/Web/Manifest/display_override) web app manifest member.

Doing so hides the default window title bar and gives the app access to the full area
of the app window.

## Value

The {{domxref("WindowControlsOverlay")}} interface.

## Examples

```js
if ("windowControlsOverlay" in navigator) {
  const rect = navigator.windowControlsOverlay.getTitlebarAreaRect();
  // Do something with the title bar area rectangle.
} else {
  // The Window Controls Overlay feature is not available.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
