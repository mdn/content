---
title: WindowControlsOverlay.ongeometrychange
slug: Web/API/WindowControlsOverlay/ongeometrychange
tags:
  - API
  - WindowControlsOverlay
  - Property
  - Reference
  - ongeometrychange
  - Progressive Web Apps
browser-compat: api.WindowControlsOverlay.geometrychange_event
---
{{ApiRef("Window Controls Overlay API")}}

The **`ongeometrychange`** property of the {{domxref("WindowControlsOverlay")}} interface represents an [event handler](/en-US/docs/Web/Events/Event_handlers) to be called when the {{domxref("WindowControlsOverlay/geometrychange_event", "geometrychange")}} event occurs — i.e. when the title bar area position, visibility, or size changes.

## Syntax

```js
navigator.windowControlsOverlay.ongeometrychange = function(e) { /* ... */ };
navigator.windowControlsOverlay.addEventListener('geometrychange', function(e) { /* ... */ });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
