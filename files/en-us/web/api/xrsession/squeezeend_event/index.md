---
title: "XRSession: squeezeend event"
short-title: squeezeend
slug: Web/API/XRSession/squeezeend_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.XRSession.squeezeend_event
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The WebXR event **`squeezeend`** is sent to an {{domxref("XRSession")}} when one of its input sources ends its [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_actions) or when an input source that's in the process of handling an ongoing primary action is disconnected without successfully completing the action.

Primary squeeze actions include things like users pressing triggers or buttons, tapping a touchpad, speaking a command, or performing a recognizable gesture when using a video tracking system or handheld controller with an accelerometer.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("squeezeend", (event) => {});

onsqueezeend = (event) => {};
```

## Event type

An {{domxref("XRInputSourceEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourceEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("XRInputSourceEvent.frame", "frame")}} {{ReadOnlyInline}}
  - : An {{domxref("XRFrame")}} object providing the needed information about the event frame during which the event occurred. This frame may have been rendered in the past rather than being a current frame. Because this is an _event_ frame, not an _animation_ frame, you cannot call {{domxref("XRFrame.getViewerPose", "XRFrame.getViewerPose()")}} on it; instead, use {{domxref("XRFrame.getPose", "getPose()")}}.
- {{domxref("XRInputSourceEvent.inputSource", "inputSource")}} {{ReadOnlyInline}}
  - : An {{domxref("XRInputSource")}} object indicating which input source generated the input event.

## Description

### Trigger

Triggered when users stop squeezing the controller, making a hand gesture that mimes grabbing something, or using (squeezing) a trigger.

### Use cases

The {{domxref("XRSession.squeezestart_event", "squeezestart")}} event is sent indicating that the user has begun a squeeze action.

If the primary squeeze action ends successfully, the session is sent a {{domxref("XRSession.squeeze_event", "squeeze")}} event.

A `squeezeend` event is sent to indicate that the squeeze action is no longer underway. This is sent whether the squeeze action succeeded or not.

## Examples

See the [`squeezestart`](/en-US/docs/Web/API/XRSession/squeezestart_event#examples) event for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
