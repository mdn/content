---
title: Using the Window Management API
slug: Web/API/Window_Management_API/Using
page-type: guide
---

{{DefaultAPISidebar("Window Management API")}}

This guide explains how to use the [Window Management API](/en-US/docs/Web/API/Window_Management_API). The example code seen below is taken from our [Multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) example (see the [source code](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

## Feature detection

You can feature detect the Window Management API by checking for the existence of `getScreenDetails` in the current `window` instance. For example, you might want to provide a button to open a multi-window display if the API is supported, or a different experience such as creating links to the different pages if it isn't:

```js
if ("getScreenDetails" in window) {
  // The Window Management API is supported
  createButton();
} else {
  // The Window Management API is not supported
  createLinks(sites);
}
```

## Basic usage

The core of the Windows Management API is the {{domxref("Window.getScreenDetails()")}} method, which returns an object containing details of all the screens available to the user's system:

```js
const screenDetails = await window.getScreenDetails();

// Return the number of screens
const noOfScreens = screenDetails.screens.length;
```

When `getScreenDetails()` is invoked, the user will be asked for permission to manage windows on all their displays (the status of this permission can be checked using {{domxref("Permissions.query()")}} to query `window-management`). If the user grants permission, a {{domxref("ScreenDetails")}} object is returned. This object contains the following properties:

- `screens`: An array of {{domxref("ScreenDetailed")}} objects, each one containing detailed information about a separate screen available to the system (see below). This array is also useful for determining the number of available screens, via `screens.length`.
- `currentScreen`: A single {{domxref("ScreenDetailed")}} object containing detailed information about the screen that the current browser window is displayed in.

{{domxref("ScreenDetailed")}} objects inherit the properties of the {{domxref("Screen")}} interface, and contain useful information for placing windows on specific screens.

> [!NOTE]
> You can gate functionality based on whether the user has more than one screen available using the {{domxref("Screen.isExtended", "Window.screen.isExtended")}} property. This returns `true` if the device has multiple screens, and `false` if not.

### Opening windows

You'll still need to use {{domxref("Window.open()")}} to open and manage windows, but the above provides you with better information for doing so in a multi-screen environment. For example, a utility function might look like so:

```js
// Array to hold references to the currently open windows
let windowRefs = [];

// ...

function openWindow(left, top, width, height, url) {
  const windowFeatures = `left=${left},top=${top},width=${width},height=${height}`;
  const windowRef = window.open(
    url,
    "_blank", // needed for it to open in a new window
    windowFeatures,
  );

  if (windowRef === null) {
    // If the browser is blocking new windows, close any windows that were
    // able to open and display instructions to help the user fix this problem
    closeAllWindows();
    popoverElem.showPopover();
  } else {
    // Store a reference to the window in the windowRefs array
    windowRefs.push(windowRef);
  }
}
```

You would then invoke this function and open windows on specific screens like this:

```js
const screen1 = screenDetails.screens[0];
const screen2 = screenDetails.screens[1];
// Windows will be a third the width and the full height of the screen
// The available width of screen1, minus 3 times the horizontal browser chrome
// width, divided by 3
const windowWidth = Math.floor((screen1.availWidth - 3 * WINDOW_CHROME_X) / 3);
// The available height of screen1, minus the vertical browser chrome width
const windowHeight = Math.floor(screen1.availHeight - WINDOW_CHROME_Y);

// Open a window a third of the width and the entire height of the primary screen
openWindow(
  screen1.availLeft,
  screen1.availTop,
  windowWidth,
  windowHeight,
  sites[1].url,
);

// ...
```

### Closing all windows

After opening each window, we add a reference to the `windowRefs` array. This allows you to, for example, close them all when one window is closed:

```js
function closeAllWindows() {
  // Loop through all window refs and close each one
  windowRefs.forEach((windowRef) => {
    windowRef.close();
  });
  windowRefs = [];
}

// Check whether one of our popup windows has been closed
// If so, close them all

closeMonitor = setInterval(checkWindowClose, 250);

function checkWindowClose() {
  if (windowRefs.some((windowRef) => windowRef.closed)) {
    closeAllWindows();
    clearInterval(closeMonitor);
  }
}
```

> [!NOTE]
> In our experiments, the {{domxref("Window.setInterval", "setInterval()")}} polling method shown above seemed to work best for detecting window closure in the case of multiple windows. Using events such as {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/pagehide_event", "pagehide")}}, or {{domxref("Document/visibilitychange_event", "visibilitychange")}} proved unreliable because, when opening multiple windows at the same time, the rapid shift in focus/visibility seemed to fire the handler function prematurely.

> [!NOTE]
> One concern with the above example is that it uses constant values to represent the size of the Chrome window UI portions in the calculations — `WINDOW_CHROME_X` and `WINDOW_CHROME_Y` — to get the window size calculations correct. To create precisely-sized windows on other future implementations of the API, you'd need to keep a small library of browser chrome sizes, and employ browser detection to discover which browser is rendering your app and choose the correct size for calculations. Or you can rely on less precise window sizes.

### Handling browser popup blockers

In modern browsers, a separate user gesture event is required for each `Window.open()` call, for security purposes. This prevents sites from spamming users with lots of windows. However, this poses an issue for multi-window applications. To work around this limitation, you can design your applications to:

- Open no more than one new window at once.
- Reuse existing windows to display different pages.
- Advise users on how to update their browser settings to allow multiple windows.

In our demo application, we have gone for the third option. Our `openWindow()` function contains the following section:

```js
// ...

if (windowRef === null) {
  // If the browser is blocking new windows, close any windows that were
  // able to open and display instructions to help the user fix this problem
  closeAllWindows();
  popoverElem.showPopover();
} else {
  // Store a reference to the window in the windowRefs array
  windowRefs.push(windowRef);
}

// ...
```

If the browser blocks a new window, the resulting `windowRef` will be `null`. In this case we run our `closeAllWindows()` function to close any windows that _did_ manage to open before the blocking started, and show a [popover element](/en-US/docs/Web/API/Popover_API) that explains how to disable the popup blocker.

## Simple single-window per display case

If you want to open a single window on each available display that is the full width and height of the display, you could use a pattern like this:

```js
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

## Window management events

The Window Management API provides some events for responding to changes in the available screens:

- The `ScreenDetails` {{domxref("ScreenDetails.screenschange_event", "screenschange")}} event
  - : Fired when screens are connected to or disconnected from the system.
- The `ScreenDetails` {{domxref("ScreenDetails.currentscreenchange_event", "currentscreenchange")}} event
  - : Fired when the window's current screen changes in some way.
- The `Screen` {{domxref("Screen.change_event", "change")}} event
  - : Fired on a specific screen when it changes in some way.

So for example, you could use the `screenschange` event to detect when the available screens have changed (perhaps when a screen is plugged in or unplugged), report the change, close all windows, and update window arrangements to suit the new configuration:

```js
screenDetails.addEventListener("screenschange", () => {
  // If the new number of screens is different to the old number of screens,
  // report the difference
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

## requestFullscreen() screen option

The Window Management API adds a new `screen` option to the {{domxref("Element.requestFullscreen", "requestFullscreen()")}} method that allows you to specify on which screen you want to put the element in fullscreen mode. For example, if you want to make it fullscreen on the primary OS screen:

```js
try {
  const primaryScreen = (await getScreenDetails()).screens.find(
    (screen) => screen.isPrimary,
  );
  await document.body.requestFullscreen({ screen: primaryScreen });
} catch (err) {
  console.error(err.name, err.message);
}
```
