---
title: "ScreenDetailed: devicePixelRatio property"
short-title: devicePixelRatio
slug: Web/API/ScreenDetailed/devicePixelRatio
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScreenDetailed.devicePixelRatio
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}

The **`devicePixelRatio`** read-only property of the
{{domxref("ScreenDetailed")}} interface is a number representing the screen's device pixel ratio. This is the same as the value returned by {{domxref("Window.devicePixelRatio")}} (although that property always returns the device pixel ratio for the {{domxref("ScreenDetails.currentScreen", "current screen", "", "nocode")}}) — see that page for more information about device pixel ratios in general.

## Value

A number.

## Examples

```js
const screenDetails = await window.getScreenDetails();

// Return the device pixel ratio of the first screen
const screen1DPR = screenDetails.screens[0].devicePixelRatio;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
