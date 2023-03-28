---
title: XRFrame
slug: Web/API/XRFrame
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRFrame
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

A [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) **`XRFrame`** object is passed into the {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} callback function and provides access to the information needed in order to render a single frame of animation for an {{domxref("XRSession")}} describing a VR or AR scene. Events which communicate the tracking state of objects also provide an `XRFrame` reference as part of their structure.

In addition to providing a reference to the {{domxref("XRSession")}} for which this frame is to be rendered, the {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} method is provided to obtain the {{domxref("XRViewerPose")}} describing the viewer's position and orientation in space, and {{domxref("XRFrame.getPose", "getPose()")}} can be used to create an {{domxref("XRPose")}} describing the relative position of one {{domxref("XRSpace")}} relative to another.

## Instance properties

- {{DOMxRef("XRFrame.session", "session")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The {{DOMxRef("XRSession")}} that for which this `XRFrame` describes the tracking details for all objects. The information about a specific object can be obtained by calling one of the methods on the object.
- {{DOMxRef("XRFrame.trackedAnchors", "trackedAnchors")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An {{domxref("XRAnchorSet")}} containing all anchors still tracked in the frame.

## Instance methods

- {{domxref("XRFrame.createAnchor()", "createAnchor()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} which resolves to a free-floating {{domxref("XRAnchor")}} object.
- {{domxref("XRFrame.fillJointRadii()", "fillJointRadii()")}} {{Experimental_Inline}}
  - : Populates a {{jsxref("Float32Array")}} with radii for a list of hand joint spaces. Returns `true` if successful for all spaces.
- {{domxref("XRFrame.fillPoses()", "fillPoses()")}} {{Experimental_Inline}}
  - : Populates a {{jsxref("Float32Array")}} with the matrices of the poses, relative to a given base space. Returns `true` if all spaces have a valid pose.
- {{domxref("XRFrame.getDepthInformation()", "getDepthInformation()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRCPUDepthInformation")}} object containing CPU depth information for the frame.
- {{domxref("XRFrame.getHitTestResults()", "getHitTestResults()")}} {{Experimental_Inline}}
  - : Returns an array of {{domxref("XRHitTestResult")}} objects containing hit test results for a given {{domxref("XRHitTestSource")}}.
- {{domxref("XRFrame.getHitTestResultsForTransientInput()", "getHitTestResultsForTransientInput()")}} {{Experimental_Inline}}
  - : Returns an array of {{domxref("XRTransientInputHitTestResult")}} objects containing hit test results for a given {{domxref("XRTransientInputHitTestSource")}}.
- {{domxref("XRFrame.getJointPose()", "getJointPose()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRJointPose")}} object providing the pose of a hand joint (see {{domxref("XRHand")}}) relative to a given base space.
- {{domxref("XRFrame.getLightEstimate()", "getLightEstimate()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRLightEstimate")}} object containing estimated lighting values for an {{domxref("XRLightProbe")}}.
- {{DOMxRef("XRFrame.getPose", "getPose()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRPose")}} object representing the spatial relationship between the two specified {{domxref("XRSpace")}} objects.
- {{DOMxRef("XRFrame.getViewerPose", "getViewerPose()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("XRViewerPose")}} describing the viewer's position and orientation in a given {{domxref("XRReferenceSpace")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Spatial tracking in WebXR](/en-US/docs/Web/API/WebXR_Device_API/Spatial_tracking)
