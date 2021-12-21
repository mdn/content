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

The window controls overlay will not be visible if the Progressive Web App does not use the Window Controls Overlay feature at all, or if the user has opted-out of the feature.

## Syntax

```js
var isOverlayVisible = navigator.windowControlsOverlay.visible;
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
