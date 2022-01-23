---
title: WindowControlsOverlay.visible
slug: Web/API/WindowControlsOverlay/visible
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WindowControlsOverlay
  - Progressive Web Apps
browser-compat: api.WindowControlsOverlay.visible
---
{{ApiRef("Window Controls Overlay API")}}

The **`visible`** property of a {{domxref("WindowControlsOverlay")}} object returns a {{Glossary("Boolean")}} that indicates whether the window controls overlay is visible or not.

The window controls overlay is not be visible if:

* The Web App Manifest's [`display_override`](/en-US/docs/Web/Manifest/display_override) member is not set to `window-controls-overlay`.
* Or, if the user has opted-out of the feature.

## Syntax

```js
const isOverlayVisible = navigator.windowControlsOverlay.visible;
```

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
