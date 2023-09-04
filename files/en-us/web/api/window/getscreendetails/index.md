---
title: "Window: getScreenDetails() method"
short-title: getScreenDetails()
slug: Web/API/Window/getScreenDetails
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Window.getScreenDetails
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}

The **`getScreenDetails()`** method of the
{{domxref("Window")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("ScreenDetails")}} object instance representing the details of all the screens available to the user's device.

## Syntax

```js-nolint
getScreenDetails()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("ScreenDetails")}} object instance.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if a {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy) is set that blocks use of the [Window Management API](/en-US/docs/Web/API/Window_Management_API), or if the user has explicitly denied the browser's permission request to use the API.

## Examples

When `getScreenDetails()` is invoked, the user will be asked for permission to manage windows on all their displays (the status of this permission can be checked using {{domxref("Permissions.query()")}} to query `window-management`). Provided they grant permission, the resulting {{domxref("ScreenDetails")}} object contains details of all the screens available to the user's system.

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

> **Note:** See [Multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) for a full example (see the [source code](https://github.com/mdn/dom-examples/tree/main/window-management-api) also).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
