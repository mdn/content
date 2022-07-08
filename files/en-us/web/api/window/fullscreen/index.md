---
title: Window.fullScreen
slug: Web/API/Window/fullScreen
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - NeedsMarkupWork
  - Non-standard
  - Property
  - Reference
  - Window
browser-compat: api.Window.fullScreen
---
{{APIRef}}{{Non-standard_Header}}

The **`fullScreen`** property of the `Window`
interface indicates whether the window is displayed in full screen mode or not.

With chrome privileges, the property is read-write, otherwise it is read-only. Bear in
mind that if you try to set this property without chrome privileges, it will not throw
an exception and instead just silently fail. This is to prevent scripts designed to set
this property in Internet Explorer from breaking.

## Value

A boolean value with `true` meaning that the window is in full-screen mode and `false` meaning it isn't.

## Notes

- Switching between regular window and full screen will fire the "resize" event on the
  corresponding window.

## Examples

```js
if (window.fullScreen) {
  // it's fullscreen!
}
else {
  // not fullscreen!
}
```

## Browser compatibility

{{Compat}}
