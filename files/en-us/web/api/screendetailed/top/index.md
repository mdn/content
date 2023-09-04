---
title: "ScreenDetailed: top property"
short-title: top
slug: Web/API/ScreenDetailed/top
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScreenDetailed.top
---

{{APIRef("Window Management API")}}{{seecompattable}}

The **`top`** read-only property of the
{{domxref("ScreenDetailed")}} interface is a number representing the y-coordinate (top edge) of the total screen area inside the OS virtual screen arrangement, relative to the [multi-screen origin](/en-US/docs/Web/API/Window_Management_API#multi-screen_origin).

This is equal to the true top edge, ignoring any OS UI element drawn at the top of the screen. Windows cannot be placed in those areas; to get the top coordinate of the screen area that windows can be placed in, use {{domxref("ScreenDetailed.availTop")}}.

## Value

A number.

## Examples

```js
const screenDetails = await window.getScreenDetails();

// Return the absolute top value of the first screen
const screen1Top = screenDetails.screens[0].top;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
