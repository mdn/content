---
title: "XRInputSourceEvent: frame property"
short-title: frame
slug: Web/API/XRInputSourceEvent/frame
page-type: web-api-instance-property
browser-compat: api.XRInputSourceEvent.frame
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The read-only {{domxref("XRInputSourceEvent")}} property
**`frame`** specifies an {{domxref("XRFrame")}} object
representing the event frame during which a [WebXR](/en-US/docs/Web/API/WebXR_Device_API) user input occurred.
This may thus be an event which occurred in the past rather than a current or impending
event.

## Value

An {{domxref("XRFrame")}} indicating the event frame at which the user input event
described by the object took place.

## Usage notes

The event frame does not correspond to a visual frame as is delivered to the frame
rendering callback function (see [Rendering and the WebXR frame rendering callback](/en-US/docs/Web/API/WebXR_Device_API/Rendering) for details on the callback). Instead, the `XRFrame`
specified by the `frame` property is a method to provide access to the
{{domxref("XRFrame.getPose", "getPose()")}} method, which you can use to get the
relative positions of the objects in the scene at the time the event occurred.

However, since the event frame isn't an animation frame, there is no viewer pose
available to represent the viewer's current point of view; the results of calling
{{domxref("XRFrame.getViewerPose", "getViewerPose()")}} will be an
{{domxref("XRViewerPose")}} with an empty {{domxref("XRViewerPose.views", "views")}}
list.

## Examples

This code shows a handler for the {{domxref("XRSession.selectstart_event", "selectstart")}} event which gets the target ray's pose from the frame, mapping the pose
representing the ray (`event.inputSource.targetRaySpace`) to the overall
reference space `myRefSpace`.

Then, if the result isn't `null`, the target ray pose's transform is passed
into a function called `myCheckAndHandleHit()` to see if the ray was pointing
at anything when the select was triggered.

```js
xrSession.onselectstart = (event) => {
  let targetRayPose = event.frame.getPose(
    event.inputSource.targetRaySpace,
    myRefSpace,
  );
  if (targetRayPose) {
    checkAndHandleHit(targetRayPose.transform);
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
