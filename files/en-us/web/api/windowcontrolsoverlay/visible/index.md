---
title: "WindowControlsOverlay: visible property"
short-title: visible
slug: Web/API/WindowControlsOverlay/visible
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WindowControlsOverlay.visible
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

The **`visible`** read-only property of the {{domxref("WindowControlsOverlay")}} interface returns a {{Glossary("Boolean")}} that indicates whether the window controls overlay is visible or not.

The window controls overlay is not be visible if:

- The Web App Manifest's [`display_override`](/en-US/docs/Web/Manifest/Reference/display_override) member is not set to `window-controls-overlay`.
- Or, if the user has opted-out of the feature.

## Value

A boolean.

## Examples

```js
if (navigator.windowControlsOverlay.visible) {
  // Execute code if the controls overlay is visible.
} else {
  // Do something else when it isn't visible.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WindowControlsOverlay")}} interface it belongs to.
