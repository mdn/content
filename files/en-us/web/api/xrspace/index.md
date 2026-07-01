---
title: XRSpace
slug: Web/API/XRSpace
page-type: web-api-interface
browser-compat: api.XRSpace
---

{{SecureContext_Header}}{{APIRef("WebXR Device API")}}

The **`XRSpace`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is an abstract interface providing a common basis for every class which represents a virtual coordinate system within the virtual world, in which its origin corresponds to a physical location. Spatial data in WebXR is always expressed relative to an object based upon one of the descendant interfaces of `XRSpace`, at the time at which a given {{domxref("XRFrame")}} takes place.

Numeric values such as pose positions are thus coordinates in the corresponding `XRSpace`, relative to that space's origin.

> [!NOTE]
> The `XRSpace` interface is never used directly; instead, all spaces are created using one of the interfaces based on `XRSpace`. At this time, those are {{domxref("XRReferenceSpace")}}, {{domxref("XRBoundedReferenceSpace")}}, and {{domxref("XRJointSpace")}}.

{{InheritanceDiagram}}

## Interfaces based on XRSpace

Below is a list of interfaces based on the `XRSpace` interface.

- {{domxref("XRBoundedReferenceSpace")}}
  - : Represents a reference space which may move within a region of space whose borders are defined by an array of points laid out in clockwise order along the floor to define the passable region of the space. The origin of an `XRBoundedReferenceSpace` is always at floor level, with its X and Z coordinates typically defaulting to a location near the room's center.
- {{domxref("XRReferenceSpace")}}
  - : Represents a reference space which is typically expected to remain static for the duration of the {{domxref("XRSession")}}. While objects may move within the space, the space itself remains fixed in place. There are exceptions to this static nature; most commonly, an `XRReferenceSpace` may move in order to adjust based on reconfiguration of the user's headset or other motion-sensitive device.
- {{domxref("XRJointSpace")}}
  - : Represents the space of an {{domxref("XRHand")}} joint.

## Instance properties

_The `XRSpace` interface defines no properties of its own; however, it does inherit the properties of its parent interface, {{domxref("EventTarget")}}._

## Instance methods

_The `XRSpace` interface provides no methods of its own. However, it inherits the methods of {{domxref("EventTarget")}}, its parent interface._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
