---
title: "Element: requestFullscreen() method"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
page-type: web-api-instance-method
browser-compat: api.Element.requestFullscreen
---

{{APIRef("Fullscreen API")}}

The **`requestFullscreen()`** method of the {{domxref("Element")}} interface issues an asynchronous request to display the element in fullscreen mode.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object that controls the behavior of the transition to fullscreen mode.
    The available options are:
    - `keyboardLock` {{optional_inline}}
      - : Controls the selected keyboard lock mode.
        - `"none"`
          - : No keyboard lock is applied.
            This is the default mode.
        - `"browser"`
          - : Browser keyboard lock mode is applied.
            In this mode, the browser forwards keyboard events to the application that would normally be handled by browser or system code.
            Applications should intercept events for the keys and key combinations they want to use, and call [`preventDefault()`](/en-US/docs/Web/API/Event/preventDefault) to cancel any default actions.

            Note that some browsers may disable the default action for some keys, such as the key that is normally used to exit fullscreen mode; this is not guaranteed, so you should always call `preventDefault()`.
            Browsers are also encouraged to provide a mechanism to exit fullscreen mode with keyboard lock.

            For more information see the [Keyboard locking](#keyboard_locking) section below.

    - `navigationUI` {{optional_inline}}
      - : Controls whether or not to show navigation UI while the element is in fullscreen mode.
        The default value is `"auto"`, which indicates that the browser should decide what to do.
        - `"hide"`
          - : The browser's navigation interface will be hidden and the entire dimensions of the screen will be allocated to the display of the element.
        - `"show"`
          - : The browser will present page navigation controls and possibly other user interface; the dimensions of the element (and the perceived size of the screen) will be clamped to leave room for this user interface.
        - `"auto"`
          - : The browser will choose which of the above settings to apply.
            This is the default value.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Specifies on which screen you want to put the element in fullscreen mode.
        This takes a {{domxref("ScreenDetailed")}} object as a value, representing the chosen screen.

### Return value

A {{JSxRef("Promise")}} which is resolved with a value of `undefined` when the transition to full screen is complete, or rejects with an exception.

### Exceptions

On error the returned `Promise` rejects with one of the following values:

- {{jsxref("TypeError")}}
  - : The `TypeError` exception may be delivered in any of the following situations:
    - The document containing the element isn't fully active; that is, it's not the current active document.
    - The element is not contained by a document.
    - The element is not permitted to use the `fullscreen` feature, either because of [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) configuration or other access control features.
    - The element and its document are the same node.
    - The element is a [popover](/en-US/docs/Web/API/Popover_API) that is already being shown via {{domxref("HTMLElement.showPopover()")}}.

- `NotSupportedError` {{domxref("DOMException")}}
  - : The passed `options.keyboardLock` parameter is not supported by the browser.

## Description

The **`requestFullscreen()`** method issues an asynchronous request to display the element in fullscreen mode.

The method requires permission.

- If permission to enter full screen mode is granted, the returned {{JSxRef("Promise")}} will resolve and the element will receive a {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} event to let it know that it's now in full screen mode.
- If permission is denied, the promise is rejected and the element receives a {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} event instead.

If the element has been detached from the original document, then the document receives these events instead.

### Compatible elements

An element that you wish to place into fullscreen mode has to meet a small number of simple requirements:

- It must be one of the standard HTML elements or {{SVGElement("svg")}} or {{MathMLElement("math")}}.
- It is _not_ a {{HTMLElement("dialog")}} element.
- It must either be located within the top-level document or in an {{HTMLElement("iframe")}} which has the [`allowfullscreen`](/en-US/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) attribute applied to it.

Additionally, any set {{httpheader("Permissions-Policy")}} must allow the use of the `fullscreen` feature.

### Detecting fullscreen activation

You can determine whether or not your attempt to switch to fullscreen mode is successful by using the {{jsxref("Promise")}} returned by `requestFullscreen()`, as seen in the [examples](#examples) below.

To learn when other code has toggled fullscreen mode on and off, you should establish listeners for the {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} event on the {{domxref("Document")}}.
It's also important to listen for `fullscreenchange` to be aware when, for example, the user manually toggles fullscreen mode, or when the user switches applications, causing your application to temporarily exit fullscreen mode.

### Keyboard locking

Keyboard locking allows a fullscreen application to intercept and handle some keys and key combinations that would otherwise be exclusively handled by the browser or the underlying OS.
This can improve the user experience for games, for example, by allowing the <kbd>Esc</kbd> key to be used as a menu key instead of exiting fullscreen mode.
It can also be useful for applications such as remote desktop control, where you want almost all key events to be forwarded to the remote computer.

The keyboard lock is activated by passing a keyboard lock mode value of `"browser"` to the [`options.keyboardLock`](#keyboardlock) parameter when activating fullscreen mode.
When keyboard lock is active in fullscreen mode the browser will redirect "many more" keyboard events to the application — the precise set of keys is browser dependent.
The web application should handle the event by first calling [`preventDefault()`](/en-US/docs/Web/API/Event/preventDefault) to cancel its default action.
Some key combinations are used for system control or have privacy risks, and hence cannot be intercepted and disabled using this mechanism (for example, <kbd>Ctrl+Alt+Delete</kbd> on Windows).

Note that some browsers always disable the default action for the <kbd>Esc</kbd> key when in keyboard lock, so that pressing it doesn't automatically exit fullscreen mode.
However, as this is not guaranteed, you will still need to call `preventDefault()` to stop <kbd>Esc</kbd> key presses from exiting fullscreen mode.
More generally, you can't assume that the default action for any keyboard event is disabled by default.

Browsers are expected to provide an alternative mechanism for exiting fullscreen mode when keyboard lock is enabled.
Most browsers use the <kbd>Esc</kbd> key to exit normal fullscreen mode, and a long-press <kbd>Esc</kbd> key to exit keyboard lock.
The keyboard lock is disabled when the browser exits fullscreen mode.

### Security considerations

[Transient user activation](/en-US/docs/Web/Security/Defenses/User_activation) is required.
The user has to interact with the page or a UI element in order for this feature to work.

Fullscreen mode is controlled by the [Permissions-Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) directive {{HTTPHeader("Permissions-Policy/fullscreen","fullscreen")}}.

The default allowlist for `screen-wake-lock` is `self`.
This allows fullscreen usage in same-origin nested frames but prevents them in third-party content.
Third party usage can be enabled by the server first setting the `Permissions-Policy` header to grant permission a particular third party origin.

```http
Permissions-Policy: fullscreen=(self b.example.com)
```

Then the `allow="fullscreen"` attribute must be added to the frame container element for sources from that origin:

```html
<iframe src="https://b.example.com" allow="fullscreen"></iframe>
```

The [Permissions API](/en-US/docs/Web/API/Permissions_API) `fullscreen` permission can be used to test whether access to use the mode is `granted`, `denied` or `prompt` (requires user acknowledgement of a prompt).

## Examples

### Requesting fullscreen mode

This example toggles the {{HTMLElement("video")}} element in and out of fullscreen mode when the <kbd>Enter</kbd> or <kbd>Shift</kbd> + <kbd>F</kbd> keys are pressed.
The script checks whether the document is currently in fullscreen using {{domxref("document.fullscreenElement")}}.
If the document is in fullscreen, it calls {{domxref("document.exitFullscreen()")}} to exit.
Otherwise, it calls `requestFullscreen()` on the `<video>` element:

```js
const video = document.querySelector("video");

document.addEventListener("keydown", (event) => {
  // Note that "F" is case-sensitive (uppercase):
  if (event.key === "Enter" || event.key === "F") {
    // Check if we're in fullscreen mode
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    // Otherwise enter fullscreen mode
    video.requestFullscreen().catch((err) => {
      console.error(`Error enabling fullscreen: ${err.message}`);
    });
  }
});
```

```html
<p>
  The video element below shows a time-lapse of a flower blooming. You can
  toggle fullscreen on and off using <kbd>Enter</kbd> or <kbd>Shift</kbd> +
  <kbd>F</kbd> (uppercase "F"). The embedded document needs to have
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event">
    focus
  </a>
  for the example to work.
</p>

<video controls loop src="/shared-assets/videos/flower.mp4" width="420"></video>
```

```css hidden
body {
  font-family:
    "Benton Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 2em;
}

video::backdrop {
  background-color: #444488;
}
button {
  display: block;
}
kbd {
  border: 2px solid #cdcdcd;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 0 #cdcdcd;
  font-size: 0.825rem;
  padding: 0.25rem;
}
```

{{embedlivesample("requesting_fullscreen_mode", , "400", "", "", "", "fullscreen")}}

### Using keyboard lock

This example is almost the same as the previous example, except that we request that fullscreen is opened with keyboard lock.

#### JavaScript

```js hidden
const video = document.querySelector("video");
```

The modified key event listener code is shown below.

The first difference is that we handle the event for the <kbd>Esc</kbd> key in fullscreen mode, calling `event.preventDefault()` to disable the default action (which would be to exit fullscreen mode).

As before we call `requestFullscreen()` if <kbd>Enter</kbd> or <kbd>Shift+F</kbd> are pressed when not in fullscreen mode.
However in this case we pass the `keyboardLock` option with the value `"browser"`.

```js
document.addEventListener("keydown", (event) => {
  // Check if we're in fullscreen mode
  if (document.fullscreenElement) {
    // Cancel exiting via the Escape key
    if (event.key === "Escape") {
      event.preventDefault();
      // Do whatever else you might want to do when escape is pressed
    }
  } else if (event.key === "Enter" || event.key === "F") {
    // Open full screen if Enter or F is pressed and not already fullscreen.
    // Note that "F" is case-sensitive (uppercase).
    video.requestFullscreen({ keyboardLock: "browser" }).catch((err) => {
      console.error(`Error enabling fullscreen: ${err.message}`);
    });
  }
});
```

```html hidden
<p>
  The video element below shows a time-lapse of a flower blooming. You can
  toggle fullscreen on and off using <kbd>Enter</kbd> or
  <kbd>Shift+F</kbd> (uppercase "F"). The embedded document needs to have
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event">
    focus
  </a>
  for the example to work.
</p>

<video controls loop src="/shared-assets/videos/flower.mp4" width="420"></video>
```

```css hidden
body {
  font-family:
    "Benton Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 2em;
}

video::backdrop {
  background-color: #444488;
}
button {
  display: block;
}
kbd {
  border: 2px solid #cdcdcd;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 0 #cdcdcd;
  font-size: 0.825rem;
  padding: 0.25rem;
}
```

#### Results

Select the frame and press <kbd>Shift+F</kbd>.
When the page displays full frame, note the temporary notification at the top of the page that explains how to exit full screen mode.

{{embedlivesample("Using keyboard lock", , "400", "", "", "", "fullscreen")}}

### Using navigationUI

In this example, the entire document is placed into fullscreen mode by calling `requestFullscreen()` on the document's {{DOMxRef("Document.documentElement")}}, which is the document's root {{HTMLElement("html")}} element.

```js
let elem = document.documentElement;

elem
  .requestFullscreen({ navigationUI: "show" })
  .then(() => {})
  .catch((err) => {
    alert(
      `An error occurred while trying to switch into fullscreen mode: ${err.message} (${err.name})`,
    );
  });
```

The promise's resolve handler does nothing, but if the promise is rejected, an error message is displayed by calling {{DOMxRef("Window.alert", "alert()")}}.

### Using the screen option

If you wanted to make the element fullscreen on the primary OS screen, you could use code like the following:

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

The {{domxref("Window.getScreenDetails()")}} method is used to retrieve the {{domxref("ScreenDetails")}} object for the current device, which contains {{domxref("ScreenDetailed")}} objects representing the different available screens.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}
- [`allowfullscreen`](/en-US/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
