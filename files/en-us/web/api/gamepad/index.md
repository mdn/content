---
title: Gamepad
slug: Web/API/Gamepad
page-type: web-api-interface
browser-compat: api.Gamepad
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

The **`Gamepad`** interface of the [Gamepad API](/en-US/docs/Web/API/Gamepad_API) defines an individual gamepad or other controller, allowing access to information such as button presses, axis positions, and id.

A Gamepad object can be returned in one of two ways: via the `gamepad` property of the {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} and {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} events, or by grabbing any position in the array returned by the {{domxref("Navigator.getGamepads()")}} method.

## Instance properties

- {{domxref("Gamepad.axes")}} {{ReadOnlyInline}}
  - : An array representing the controls with axes present on the device (e.g. analog thumb sticks).
- {{domxref("Gamepad.buttons")}} {{ReadOnlyInline}}
  - : An array of {{domxref("gamepadButton")}} objects representing the buttons present on the device.
- {{domxref("Gamepad.connected")}} {{ReadOnlyInline}}
  - : A boolean indicating whether the gamepad is still connected to the system.
- {{domxref("Gamepad.displayId")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the {{domxref("VRDisplay.displayId")}} of an associated {{domxref("VRDisplay")}} (if relevant) — the `VRDisplay` that the gamepad is controlling the displayed scene of.
- {{domxref("Gamepad.hand")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An enum defining what hand the controller is being held in, or is most likely to be held in.
- {{domxref("Gamepad.hapticActuators")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An array containing {{domxref("GamepadHapticActuator")}} objects, each of which represents haptic feedback hardware available on the controller.
- {{domxref("Gamepad.vibrationActuator")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : A {{domxref("GamepadHapticActuator")}} object, which represents haptic feedback hardware available on the controller.
- {{domxref("Gamepad.id")}} {{ReadOnlyInline}}
  - : A string containing identifying information about the controller.
- {{domxref("Gamepad.index")}} {{ReadOnlyInline}}
  - : An integer that is auto-incremented to be unique for each device currently connected to the system.
- {{domxref("Gamepad.mapping")}} {{ReadOnlyInline}}
  - : A string indicating whether the browser has remapped the controls on the device to a known layout.
- {{domxref("Gamepad.pose")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("GamepadPose")}} object representing the pose information associated with a WebVR controller (e.g. its position and orientation in 3D space).
- {{domxref("Gamepad.timestamp")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the last time the data for this gamepad was updated.

## Example

```js
window.addEventListener("gamepadconnected", (e) => {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API)
