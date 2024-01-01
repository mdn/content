---
title: "Window: screen property"
short-title: screen
slug: Web/API/Window/screen
page-type: web-api-instance-property
browser-compat: api.Window.screen
---

{{APIRef("CSSOM")}}

The {{DOMxRef("Window")}} property **`screen`** returns a
reference to the screen object associated with the window. The `screen`
object, implementing the {{DOMxRef("Screen")}} interface, is a special object for
inspecting properties of the screen on which the current window is being rendered.

## Value

A {{DOMxRef("Screen")}} object.

## Examples

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
