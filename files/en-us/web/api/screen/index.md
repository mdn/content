---
title: Screen
slug: Web/API/Screen
page-type: web-api-interface
browser-compat: api.Screen
---

{{APIRef("CSSOM")}}

The `Screen` interface represents a screen, usually the one on which the current window is being rendered, and is obtained using {{DOMxRef("window.screen")}}.

Note that browsers determine which screen to report as current by detecting which screen has the center of the browser window.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent {{domxref("EventTarget")}}_.

- {{DOMxRef("Screen.availTop")}} {{Non-standard_Inline}}
  - : Specifies the y-coordinate of the first pixel that is not allocated to permanent or semipermanent user interface features.
- {{DOMxRef("Screen.availLeft")}} {{Non-standard_Inline}}
  - : Returns the first available pixel available from the left side of the screen.
- {{DOMxRef("Screen.availHeight")}}
  - : Specifies the height of the screen, in pixels, minus permanent or semipermanent user interface features displayed by the operating system, such as the Taskbar on Windows.
- {{DOMxRef("Screen.availWidth")}}
  - : Returns the amount of horizontal space in pixels available to the window.
- {{DOMxRef("Screen.colorDepth")}}
  - : Returns the color depth of the screen.
- {{DOMxRef("Screen.height")}}
  - : Returns the height of the screen in pixels.
- {{DOMxRef("Screen.left")}} {{Non-standard_Inline}}
  - : Returns the distance in pixels from the left side of the main screen to the left side of the current screen.
- {{DOMxRef("Screen.orientation")}}
  - : Returns the {{DOMxRef("ScreenOrientation")}} instance associated with this screen.
- {{DOMxRef("Screen.pixelDepth")}}
  - : Gets the bit depth of the screen.
- {{DOMxRef("Screen.top")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the distance in pixels from the top side of the current screen.
- {{DOMxRef("Screen.width")}}
  - : Returns the width of the screen.
- {{DOMxRef("Screen.mozEnabled")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Boolean. Setting to false will turn off the device's screen.
- {{DOMxRef("Screen.mozBrightness")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Controls the brightness of a device's screen. A double between 0 and 1.0 is expected.

## Instance methods

_Also inherits methods from its parent {{domxref("EventTarget")}}_.

- {{DOMxRef("Screen.lockOrientation")}} {{Deprecated_Inline}}
  - : Lock the screen orientation (only works in fullscreen or for installed apps)
- {{DOMxRef("Screen.unlockOrientation")}} {{Deprecated_Inline}}
  - : Unlock the screen orientation (only works in fullscreen or for installed apps)

## Events

- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fires when the screen orientation changes.

## Example

```js
if (screen.pixelDepth < 8) {
  // use low-color version of page
} else {
  // use regular, colorful page
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
