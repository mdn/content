---
title: "ScreenDetailed: availLeft property"
short-title: availLeft
slug: Web/API/ScreenDetailed/availLeft
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScreenDetailed.availLeft
---

{{APIRef("Window Management API")}}{{seecompattable}}

The **`availLeft`** read-only property of the
{{domxref("ScreenDetailed")}} interface is a number representing the x-coordinate (left-hand edge) of the available screen area inside the OS virtual screen arrangement, relative to the [multi-screen origin](/en-US/docs/Web/API/Window_Management_API#multi-screen_origin).

This is equal to the {{domxref("ScreenDetailed.left")}} property, plus the width of any OS UI element drawn on the left of the screen. Windows cannot be placed in those areas, so `availLeft` is useful for giving you the left boundary of the actual area you've got available.

## Value

A number.

## Examples

```js
const screenDetails = await window.getScreenDetails();

// Return the availLeft value of the first screen
const screen1AvailLeft = screenDetails.screens[0].availLeft;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
