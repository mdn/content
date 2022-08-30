---
title: 'XRSession: selectend event'
slug: Web/API/XRSession/selectend_event
page-type: web-api-event
tags:
  - API
  - AR
  - Event
  - Input Sources
  - Inputs
  - Mixed
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRSession
  - augmented
  - controllers
  - selectend
  - Experimental
browser-compat: api.XRSession.selectend_event
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The WebXR event **`selectend`** is sent to an {{domxref("XRSession")}} when one of its input sources ends its [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_actions) or when an input source that's in the process of handling an ongoing primary action is disconnected without successfully completing the action.

The {{domxref("Element.beforexrselect_event", "beforexrselect")}} is fired before this event and can prevent this event from being raised.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('selectend', (event) => { })

onselectend = (event) => { }
```

## Event type

An {{domxref("XRInputSourceEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourceEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("XRInputSourceEvent.frame", "frame")}} {{ReadOnlyInline}}
  - : An {{domxref("XRFrame")}} object providing the needed information about the event frame during which the event occurred. This frame may have been rendered in the past rather than being a current frame. Because this is an _event_ frame, not an _animation_ frame, you cannot call the {{domxref("XRFrame")}} method {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} on it; instead, use {{domxref("XRFrame.getPose", "getPose()")}}.
- {{domxref("XRInputSourceEvent.inputSource", "inputSource")}} {{ReadOnlyInline}}
  - : An {{domxref("XRInputSource")}} object indicating which input source generated the input event.

## Description

### Trigger

Triggered when the user stops to press triggers or buttons, taps a touchpad, speaks a command, or performs a recognizable gesture when using a video tracking system or handheld controller with an accelerometer.

### Use cases

The `selectend` and {{domxref("XRSession.selectstart_event", "selectstart")}} events tell you when you might want to display something to the user indicating that the primary action is going on. This might be drawing a controller with the activated button in a new color, or showing the targeted object being grabbed and moved around, starting when `selectstart` arrives and stopping when `selectend` is received.

The {{domxref("XRSession.select_event", "select")}} event is the event that tells your code that the user has completed the action they want to complete. This might be as simple as throwing an object or pulling the trigger of a gun in a game, or as involved as placing a dragged object in a new location.

If your primary action is a simple trigger action and you don't need to animate anything while the trigger is engaged, you can ignore the `selectstart` and `selectend` events and act on the start event.

## Examples

See the [`selectstart`](/en-US/docs/Web/API/XRSession/selectstart_event#examples) event for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession.select_event", "select")}} and {{domxref("XRSession.selectstart_event", "selectstart")}}
- {{domxref("Element.beforexrselect_event", "beforexrselect")}}
