---
title: "Window: fullScreen property"
short-title: fullScreen
slug: Web/API/Window/fullScreen
page-type: web-api-instance-property
status:
  - non-standard
browser-compat: api.Window.fullScreen
---

{{APIRef}}{{Non-standard_Header}}

The **`fullScreen`** property of the `Window`
interface indicates whether the window is displayed in full screen mode or not.

## Value

A boolean value with `true` meaning that the window is in full-screen mode and `false` meaning it isn't.

## Notes

- Switching between regular window and full screen will fire the "resize" event on the
  corresponding window.

## Examples

```js
if (window.fullScreen) {
  // it's fullscreen!
} else {
  // not fullscreen!
}
```

## Browser compatibility

{{Compat}}
