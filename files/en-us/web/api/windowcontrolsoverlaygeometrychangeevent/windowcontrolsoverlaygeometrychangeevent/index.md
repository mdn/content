---
title: WindowControlsOverlayGeometryChangeEvent()
slug: Web/API/WindowControlsOverlayGeometryChangeEvent/WindowControlsOverlayGeometryChangeEvent
tags:
  - API
  - Constructor
  - DOM Events
  - WindowControlsOverlayGeometryChangeEvent
browser-compat: api.WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent
---
{{APIRef("DOM Events")}}

The **`WindowControlsOverlayGeometryChangeEvent()`** constructor returns a newly created
{{domxref("WindowControlsOverlayGeometryChangeEvent")}}, representing the current geometry of a desktop Progressive Web App's title bar area.

## Syntax

```js
new WindowControlsOverlayGeometryChangeEvent(type, {visible: aBooleanValue, titlebarAreaRect: aDOMRectValue});
```

### Arguments

_The `WindowControlsOverlayGeometryChangeEvent()` constructor also inherits arguments from
{{domxref("Event.Event", "Event()")}}._

- _type_
  - : Is a {{domxref("DOMString")}} representing the name of the type of the
    `WindowControlsOverlayGeometryChangeEvent`. It is case-sensitive.
- `visible`
  - : Is a boolean flag that's true when the titleBarAreaRect's values are not 0.
- `titleBarAreaRect`
  - : Is a {{domxref("DOMRect")}} representing the position and size of the title bar area.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WindowControlsOverlayGeometryChangeEvent")}} interface it belongs to.
