---
title: "ScreenDetailed: availTop property"
short-title: availTop
slug: Web/API/ScreenDetailed/availTop
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScreenDetailed.availTop
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

The **`availTop`** read-only property of the
{{domxref("ScreenDetailed")}} interface is a number representing the y-coordinate (top edge) of the available screen area inside the OS virtual screen arrangement, relative to the [multi-screen origin](/en-US/docs/Web/API/Window_Management_API/Multi-screen_origin).

This is equal to the {{domxref("ScreenDetailed.top")}} property, plus the height of any OS UI element drawn at the top of the screen. Windows cannot be placed in those areas, so `availTop` is useful for giving you the top boundary of the actual area available to open or place windows.

> [!NOTE]
> A non-standard implementation of the `availTop` property is available on the `Screen` interface in all browsers. See the [Non-standard example](#non-standard_example) below for usage details, and see the [`Screen`](/en-US/docs/Web/API/Screen#browser_compatibility) reference page for browser support information relating to the non-standard implementation.

## Value

A number.

## Examples

### Window Management API example

```js
// Available in browsers that support the Window Management API
const screenDetails = await window.getScreenDetails();

// Return the availTop value of the first screen
const screen1AvailTop = screenDetails.screens[0].availTop;
```

### Non-standard example

```js
// Available in all browsers
// Return the availTop value of the current screen
const screenAvailTop = window.screen.availTop;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
