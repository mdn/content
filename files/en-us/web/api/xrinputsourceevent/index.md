---
title: XRInputSourceEvent
slug: Web/API/XRInputSourceEvent
page-type: web-api-interface
browser-compat: api.XRInputSourceEvent
---

{{APIRef("WebXR Device API")}} {{SecureContext_Header}}

The [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)'s **`XRInputSourceEvent`** interface describes an event which has occurred on a WebXR user input device such as a hand controller, gaze tracking system, or motion tracking system. More specifically, they represent a change in the state of an {{domxref("XRInputSource")}}.

To learn more about handling inputs in a WebXR project, see the article [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs).

{{InheritanceDiagram}}

## Constructor

- {{domxref("XRInputSourceEvent.XRInputSourceEvent", "XRInputSourceEvent()")}}
  - : Creates and returns a new `XRInputSourceEvent` object whose properties match those provided in the `eventInitDict` dictionary provided.

## Instance properties

- {{domxref("XRInputSourceEvent.frame", "frame")}} {{ReadOnlyInline}}
  - : An {{domxref("XRFrame")}} object providing the needed information about the event frame during which the event occurred. This frame may have been rendered in the past rather than being a current frame. Because this is an _event_ frame, not an _animation_ frame, you cannot call the {{domxref("XRFrame")}} method {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} on it; instead, use {{domxref("XRFrame.getPose", "getPose()")}}.
- {{domxref("XRInputSourceEvent.inputSource", "inputSource")}} {{ReadOnlyInline}}
  - : An {{domxref("XRInputSource")}} object indicating which input source generated the input event.

## Instance methods

_The `XRInputSourceEvent` interface doesn't define any methods; however, several methods are inherited from the parent interface, {{domxref("Event")}}._

## Event types

- {{domxref("XRSession.select_event", "select")}}
  - : Sent to an {{domxref("XRSession")}} when the sending input source has fully completed a [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_actions).
- {{domxref("XRSession.selectend_event", "selectend")}}
  - : Sent to an {{domxref("XRSession")}} when an ongoing [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_actions) ends, or when an input source with an ongoing primary action has been disconnected from the system.
- {{domxref("XRSession.selectstart_event", "selectstart")}}
  - : Sent to an {{domxref("XRSession")}} when an input source begins its [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_actions), indicating that the user has begun a command-like input, such as pressing a trigger or button, issuing a spoken command, tapping on a touchpad, or the like.
- {{domxref("XRSession.squeeze_event", "squeeze")}}
  - : Sent to an {{domxref("XRSession")}} when the sending input source has fully completed a [primary squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_actions).
- {{domxref("XRSession.squeezeend_event", "squeezeend")}}
  - : Sent to an {{domxref("XRSession")}} when an ongoing [primary squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_actions) ends or when an input source with an ongoing primary squeeze action is disconnected.
- {{domxref("XRSession.squeezestart_event", "squeezestart")}}
  - : Sent to an {{domxref("XRSession")}} when an input source begins its [primary squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_actions), indicating that the user has begun to grab, squeeze, or grip the controller.

## Examples

The code below sets up handlers for primary action events in order to determine when the user clicks on (shoots at/pokes at/whatever) objects in the scene.

```js
xrSession.addEventListener("select", (event) => {
  let targetRayPose = event.frame.getPose(
    event.inputSource.targetRaySpace,
    myRefSpace,
  );

  if (targetRayPose) {
    let hit = myHitTest(targetRayPose.transform);
    if (hit) {
      /* handle the hit */
    }
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
