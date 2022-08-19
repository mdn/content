---
title: XRInputSource.gamepad
slug: Web/API/XRInputSource/gamepad
page-type: web-api-instance-property
tags:
  - API
  - AR
  - Augmented Reality
  - Property
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XRInputSource
browser-compat: api.XRInputSource.gamepad
---
{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRInputSource")}} property **`gamepad`** returns a {{domxref("Gamepad")}} object describing the state of the buttons and axes on the XR input source, if it is a gamepad or comparable device. If the device isn't a gamepad-like device, this property's value is `null`.

The {{domxref("Gamepad")}} instance returned behaves as described by the [Gamepad API](/en-US/docs/Web/API/Gamepad_API). However, there are a few things to note:

- `XRInputSource` `Gamepad` instances are not included in the array returned by {{domxref("navigator.getGamepads()")}}. Gamepads are strictly associated with the WebXR hardware and are not general-purpose gaming devices.
- {{domxref("Gamepad.id")}} is an empty string (`""`)
- {{domxref("Gamepad.index")}} is `-1`
- {{domxref("Gamepad.connected")}} is `true` until the `XRInputSource` is removed from the list of active XR input sources or the {{domxref("XRSession")}} is ended.
- If an axis reported by {{domxref("Gamepad.axes")}} represents an axis of a touchpad, the value is 0 when the associated {{domxref("GamepadButton.touched")}} property is `false`.
- {{domxref("Gamepad.mapping")}} returns "xr-standard".

## Examples

### Using a gamepad input source

```js
for (const source of frame.session.inputSources) {
  const gamepad = source.gamepad;
  if (gamepad) {
    if (gamepad.buttons[2].pressed) {
      // do something
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
