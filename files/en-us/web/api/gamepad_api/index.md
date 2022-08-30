---
title: Gamepad API
slug: Web/API/Gamepad_API
page-type: web-api-overview
tags:
  - API
  - Gamepad API
  - Games
  - Overview
browser-compat: api.Gamepad
---
{{securecontext_header}}{{DefaultAPISidebar("Gamepad API")}}

The **Gamepad API** is a way for developers to access and respond to signals from gamepads and other game controllers in a simple, consistent way. It contains three interfaces, two events and one specialist function, to respond to gamepads being connected and disconnected, and to access other information about the gamepads themselves, and what buttons and other controls are currently being pressed.

## Interfaces

- [`Gamepad`](/en-US/docs/Web/API/Gamepad)
  - : Represents a gamepad/controller connected to the computer.
- [`GamepadButton`](/en-US/docs/Web/API/GamepadButton)
  - : Represents a button on one of the connected controllers.
- [`GamepadEvent`](/en-US/docs/Web/API/GamepadEvent)
  - : The event object representing events fired that are related to gamepads.

### Experimental Gamepad extensions

- [`GamepadHapticActuator`](/en-US/docs/Web/API/GamepadHapticActuator)
  - : Represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.
- [`GamepadPose`](/en-US/docs/Web/API/GamepadPose)
  - : Represents the pose of a controller (e.g. position and orientation in 3D space) in the case of a [WebVR](/en-US/docs/Web/API/WebVR_API) controller. This is _not_ used by the newer [WebXR](/en-US/docs/Web/API/WebXR_Device_API) standard.

See also the [extensions to the Gamepad interface](/en-US/docs/Web/API/Gamepad#experimental_extensions_to_gamepad), for features that allow you to access the above information.

### Extensions to other interfaces

#### Navigator

- {{domxref("Navigator.getGamepads()")}}
  - : An extension to the {{domxref("Navigator")}} object that returns an array of {{domxref("Gamepad")}} objects, one for each connected gamepad.

#### Window events

- {{domxref("Window.gamepadconnected_event", "gamepadconnected")}}
  - : An event that will fire when a gamepad is connected.
- {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}}
  - : An event that will fire when a gamepad is disconnected.

## Tutorials and guides

- [Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Implementing controls using the Gamepad API](/en-US/docs/Games/Techniques/Controls_Gamepad_API)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) by Ted Mielczarek and Robert Nyman
- [Simple API demo page](https://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
