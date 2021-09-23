---
title: XRLayerEvent()
slug: Web/API/XRLayerEvent/XRLayerEvent
tags:
  - API
  - Constructor
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
browser-compat: api.XRLayerEvent.XRLayerEvent
---
{{APIRef("WebXR Device API")}}

The **`XRLayerEvent`** constructor creates and returns a new {{domxref("XRLayerEvent")}} object. These events relate to a change of state of an {{domxref("XRLayer")}} object.

## Syntax

```js
new XRLayerEvent(type, eventInitDict)
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} indicating which of the events represented by objects of
    type `XRLayerEvent` this particular object represents. See [`Event types`](/en-US/docs/Web/API/XRLayerEvent#event_types) for a list of the permitted values.
- `eventInitDict`
  - : An object with the following values:
    - `layer`: Required. The {{domxref("XRLayer")}} to which the event is to be delivered.

### Return value

A newly-created {{domxref("XRLayer")}} object representing an object of the
specified type and configured as described by the `eventInitDict` parameter.

## Examples

### Creating a new `XRLayerEvent`

In this example, a new `redraw` event is created for an {{domxref("XRQuadLayer")}}.

```js
const redrawEvent = new XRLayerEvent("redraw", {
  layer: quadLayer
}):

quadLayer.dispatchEvent();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLayer")}}
- {{domxref("EventTarget.dispatchEvent()")}}
