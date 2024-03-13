---
title: "WindowControlsOverlayGeometryChangeEvent: WindowControlsOverlayGeometryChangeEvent() constructor"
short-title: WindowControlsOverlayGeometryChangeEvent()
slug: Web/API/WindowControlsOverlayGeometryChangeEvent/WindowControlsOverlayGeometryChangeEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

The **`WindowControlsOverlayGeometryChangeEvent()`** constructor returns a new {{domxref("WindowControlsOverlayGeometryChangeEvent")}} object, representing the current geometry of a desktop Progressive Web App's title bar area.

## Syntax

```js-nolint
new WindowControlsOverlayGeometryChangeEvent(type, options)
```

### Parameters

_The `WindowControlsOverlayGeometryChangeEvent()` constructor also inherits arguments from
{{domxref("Event.Event", "Event()")}}._

- `type`
  - : A string indicating the event type. It is case-sensitive and browsers set it to `geometrychange`.
- `options`
  - : An object with the following properties:
    - `visible` {{optional_inline}}
      - : A boolean flag that's true when the `titlebarAreaRect` object's values are not 0. Its default value is `false`.
    - `titlebarAreaRect`
      - : A {{domxref("DOMRect")}} representing the position and size of the title bar area.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WindowControlsOverlayGeometryChangeEvent")}} interface it belongs to.
