---
title: ScreenDetails
slug: Web/API/ScreenDetails
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ScreenDetails
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`ScreenDetails`** interface of the [Window Management API](/en-US/docs/Web/API/Window_Management_API) represents the details of all the screens available to the user's device.

This information is accessed via the {{domxref("Window.getScreenDetails()")}} method.

> **Note:** `ScreenDetails` is a live object, meaning that it updates as the available screens change. You can therefore keep querying the same object to get updated values, rather than repeatedly calling `getScreenDetails()`.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("ScreenDetails.currentScreen", "currentScreen")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : A single {{domxref("ScreenDetailed")}} object representing detailed information about the screen that the current browser window is displayed in.

- {{domxref("ScreenDetails.screens", "screens")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : An array of {{domxref("ScreenDetailed")}} objects, each one representing detailed information about one specific screen available to the user's device.

    > **Note:** `screens` only includes "extended" displays, not those that mirror another display.

## Events

- {{domxref("ScreenDetails.currentscreenchange_event", "currentscreenchange")}} {{experimental_inline}}
  - : Fired when the window's current screen changes in some way — for example available width or height, or orientation.
- {{domxref("ScreenDetails.screenschange_event", "screenschange")}} {{experimental_inline}}
  - : Fired when screens are connected to or disconnected from the system.

## Examples

> [!NOTE]
> See [Multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) for a full example (see the [source code](https://github.com/mdn/dom-examples/tree/main/window-management-api) also).

### Basic screen information access

When {{domxref("Window.getScreenDetails()")}} is invoked, the user will be asked for permission to manage windows on all their displays (the status of this permission can be checked using {{domxref("Permissions.query()")}} to query `window-management`). If the user grants permission, a `ScreenDetails` object is returned. This object contains details of all the screens available to the user's system.

The below example opens a full-size window on each available display.

```js
const screenDetails = await window.getScreenDetails();

// Open a window on each screen of the device
for (const screen of screenDetails.screens) {
  openWindow(
    screen.availLeft,
    screen.availTop,
    screen.availWidth,
    screen.availHeight,
    url,
  );
}
```

### Responding to changes in available screens

You could use the `screenschange` event to detect when the available screens have changed (perhaps when a screen is plugged in or unplugged), report the change, and update window arrangements to suit the new configuration:

```js
const screenDetails = await window.getScreenDetails();

// Return the number of screens
let noOfScreens = screenDetails.screens.length;

screenDetails.addEventListener("screenschange", () => {
  // If the new number of screens is different to the old number of screens,
  // report the difference
  if (screenDetails.screens.length !== noOfScreens) {
    console.log(
      `The screen count changed from ${noOfScreens} to ${screenDetails.screens.length}`,
    );

    // Update noOfScreens value
    noOfScreens = screenDetails.screens.length;
  }

  // Open, close, or rearrange windows as needed,
  // to fit the new screen configuration
  updateWindows();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
