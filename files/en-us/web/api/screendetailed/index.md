---
title: ScreenDetailed
slug: Web/API/ScreenDetailed
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ScreenDetailed
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}

The **`ScreenDetailed`** interface of the [Window Management API](/en-US/docs/Web/API/Window_Management_API) represents detailed information about one specific screen available to the user's device.

`ScreenDetailed` objects can be accessed via the {{domxref("ScreenDetails.screens")}} and {{domxref("ScreenDetails.currentScreen")}} properties.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Screen")}}._

- {{domxref("ScreenDetailed.availLeft", "availLeft")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the x-coordinate (left-hand edge) of the available screen area.
- {{domxref("ScreenDetailed.availTop", "availTop")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the y-coordinate (top edge) of the available screen area.
- {{domxref("ScreenDetailed.devicePixelRatio", "devicePixelRatio")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the screen's device pixel ratio.
- {{domxref("ScreenDetailed.isInternal", "isInternal")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A boolean indicating whether the screen is internal to the device or external.
- {{domxref("ScreenDetailed.isPrimary", "isPrimary")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A boolean indicating whether the screen is set as the operating system (OS) primary screen or not.
- {{domxref("ScreenDetailed.label", "label")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string providing a descriptive label for the screen, for example "Built-in Retina Display".
- {{domxref("ScreenDetailed.left", "left")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the x-coordinate (left-hand edge) of the total screen area.
- {{domxref("ScreenDetailed.top", "top")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A number representing the y-coordinate (top edge) of the total screen area.

## Examples

When {{domxref("Window.getScreenDetails()")}} is invoked, the user will be asked for permission to manage windows on all their displays (the status of this permission can be checked using {{domxref("Permissions.query()")}} to query `window-management`). Provided they grant permission, the resulting {{domxref("ScreenDetails")}} object contains details of all the screens available to the user's system.

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
    "_blank", // needed for it to open in a new window
    windowFeatures,
  );

  // Store a reference to the window in the windowRefs array for later use
  windowRefs.push(windowRef);
}
```

Each item inside the {{domxref("ScreenDetails.screens")}} array is a `ScreenDetailed` object, which can be used to place a window on a specific screen available to the current device.

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

> **Note:** See [Multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) for a full example (see the [source code](https://github.com/mdn/dom-examples/tree/main/window-management-api) also).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
