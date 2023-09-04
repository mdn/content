---
title: ScreenDetails
slug: Web/API/ScreenDetails
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ScreenDetails
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}

The **`ScreenDetails`** interface of the [Window Management API](/en-US/docs/Web/API/Window_Management_API) represents the details of all the screens available to the user's device.

This information is accessed via the {{domxref("Window.getScreenDetails()")}} method.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("ScreenDetails.screens", "screens")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An array of {{domxref("ScreenDetailed")}} objects, each one representing detailed information about one specific screen available to the user's device.
- {{domxref("ScreenDetails.currentScreen", "currentScreen")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A single {{domxref("ScreenDetailed")}} object representing detailed information about the screen that the current browser window is displayed in.

## Events

- {{domxref("ScreenDetails.screenschange_event", "screenschange")}} {{experimental_inline}}
  - : Fired when the screens available to the system change in some way — for example when a screen is added or removed.
- {{domxref("ScreenDetails.currentscreenchange_event", "currentscreenchange")}} {{experimental_inline}}
  - : Fired when the current screen changes in some way — for example available width or height, or orientation.

## Examples

> **Note:** See [Multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) for a full example (see the [source code](https://github.com/mdn/dom-examples/tree/main/window-management-api) also).

### Basic screen information access

When {{domxref("Window.getScreenDetails()")}} is invoked, the user will be asked for permission to manage windows on all their displays (the status of this permission can be checked using {{domxref("Permissions.query()")}} to query `window-management`). Provided they grant permission, the resulting `ScreenDetails` object contains details of all the screens available to the user's system.

```js
const screenDetails = await window.getScreenDetails();

// Return the number of screens
const noOfScreens = screenDetails.screens.length;
```

You'll still need to use {{domxref("Window.open()")}} to open and manage windows, but the above provides you with better information for doing so in a multi-screen environment. For example, a utility function might look like so:

```js
function openWindow(left, top, width, height, url) {
  const windowFeatures = `left=${left},top=${top},width=${width},height=${height}`;
  const windowRef = window.open(
    url,
    Math.random().toString(), // a target is needed for it to open as a separate window rather than a tab
    windowFeatures,
  );

  // Store a reference to the window in the windowRefs array
  windowRefs.push(windowRef);
}
```

You would then invoke this function and open windows on specific screens like this:

```js
const screen1 = screenDetails.screens[0];
const screen2 = screenDetails.screens[1];
// Windows will be a third the width and the full height of the screen
let windowWidth = Math.floor((screen1.availWidth - 3 * WINDOW_CHROME_X) / 3);
let windowHeight = Math.floor(screen1.availHeight - WINDOW_CHROME_Y);

// Open the reference windows in thirds across the entire height of the primary screen
openWindow(
  screen1.availLeft,
  screen1.availTop,
  windowWidth,
  windowHeight,
  sites[1].url,
);

// ...
```

### Responding to changes in available screens

You could use the `screenschange` event to detect when the available screens have changed (perhaps when a screen is plugged in or unplugged), report the change, close all windows, and then reopen them all to suit the new configuration:

```js
screenDetails.addEventListener("screenschange", () => {
  // If the new number of screens is different to the old number of screens, report the difference
  if (screenDetails.screens.length !== noOfScreens) {
    console.log(
      `The screen count changed from ${noOfScreens} to ${screenDetails.screens.length}`,
    );
  }

  // If the windows are open, close them and then open them again
  // So that they fit with the new screen configuration
  if (windowRefs.length > 0) {
    closeAllWindows();
    openWindows();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
