---
title: XRLayerEvent
slug: Web/API/XRLayerEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRLayerEvent
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRLayerEvent`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is the event type for events related to a change of state of an {{domxref("XRLayer")}} object. These events occur, for example, when the layer needs to be redrawn.

{{InheritanceDiagram}}

## Constructor

- {{domxref("XRLayerEvent.XRLayerEvent", "XRLayerEvent()")}} {{Experimental_Inline}}
  - : Creates and returns a new `XRLayerEvent` object.

## Instance properties

_In addition to properties inherited from its parent interface, {{domxref("Event")}}, `XRLayerEvent` provides the following:_

- {{domxref("XRLayerEvent.layer", "layer")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The {{domxref("XRLayer")}} which generated the event.

## Instance methods

_While `XRSessionEvent` defines no methods, it inherits methods from its parent interface, {{domxref("Event")}}._

## Event types

_The following events are represented using the `XRLayerEvent` interface, and are permitted values for its `type` parameter._

### `redraw` event

The `redraw` event is tent to the layer object when the underlying resources of the layer are lost or when the XR Compositor can no longer reproject the layer. If this event is sent, authors should redraw the content of the layer in the next XR animation frame. It is available on the following layer objects:

- {{domxref("XRQuadLayer")}}: {{domxref("XRQuadLayer.redraw_event", "redraw")}}
- {{domxref("XRCylinderLayer")}}: {{domxref("XRCylinderLayer.redraw_event", "redraw")}}
- {{domxref("XREquirectLayer")}}: {{domxref("XREquirectLayer.redraw_event", "redraw")}}
- {{domxref("XRCubeLayer")}}: {{domxref("XRCubeLayer.redraw_event", "redraw")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRCompositionLayer.needsRedraw")}}
