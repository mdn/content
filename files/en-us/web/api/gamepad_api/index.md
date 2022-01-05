---
title: Gamepad API
slug: Web/API/Gamepad_API
tags:
  - API
  - Experimental
  - Gamepad API
  - Games
  - Overview
---
{{securecontext_header}}{{DefaultAPISidebar("Gamepad API")}}

The **Gamepad API** is a way for developers to access and respond to signals from gamepads and other game controllers in a simple, consistent way. It contains three interfaces, two events and one specialist function, to respond to gamepads being connected and disconnected, and to access other information about the gamepads themselves, and what buttons and other controls are currently being pressed.

## Interfaces

- [`Gamepad`](/en-US/docs/Web/API/Gamepad "The Gamepad interface of the Gamepad API defines an individual gamepad or other controller, allowing access to information such as button presses, axis positions, and id.")
  - : Represents a gamepad/controller connected to the computer.
- [`GamepadButton`](/en-US/docs/Web/API/GamepadButton "The GamepadButton interface defines an individual button of a gamepad or other controller, allowing access to the current state of different types of buttons available on the control device.")
  - : Represents a button on one of the connected controllers.
- [`GamepadEvent`](/en-US/docs/Web/API/GamepadEvent "The GamepadEvent interface of the Gamepad API contains references to gamepads connected to the system, which is what the gamepad events Window.gamepadconnected and Window.gamepaddisconnected are fired in response to.")
  - : The event object representing events fired that are related to gamepads.

### Experimental Gamepad extensions

- [`GamepadHapticActuator`](/en-US/docs/Web/API/GamepadHapticActuator "The GamepadHapticActuator interface of the Gamepad API represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.")
  - : Represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.
- [`GamepadPose`](/en-US/docs/Web/API/GamepadPose "The GamepadPose interface of the Gamepad API represents the pose of a WebVR controller at a given timestamp (which includes orientation, position, velocity, and acceleration information.)")
  - : Represents the pose of a controller (e.g. position and orientation in 3D space) in the case of a [WebVR](/en-US/docs/Web/API/WebVR_API) controller. This is *not* used by the newer [WebXR](/en-US/docs/Web/API/WebXR_Device_API) standard.

See also the [extensions to the Gamepad interface](/en-US/docs/Web/API/Gamepad#experimental_extensions_to_gamepad), for features that allow you to access the above information.

### Extensions to other interfaces

#### Navigator

- {{domxref("Navigator.getGamepads()")}}
  - : An extension to the {{domxref("Navigator")}} object that returns an array of {{domxref("Gamepad")}} objects, one for each connected gamepad.

#### Window events

- {{domxref("Window.ongamepadconnected")}}
  - : Represents an event handler that will run when a gamepad is connected (when the {{event('gamepadconnected')}} event fires).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Represents an event handler that will run when a gamepad is disconnected (when the {{event('gamepaddisconnected')}} event fires).

## Tutorials and guides

- [Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Implementing controls using the Gamepad API](/en-US/docs/Games/Techniques/Controls_Gamepad_API)

## Specifications

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>{{SpecName("GamepadExtensions")}}</td>
      <td>{{Spec2("GamepadExtensions")}}</td>
      <td>
        Defines the {{anch("Experimental Gamepad extensions")}}.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("Gamepad", "", "The Gamepad API specification")}}
      </td>
      <td>{{Spec2("Gamepad")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat("api.Gamepad")}}

## See also

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) by Ted Mielczarek and Robert Nyman
- [Simple API demo page](https://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
