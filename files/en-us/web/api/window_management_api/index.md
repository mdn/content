---
title: Window Management API
slug: Web/API/Window_Management_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Window.getScreenDetails
spec-urls: https://w3c.github.io/window-management/
---

{{SeeCompatTable}}{{DefaultAPISidebar("Window Management API")}}

The **Window Management API** allows you to get detailed information on the displays connected to your device and more easily place windows on specific screens, paving the way towards more effective multi-screen applications.

## Concepts and usage

Historically, we have used {{domxref("Window.open()")}} to manage browser windows related to the current application — opening new windows, resizing and closing existing windows, etc. For example, to open a 400×300 window 50 pixels from the left and top of your screen:

```js
const myWindow = window.open(
  "https://example.com/",
  "myWindow",
  "left=50,top=50,width=400,height=300",
);
```

You can retrieve information about your screen from the {{domxref("Window.screen")}} property, such as how much screen space you have available to place windows in.

However, the above features are limited. `Window.screen` only returns data about the primary screen, and not secondary displays available to a device. To move a window to a secondary display, you could use {{domxref("Window.moveTo()")}}, but you'd have to guess what coordinates to use based on where it is placed in your setup relative to the primary display.

The Window Management API provides more robust, flexible window management. It allows you to query whether your display is extended with multiple screens and get information on each screen separately: windows can then be placed on each screen as desired. It also provides event handlers to allow you to respond to changes in the available screens, new fullscreen functionality to choose which screen to put into fullscreen mode (if any), and permissions functionality to control access to the API.

For details on how to use it, see [Using the Window Management API](/en-US/docs/Web/API/Window_Management_API/Using).

> [!NOTE]
> In modern browsers, a separate user gesture event is required for each `Window.open()` call, for security purposes. This prevents sites from spamming users with lots of windows. However, this poses an issue for multi-window applications. To work around this limitation, you can design your applications to open no more than one new window at once, reuse existing windows to display different pages, or advise users on how to update their browser settings to allow multiple windows.

### Use cases

The Window Management API is useful in cases such as:

- Multi-window graphics editors and audio processors that may wish to arrange editing tools and panels across different screens.
- Virtual trading desks that want to show market trends in multiple windows and put specific windows of interest in fullscreen mode.
- Slideshow apps that want to show speaker notes on the internal primary screen and the presentation on an external projector.

## Permissions policy integration

The {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy) can be used to control permission to use the Window Management API. Specifically:

- Usage of the {{domxref("Window.getScreenDetails()")}} method. If blocked, its {{jsxref("Promise")}} will reject with a `NotAllowedError` exception.
- Querying the {{domxref("Screen.isExtended", "Window.screen.isExtended")}} property. If blocked, it will always return `false`.

Developers can explicitly grant permission for an {{htmlelement("iframe")}} to use Window Management via the `allow` attribute:

```html
<iframe src="3rd-party.example" allow="window-management"></iframe>
```

## Interfaces

- {{domxref("ScreenDetails")}} {{securecontext_inline}}
  - : Represents the details of all the screens available to the user's device.
- {{domxref("ScreenDetailed")}} {{securecontext_inline}}
  - : Represents detailed information about one specific screen available to the user's device.

### Extensions to other interfaces

- The `Screen` {{domxref("Screen.change_event", "change")}} event {{securecontext_inline}}
  - : Fired on a specific screen when it changes in some way — for example available width or height, or orientation.
- {{domxref("Screen.isExtended")}} {{securecontext_inline}}
  - : A boolean property that returns `true` if the user's device has multiple screens, and `false` if not.
- {{domxref("Element.requestFullscreen()")}}, the `screen` option
  - : Specifies on which screen you want to put the element in fullscreen mode.
- {{domxref("Window.getScreenDetails()")}} {{securecontext_inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("ScreenDetails")}} object instance.

## Examples

You can find full examples here:

- [Basic multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) (see the [source code](https://github.com/mdn/dom-examples/tree/main/window-management-api)).
- [Multi-window Platformer Game](https://googlechromelabs.github.io/multi-window-platformer-game/) (see the [source code](https://github.com/googlechromelabs/multi-window-platformer-game)).
- [Elmer-inspired trading desk demo](https://window-placement.glitch.me/) (see the [source code](https://glitch.com/edit/#!/window-placement)).
- [Window placement demo](https://michaelwasserman.github.io/window-placement-demo/) (see the [source code](https://github.com/michaelwasserman/window-placement-demo)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
