---
title: XRBoundedReferenceSpace
slug: Web/API/XRBoundedReferenceSpace
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRBoundedReferenceSpace
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)'s **`XRBoundedReferenceSpace`** interface describes a virtual world [reference space](/en-US/docs/Web/API/WebXR_Device_API/Geometry) which has preset boundaries. This extends {{domxref("XRReferenceSpace")}}, which describes an essentially unrestricted space around the viewer's position. These bounds are defined using an array of points, each of which defines a vertex in a polygon inside which the user is allowed to move.

This is typically used when the XR system is capable of tracking the user's physical movement within a limited distance of their starting position. The specified bounds may, in fact, describe the shape and size of the room the user is located in, in order to let the WebXR site or application prevent the user from colliding with the walls or other obstacles in the real world. At a minimum, the boundaries indicate the area in which the XR device is capable of tracking the user's movement. See the article [Using bounded reference spaces](/en-US/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces) for details on how bounded spaces work and why they're useful.

{{InheritanceDiagram}}

## Instance properties

_In addition to the properties of {{domxref("XRReferenceSpace")}}, `XRBoundedReferenceSpace` includes the following:_

- {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An array of {{domxref("DOMPointReadOnly")}} objects, each of which defines a vertex in the polygon defining the boundaries within which the user will be required to remain. These vertices _must_ be sorted such that they move _clockwise_ around the viewer's position.

## Instance methods

_`XRBoundedReferenceSpace` inherits the methods of its parent interface, {{domxref("XRReferenceSpace")}}. It has no further methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Geometry and reference spaces in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Geometry)
- [Viewpoints and viewers: simulating cameras in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Cameras)
