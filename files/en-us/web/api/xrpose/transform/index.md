---
title: "XRPose: transform property"
short-title: transform
slug: Web/API/XRPose/transform
page-type: web-api-instance-property
browser-compat: api.XRPose.transform
---

{{APIRef("WebXR Device API")}}{{SecureContext_header}}

The `transform` read-only attribute of the
{{DOMxRef("XRPose")}} interface is a {{DOMxRef("XRRigidTransform")}} object providing
the position and orientation of the pose relative to the base {{DOMxRef("XRSpace")}}
as specified when the pose was obtained by calling
{{domxref("XRFrame.getPose()")}}.

## Value

An {{domxref("XRRigidTransform")}} which provides the position and orientation of the
{{domxref("XRPose")}} relative to the {{domxref("XRFrame")}} to which this
`XRPose` is aligned. This is the same pose that's returned by the frame's
{{domxref("XRFrame.getPose", "getPose()")}} method.

## Examples

This handler for the {{domxref("XRSession")}} event {{domxref("XRSession.select_event", "select")}} handles events for tracked pointers. It determines the targeted object by
passing the event frame's pose into a function called `findTargetUsingRay()`,
then dispatches the event differently depending on the user's handedness; this is done
by comparing the value of the {{domxref("XRInputSource")}} property
{{domxref("XRInputSource.handedness", "handedness")}} to a value in the variable
`user.handedness`. If the source is a controller in the user's primary hand,
a function is called on the targeted object called `primaryAction()`;
otherwise, it calls the targeted object's `offHandAction()` function.

```js
xrSession.addEventListener("select", (event) => {
  let source = event.inputSource;
  let frame = event.frame;
  let targetRayPose = frame.getPose(source.targetRaySpace, myRefSpace);
  let targetObject = findTargetUsingRay(targetRay.transform.matrix);

  if (source.targetRayMode === "tracked-pointer") {
    if (source.handedness === user.handedness) {
      targetObject.primaryAction();
    } else {
      targetObject.offHandAction();
    }
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
