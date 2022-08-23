---
title: WindowControlsOverlayGeometryChangeEvent()
slug: Web/API/WindowControlsOverlayGeometryChangeEvent/WindowControlsOverlayGeometryChangeEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - DOM Events
  - WindowControlsOverlayGeometryChangeEvent
  - Experimental
browser-compat: api.WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent
---
{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

The **`WindowControlsOverlayGeometryChangeEvent()`** constructor returns a newly created
{{domxref("WindowControlsOverlayGeometryChangeEvent")}}, representing the current geometry of a desktop Progressive Web App's title bar area.

## Syntax

```js
new WindowControlsOverlayGeometryChangeEvent(type, options)
```

### Parameters

_The `WindowControlsOverlayGeometryChangeEvent()` constructor also inherits arguments from
{{domxref("Event.Event", "Event()")}}._

- `type`
  - : A string indicating the event type. Its value must be `geometrychange` and is case-sensitive.
- `options`
  - : An object with the following properties:
    - `visible`
      - : A boolean flag that's true when the `titleBarAreaRect` object's values are not 0.
    - `titleBarAreaRect`
      - : A {{domxref("DOMRect")}} representing the position and size of the title bar area.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WindowControlsOverlayGeometryChangeEvent")}} interface it belongs to.
