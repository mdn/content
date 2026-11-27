---
title: "CanvasPaintEvent: CanvasPaintEvent() constructor"
short-title: CanvasPaintEvent()
slug: Web/API/CanvasPaintEvent/CanvasPaintEvent
page-type: web-api-constructor
browser-compat: api.CanvasPaintEvent.CanvasPaintEvent
---

{{APIRef("HTML-in-Canvas API")}}

The **`CanvasPaintEvent()`** constructor returns a new {{domxref("CanvasPaintEvent")}} object instance.

## Syntax

```js-nolint
new CanvasPaintEvent(type)
new CanvasPaintEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the type of the `CanvasPaintEvent`. This is always `paint`.
- `options` {{optional_inline}}
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `changedElements` {{optional_inline}}
      - : An array of references to the `drawable` elements repainted when the `paint` event fired.

## Examples

You'd never manually use this constructor. Instead, `CanvasPaintEvent` objects are constructed inside a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event handler. See the main {{domxref("CanvasPaintEvent")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
