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

- {{DOMxRef("Screen.availHeight")}}
  - : Specifies the height of the screen, in pixels, minus permanent or semipermanent user interface features displayed by the operating system, such as the Taskbar on Windows.
- {{DOMxRef("Screen.availWidth")}}
  - : Returns the amount of horizontal space in pixels available to the window.
- {{DOMxRef("Screen.colorDepth")}}
  - : Returns the color depth of the screen.
- {{DOMxRef("Screen.height")}}
  - : Returns the height of the screen in pixels.
- {{domxref("Screen.isExtended")}} {{experimental_inline}} {{securecontext_inline}}
  - : Returns `true` if the user's device has multiple screens, and `false` if not.
- {{DOMxRef("Screen.orientation")}}
  - : Returns the {{DOMxRef("ScreenOrientation")}} instance associated with this screen.
- {{DOMxRef("Screen.pixelDepth")}}
  - : Gets the bit depth of the screen.
- {{DOMxRef("Screen.width")}}
  - : Returns the width of the screen.
- {{DOMxRef("Screen.mozEnabled")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Boolean. Setting to false will turn off the device's screen.
- {{DOMxRef("Screen.mozBrightness")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Controls the brightness of a device's screen. A double between 0 and 1.0 is expected.

## Non-standard properties

The following properties are specified as part of the [Window Management API](/en-US/docs/Web/API/Window_Management_API), which makes them available on the {{domxref("ScreenDetailed")}} interface; this is where we have chosen to document them. However, non-standard versions of these properties are available on the `Screen` interface in browsers that don't support that API. See this page's [Browser compatibility](#browser_compatibility) table for details of the non-standard support.

- {{domxref("ScreenDetailed.availLeft", "Screen.availLeft")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : A number representing the x-coordinate (left-hand edge) of the available screen area.
- {{domxref("ScreenDetailed.availTop", "Screen.availTop")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : A number representing the y-coordinate (top edge) of the available screen area.
- {{domxref("ScreenDetailed.left", "Screen.left")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : A number representing the x-coordinate (left-hand edge) of the total screen area.
- {{domxref("ScreenDetailed.top", "Screen.top")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{deprecated_inline}} {{SecureContext_Inline}}
  - : A number representing the y-coordinate (top edge) of the total screen area.

## Instance methods

_Also inherits methods from its parent {{domxref("EventTarget")}}_.

- {{DOMxRef("Screen.lockOrientation")}} {{Deprecated_Inline}}
  - : Lock the screen orientation (only works in fullscreen or for installed apps)
- {{DOMxRef("Screen.unlockOrientation")}} {{Deprecated_Inline}}
  - : Unlock the screen orientation (only works in fullscreen or for installed apps)

## Events

- {{domxref("Screen.change_event", "change")}} {{experimental_inline}} {{securecontext_inline}}
  - : Fired on a specific screen when it changes in some way — width or height, available width or height, color depth, or orientation.
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fires when the screen orientation changes.

## Examples

```js
if (screen.colorDepth < 8) {
  // use low-color version of page
} else {
  // use regular, colorful page
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
