---
title: "Screen: isExtended property"
short-title: isExtended
slug: Web/API/Screen/isExtended
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Screen.isExtended
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}

The **`isExtended`** read-only property of the
{{domxref("Screen")}} interface returns `true` if the user's device has multiple screens, and `false` if not.

This property is most commonly accessed via `window.screen.isExtended`, and provides a useful test to see if multiple screens are available before attempting to create a multi-window, multi-screen layout using the [Window Management API](/en-US/docs/Web/API/Window_Management_API). However, since {{domxref("ScreenDetailed")}} inherits from `Screen`, `isExtended` is also available on all `ScreenDetailed` object instances contained inside the {{domxref("ScreenDetails")}} object returned by {{domxref("Window.getScreenDetails()")}}. When multiple screens are available, all `isExtended` properties will be `true`.

## Value

A boolean value — `true` if the device has multiple screens, and `false` if not.

## Examples

```js
if (window.screen.isExtended) {
  // Create multi-screen window layout
} else {
  // Create single-screen window layout
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
