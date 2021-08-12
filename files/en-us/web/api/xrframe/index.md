---
title: XRFrame
slug: Web/API/XRFrame
tags:
  - 3D
  - API
  - AR
  - Animation
  - Augmented Reality
  - Frame
  - Interface
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - XRFrame
browser-compat: api.XRFrame
---
{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

A [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) **`XRFrame`** object is passed into the {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} callback function and provides access to the information needed in order to render a single frame of animation for an {{domxref("XRSession")}} describing a VR or AR scene. Events which communicate the tracking state of objects also provide an `XRFrame` reference as part of their structure.

In addition to providing a reference to the {{domxref("XRSession")}} for which this frame is to be rendered, the {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} method is provided to obtain the {{domxref("XRViewerPose")}} describing the viewer's position and orientation in space, and {{domxref("XRFrame.getPose", "getPose()")}} can be used to create an {{domxref("XRPose")}} describing the relative position of one {{domxref("XRSpace")}} relative to another.

## Properties

- {{DOMxRef("XRFrame.session", "session")}} {{ReadonlyInline}}
  - : The {{DOMxRef("XRSession")}} that for which this `XRFrame` describes the tracking details for all objects. The information about a specific object can be obtained by calling one of the methods on the object.
- {{DOMxRef("XRFrame.trackedAnchors", "trackedAnchors")}} {{ReadonlyInline}}
  - : An {{domxref("XRAnchorSet")}} containing all anchors still tracked in the frame.

## Methods

- {{domxref("XRFrame.createAnchor()", "createAnchor()")}}
  - : Returns a {{jsxref("Promise")}} which resolves to a free-floating {{domxref("XRAnchor")}} object.
- {{domxref("XRFrame.getDepthInformation()", "getDepthInformation()")}}
  - : Returns an {{domxref("XRCPUDepthInformation")}} object containing CPU depth information for the frame.
- {{DOMxRef("XRFrame.getPose", "getPose()")}}
  - : Returns an {{domxref("XRPose")}} object representing the spatial relationship between the two specified {{domxref("XRSpace")}} objects.
- {{DOMxRef("XRFrame.getViewerPose", "getViewerPose()")}}
  - : Returns an {{domxref("XRViewerPose")}} describing the viewer's position and orientation in a given {{domxref("XRReferenceSpace")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Spatial tracking in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking)
