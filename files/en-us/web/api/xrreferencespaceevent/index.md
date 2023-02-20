---
title: XRReferenceSpaceEvent
slug: Web/API/XRReferenceSpaceEvent
page-type: web-api-interface
browser-compat: api.XRReferenceSpaceEvent
---

{{APIRef("WebXR Device API")}}{{SecureContext_header}}

The [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) interface **`XRReferenceSpaceEvent`** represents an event sent to an {{domxref("XRReferenceSpace")}}. Currently, the only event that uses this type is the {{domxref("XRReferenceSpace.reset_event", "reset")}} event.

{{InheritanceDiagram}}

## Constructor

- {{domxref("XRReferenceSpaceEvent.XRReferenceSpaceEvent", "XRReferenceSpaceEvent()")}}
  - : Returns a new `XRReferenceSpaceEvent` with the specified type and configuration.

## Instance properties

_In addition to inheriting the properties available on the parent interface, {{domxref("Event")}}, `XRReferenceSpaceEvent` objects include the following properties:_

- {{domxref("XRReferenceSpaceEvent.referenceSpace", "referenceSpace")}} {{ReadOnlyInline}}
  - : An {{domxref("XRReferenceSpace")}} indicating the reference space that generated the event.
- {{domxref("XRReferenceSpaceEvent.transform", "transform")}} {{ReadOnlyInline}}
  - : An {{domxref("XRRigidTransform")}} object indicating the position and orientation of the specified `referenceSpace`'s native origin after the event, defined relative to the coordinate system before the event.

## Instance methods

_While `XRReferenceSpaceEvent` does not define any methods, it inherits the methods of its parent interface, {{domxref("Event")}}._

## Event types

- {{domxref("XRReferenceSpace.reset_event", "reset")}}
  - : The `reset` event is sent to a reference space when its native origin is changed due to a discontinuity, recalibration, or device reset. This is an opportunity for your app to update any stored transforms, position/orientation information, or the like—or to dump any cached values based on the reference's space's origin so you can recompute them as needed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
