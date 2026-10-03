---
title: Guide to the Fullscreen API
slug: Web/API/Fullscreen_API/Guide
page-type: guide
---

{{DefaultAPISidebar("Fullscreen API")}}

This article demonstrates how to use the [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API) to place a given element into fullscreen mode, as well as how to detect when the browser enters or exits fullscreen mode.

## Activating fullscreen mode

Given an element that you'd like to present in fullscreen mode (such as a {{HTMLElement("video")}}, for example), you can present it in fullscreen mode by calling its {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} method.
The user has to interact with the page or a UI element in order for this feature to work (it requires [Transient user activation](/en-US/docs/Web/Security/Defenses/User_activation))

Let's consider this {{HTMLElement("video")}} element:

```html
<video controls id="my-video">
  <source src="somevideo.webm" />
  <source src="somevideo.mp4" />
</video>
```

We can put that video into fullscreen mode as follows:

```js
const elem = document.getElementById("my-video");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

This code checks for the existence of the `requestFullscreen()` method before calling it.

Once an element is in fullscreen mode, it is matched by {{cssxref(":fullscreen")}}, which gives it some default styles like taking up the entire screen. It is also placed in the {{glossary("top layer")}}.

If multiple elements are requested to be displayed in fullscreen mode, they all get matched by {{cssxref(":fullscreen")}} and are all in the top layer. They stack on top each other, with more recently requested elements on top of older ones. The most recently requested element gets displayed and is returned by {{domxref("Document.fullscreenElement")}}.

### Notification

When fullscreen mode is successfully engaged, the document which contains the element receives a {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} event. When fullscreen mode is exited, the document again receives a {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} event. Note that the {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} event doesn't provide any information itself as to whether the document is entering or exiting fullscreen mode, but if the document has a non null {{DOMxRef("document.fullscreenElement", "fullscreenElement")}}, you know you're in fullscreen mode.

### When a fullscreen request fails

It's not guaranteed that you'll be able to switch into fullscreen mode. For example, {{HTMLElement("iframe")}} elements have the [`allowfullscreen`](/en-US/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) attribute in order to opt-in to allowing their content to be displayed in fullscreen mode. In addition, certain kinds of content, such as windowed plug-ins, cannot be presented in fullscreen mode. Attempting to put an element which can't be displayed in fullscreen mode (or the parent or descendant of such an element) won't work. Instead, the element which requested fullscreen will receive a `fullscreenerror` event. When a fullscreen request fails, Firefox will log an error message to the Web Console explaining why the request failed. In Chrome and newer versions of Opera however, no such warning is generated.

> [!NOTE]
> Fullscreen requests need to be called from within an event handler or otherwise they will be denied.

## Browser keyboard locking

Some applications want to use use keys or key-combinations that the are normally handled by the browser or the underlying OS.
For example, a game might want to use the <kbd>Esc</kbd> key to invoke a menu instead of exiting fullscreen mode.

Keyboard locking mode allows you exit fullscreen mode using a long-press of the normal exit key (usually <kbd>Esc</kbd>), and intercept and handle other keys you might not otherwise be able to, including the normal exit key!

The HTML below shows a video element we might want to display full screen.

```html
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

The following code adds an `click` event handler for the video element that calls `requestFullscreen({ keyboardLock: "browser" }))` if <kbd>Enter</kbd> or <kbd>Shift+F</kbd> are pressed when not in fullscreen mode.
Setting the [`options.keyboardLock`](#keyboardlock) to `"browser"` is what activates keyboard lock.
When we're in fullscreen mode we check if the <kbd>Escape</kbd> key was pressed and call `event.preventDefault()` to disable the default action (which would be to exit fullscreen mode).

```js
const video = document.querySelector("video");
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

You can see this in operation below.
Select the frame and press <kbd>Shift+F</kbd>.
When the page displays full frame, note the temporary notification at the top of the page that explains how to exit full screen mode.

On [browsers that support the `keyboardLock` option](/en-US/docs/Web/API/Element/requestFullscreen#browser_compatibility) you will need a long-press to exit full screen mode.
On other browsers you will be able to exit with the normal key.

{{embedlivesample("Browser keyboard locking", , "400", "", "", "", "fullscreen")}}

## Getting out of full screen mode

Browers provide a mechanism for users to manually exit fullscreen mode, and the method is displayed in a transient notification when fullscreen mode is entered.
This method is commonly the <kbd>Esc</kbd> key (or a long-press of the <kbd>Esc</kbd> when in [browser keyboard lock mode](/en-US/docs/Web/API/Element/requestFullscreen#keyboard_locking)).

A browser may support other keys or key-combinations for exiting fullscreen mode, such as <kbd>F11</kbd> or <kbd>Alt+Tab</kbd>.
It can also exit fullscreen mode for any other reason it chooses, such as when navigating to another page, changing tabs, or switching to another application.

You can programmatically exit fullscreen mode by calling the {{DOMxRef("Document.exitFullscreen()")}} method.
If there are multiple elements in fullscreen mode, calling `exitFullscreen()` only exits the topmost element, revealing the next element below it.
Pressing the browser-specific exit key that was shown in the notifiction when entering fullscreen mode (usually <kbd>Esc</kbd>) exits all fullscreen elements.

## Other information

The {{DOMxRef("Document")}} provides some additional information that can be useful when developing fullscreen web applications:

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : The `fullscreenElement` property tells you the {{DOMxRef("Element")}} that's currently being displayed fullscreen. If this is non-null, the document (or shadow DOM) is in fullscreen mode. If this is null, the document (or shadow DOM) is not in fullscreen mode.
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : The `fullscreenEnabled` property tells you whether or not the document is currently in a state that would allow fullscreen mode to be requested.

### Viewport scaling in mobile browsers

Some mobile browsers while in fullscreen mode ignore viewport meta-tag settings and block user scaling; for example: a "pinch to zoom" gesture may not work on a page presented in fullscreen mode — even if, when not in fullscreen mode, the page can be scaled using pinch to zoom.

## Example

The [mdn/dom-examples GitHub repo](https://github.com/mdn/) has a complete example of the Fullscreen API.

[Run the example](https://mdn.github.io/dom-examples/fullscreen-api/index.html) and [browse the source code](https://github.com/mdn/dom-examples/tree/main/fullscreen-api).

## See also

- [Using fullscreen mode](/en-US/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/en-US/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
