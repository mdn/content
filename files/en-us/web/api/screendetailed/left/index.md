---
title: "ScreenDetailed: left property"
short-title: left
slug: Web/API/ScreenDetailed/left
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScreenDetailed.left
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

The **`left`** read-only property of the
{{domxref("ScreenDetailed")}} interface is a number representing the x-coordinate (left-hand edge) of the total screen area inside the OS virtual screen arrangement, relative to the [multi-screen origin](/en-US/docs/Web/API/Window_Management_API/Multi-screen_origin).

This is equal to the true left-hand edge, ignoring any OS UI element drawn at the left of the screen. Windows cannot be placed in those areas; to get the left-hand coordinate of the screen area that windows can be placed in, use {{domxref("ScreenDetailed.availLeft")}}.

> [!NOTE]
> In Firefox, a non-standard implementation of the `left` property is available on the `Screen` interface. See the [Non-standard example](#non-standard_example) below for usage details, and see the [`Screen`](/en-US/docs/Web/API/Screen#browser_compatibility) reference page for browser support information relating to the non-standard implementation.

## Value

A number.

## Examples

### Window Management API example

```js
// Available in browsers that support the Window Management API
const screenDetails = await window.getScreenDetails();

// Return the absolute left value of the first screen
const screen1Left = screenDetails.screens[0].left;
```

### Non-standard example

```js
// Available in Firefox
// Return the absolute left value of the current screen
const screenLeft = window.screen.left;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
