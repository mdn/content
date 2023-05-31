---
title: "XRSession: inputSources property"
short-title: inputSources
slug: Web/API/XRSession/inputSources
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRSession.inputSources
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The read-only **`inputSources`** property of the
{{DOMxRef("XRSession")}} interface returns an {{domxref("XRInputSourceArray")}} object
which lists all controllers and input devices which are expressly associated with the
XR device and are currently available. These controllers may include handheld
controllers, XR-equipped gloves, optically tracked hands, and gaze-based input methods.
Keyboards, gamepads, and mice are _not_ considered WebXR input sources.

> **Note:** Traditional gamepad controllers are supported using the [Gamepad API](/en-US/docs/Web/API/Gamepad_API).

## Value

An {{domxref("XRInputSourceArray")}} object listing all of the currently-connected
input controllers which are linked specifically to the XR device currently in use. The
returned object is **live**; as devices are connected to and removed from
the user's system, the list's contents update to reflect the changes.

## Usage notes

You can add a handler for the `XRSession` event
{{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} to be advised
when the contents of the session's connected devices list changes. You can then either
get the value of `inputSources` to examine the list, or you can refer to a
reference to the list that you've previously saved.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("XRInputSource")}}
- The {{DOMxRef("XRSession.inputsourceschange_event", "inputsourceschange")}} event
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
