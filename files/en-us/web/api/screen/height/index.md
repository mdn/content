---
title: Screen.height
slug: Web/API/Screen/height
page-type: web-api-instance-property
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - NeedsMobileBrowserCompatibility
  - Property
  - Reference
browser-compat: api.Screen.height
---
{{APIRef("CSSOM")}}

The **`Screen.height`** read-only property returns the height
of the screen in pixels.

## Value

A number.

## Examples

```js
if (window.screen.availHeight !== window.screen.height) {
   // Something is occupying some screen real estate!
}
```

## Notes

Note that not all of the height given by this property may be available to the window
itself. Widgets such as taskbars or other special application windows that integrate
with the OS (e.g., the Spinner player minimized to act like an additional toolbar on
windows) may reduce the amount of space available to browser windows and other
applications.

Internet Explorer will take into account the zoom setting when reporting the screen
height. It will only return the real height of the screen if the zoom is set to 100%.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
