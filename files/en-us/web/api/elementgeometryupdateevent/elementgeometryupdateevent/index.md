---
title: "ElementGeometryUpdateEvent: ElementGeometryUpdateEvent() constructor"
short-title: ElementGeometryUpdateEvent()
slug: Web/API/ElementGeometryUpdateEvent/ElementGeometryUpdateEvent
page-type: web-api-constructor
browser-compat: api.ElementGeometryUpdateEvent.ElementGeometryUpdateEvent
---

{{APIRef("HTML-in-Canvas API")}}

The **`ElementGeometryUpdateEvent()`** constructor returns a new {{domxref("ElementGeometryUpdateEvent")}} object instance.

## Syntax

```js-nolint
new ElementGeometryUpdateEvent(type)
new ElementGeometryUpdateEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the type of the `ElementGeometryUpdateEvent`. This is always `elementgeometryupdate`.
- `options` {{optional_inline}}
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `elements` {{optional_inline}}
      - : An array of references to the elements whose geometry was changed.

## Examples

You'd never manually use this constructor. Instead, `ElementGeometryUpdateEvent` objects are constructed inside an {{domxref("HTMLCanvasElement.elementgeometryupdate_event", "elementgeometryupdate")}} event handler. See the main {{domxref("ElementGeometryUpdateEvent")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
