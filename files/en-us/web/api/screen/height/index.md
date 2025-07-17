---
title: "Screen: height property"
short-title: height
slug: Web/API/Screen/height
page-type: web-api-instance-property
browser-compat: api.Screen.height
---

{{APIRef("CSSOM")}}

The **`Screen.height`** read-only property returns the height
of the screen in CSS pixels.

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
applications, there is a difference in `window.screen.height` and
`window.screen.availHeight`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
