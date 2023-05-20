---
title: "XRLayerEvent: XRLayerEvent() constructor"
short-title: XRLayerEvent()
slug: Web/API/XRLayerEvent/XRLayerEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.XRLayerEvent.XRLayerEvent
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`XRLayerEvent`** constructor creates and returns a new {{domxref("XRLayerEvent")}} object. These events relate to a change of state of an {{domxref("XRLayer")}} object.

## Syntax

```js-nolint
new XRLayerEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `redraw`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `layer`
      - : The {{domxref("XRLayer")}} to which the event is to be delivered.

### Return value

A new {{domxref("XRLayer")}} object representing an object of the
specified type and configured as described by the `eventInitDict` parameter.

## Examples

### Creating a new `XRLayerEvent`

In this example, a new `redraw` event is created for an {{domxref("XRQuadLayer")}}.

```js
const redrawEvent = new XRLayerEvent("redraw", {
  layer: quadLayer,
});

quadLayer.dispatchEvent();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLayer")}}
- {{domxref("EventTarget.dispatchEvent()")}}
