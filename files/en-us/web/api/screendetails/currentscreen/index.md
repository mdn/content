---
title: "ScreenDetails: currentScreen property"
short-title: currentScreen
slug: Web/API/ScreenDetails/currentScreen
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScreenDetails.currentScreen
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}

The **`currentScreen`** read-only property of the
{{domxref("ScreenDetails")}} interface contains a single {{domxref("ScreenDetailed")}} object representing detailed information about the screen that the current browser window is displayed in.

## Value

A {{domxref("ScreenDetailed")}} object.

## Examples

```js
// Utility function for opening new windows
function openWindow(left, top, width, height, url) {
  const windowFeatures = `left=${left},top=${top},width=${width},height=${height}`;
  const windowRef = window.open(
    url,
    Math.random().toString(), // a target is needed for it to open as a separate window rather than a tab
    windowFeatures,
  );

  // Store a reference to the window in a windowRefs array
  windowRefs.push(windowRef);
}

// Constants to represent the width and height of the Chrome UI when calculating the window size to open
const WINDOW_CHROME_Y = 51;
const WINDOW_CHROME_X = 1;

const screenDetails = await window.getScreenDetails();

// Return the current screen
const curScreen = screenDetails.currentScreen;

// Windows will be a third the width and the full height of the current screen
let windowWidth = Math.floor((curScreen.availWidth - 3 * WINDOW_CHROME_X) / 3);
let windowHeight = Math.floor(curScreen.availHeight - WINDOW_CHROME_Y);

// Open the reference windows in thirds across the entire height of the current screen
openWindow(
  curScreen.availLeft,
  curScreen.availTop,
  windowWidth,
  windowHeight,
  sites[1].url,
);

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
