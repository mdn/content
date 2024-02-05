---
title: "Screen: width property"
short-title: width
slug: Web/API/Screen/width
page-type: web-api-instance-property
browser-compat: api.Screen.width
---

{{APIRef("CSSOM")}}

The **`Screen.width`** read-only property returns the width of
the screen in CSS pixels.

## Value

A number.

## Examples

```js
// Crude way to check that the screen is at least 1024x768
if (window.screen.width >= 1024 && window.screen.height >= 768) {
  // Resolution is 1024x768 or above
}
```

## Notes

Note that not all of the width given by this property may be available to the window
itself. When other widgets occupy space that cannot be used by the `window`
object, there is a difference in `window.screen.width` and
`window.screen.availWidth`. See also {{DOMxRef("screen.height")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
