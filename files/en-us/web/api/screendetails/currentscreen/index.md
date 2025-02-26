---
title: "ScreenDetails: currentScreen property"
short-title: currentScreen
slug: Web/API/ScreenDetails/currentScreen
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScreenDetails.currentScreen
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`currentScreen`** read-only property of the
{{domxref("ScreenDetails")}} interface contains a single {{domxref("ScreenDetailed")}} object representing detailed information about the screen that the current browser window is displayed in.

## Value

A {{domxref("ScreenDetailed")}} object.

## Examples

```js
// Utility function for opening new windows
function openWindow(left, top, width, height, url) {
  const windowFeatures = `left=${left},top=${top},width=${width},height=${height}`;
  return window.open(url, "_blank", windowFeatures);
}

// Open a new window that fills the available area of the current screen.
const currentScreen = (await window.getScreenDetails()).currentScreen;
console.log(`Opening a window to fill screen ${currentScreen.label}`);
const windowRef = openWindow(
  currentScreen.availLeft,
  currentScreen.availTop,
  currentScreen.availWidth,
  currentScreen.availHeight,
  url,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
