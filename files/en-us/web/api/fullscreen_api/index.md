---
title: Fullscreen API
slug: Web/API/Fullscreen_API
page-type: web-api-overview
browser-compat:
  - api.Document.fullscreenElement
  - api.Document.fullscreenEnabled
  - api.Document.exitFullscreen
  - api.Element.requestFullscreen
  - api.Document.fullscreen
---

{{DefaultAPISidebar("Fullscreen API")}}

The **Fullscreen API** adds methods to present a specific {{DOMxRef("Element")}} (and its descendants) in fullscreen mode, and to exit fullscreen mode once it is no longer needed. This makes it possible to present desired content—such as an online game—using the user's entire screen, removing all browser user interface elements and other applications from the screen until fullscreen mode is shut off.

See the article [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide) for details on how to use the API.

> **Note:** Support for this API varies somewhat across browsers, with many requiring vendor prefixes and/or not implementing the latest specification. See the [Browser compatibility](#browser_compatibility) section below for details on support for this API. You may wish to consider using a library such as [Fscreen](https://github.com/rafgraph/fscreen) for vendor agnostic access to the Fullscreen API.

## Interfaces

_The Fullscreen API has no interfaces of its own. Instead, it augments several other interfaces to add the methods, properties, and event handlers needed to provide fullscreen functionality. These are listed in the following sections._

## Instance methods

The Fullscreen API adds methods to the {{DOMxRef("Document")}} and {{DOMxRef("Element")}} interfaces to allow turning off and on fullscreen mode.

### Instance methods on the Document interface

- {{DOMxRef("Document.exitFullscreen()")}}
  - : Requests that the {{Glossary("user agent")}} switch from fullscreen mode back to windowed mode. Returns a {{jsxref("Promise")}} which is resolved once fullscreen mode has been completely shut off.

### Instance methods on the Element interface

- {{DOMxRef("Element.requestFullscreen()")}}
  - : Asks the user agent to place the specified element (and, by extension, its descendants) into fullscreen mode, removing all of the browser's UI elements as well as all other applications from the screen. Returns a {{jsxref("Promise")}} which is resolved once fullscreen mode has been activated.

## Instance properties

_The {{DOMxRef("Document")}} interface provides properties that can be used to determine if fullscreen mode is supported and available, and if fullscreen mode is currently active, which element is using the screen._

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : The `fullscreenElement` property tells you the {{DOMxRef("Element")}} that's currently being displayed in fullscreen mode on the DOM (or shadow DOM). If this is `null`, the document (or shadow DOM) is not in fullscreen mode.
- {{DOMxRef("document.fullscreenEnabled")}}
  - : The `fullscreenEnabled` property tells you whether or not it is possible to engage fullscreen mode. This is `false` if fullscreen mode is not available for any reason (such as the `"fullscreen"` feature not being allowed, or fullscreen mode not being supported).

### Obsolete properties

- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}

  - : A Boolean value which is `true` if the document has an element currently being displayed in fullscreen mode; otherwise, this returns `false`.

    > **Note:** Use the {{DOMxRef("Document.fullscreenElement", "fullscreenElement")}} property on the {{DOMxRef("Document")}} or {{DOMxRef("ShadowRoot")}} instead; if it's not `null`, then it's an {{DOMxRef("Element")}} currently being displayed in fullscreen mode.

## Events

_The Fullscreen API defines two events which can be used to detect when fullscreen mode is turned on and off, as well as when errors occur during the process of changing between fullscreen and windowed modes._

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : Sent to an {{DOMxRef("Element")}} when it transitions into or out of fullscreen mode.
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : Sent to an `Element` if an error occurs while attempting to switch it into or out of fullscreen mode.

## Controlling access

The availability of fullscreen mode can be controlled using a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy). The fullscreen mode feature is identified by the string `"fullscreen"`, with a default allowlist value of `"self"`, meaning that fullscreen mode is permitted in top-level document contexts, as well as to nested browsing contexts loaded from the same origin as the top-most document.

## Usage notes

Users can choose to exit fullscreen mode by pressing the <kbd>ESC</kbd> (or <kbd>F11</kbd>) key, rather than waiting for the site or app to programmatically do so. Make sure you provide, somewhere in your user interface, appropriate user interface elements that inform the user that this option is available to them.

> **Note:** Navigating to another page, changing tabs, or switching to another application using any application switcher (or <kbd>Alt</kbd>-<kbd>Tab</kbd>) will likewise exit fullscreen mode.

## Examples

### Simple fullscreen usage

In this example, a video is presented in a web page. Pressing the <kbd>Enter</kbd> key lets the user toggle between windowed and fullscreen presentation of the video.

[View Live Example](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Watching for the Enter key

When the page is loaded, this code is run to set up an event listener to watch for the <kbd>Enter</kbd> key.

```js
document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
  },
  false,
);
```

#### Toggling fullscreen mode

This code is called by the event handler above when the user hits the <kbd>Enter</kbd> key.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

This starts by looking at the value of the {{DOMxRef("Document", "document")}}'s `fullscreenElement` attribute. In a real-world deployment, at this time, you'll want to check for prefixed versions of this (`mozFullScreenElement`, `msFullscreenElement`, or `webkitFullscreenElement`, for example). If the value is `null`, the document is currently in windowed mode, so we need to switch to fullscreen mode; otherwise, it's the element that's currently in fullscreen mode. Switching to fullscreen mode is done by calling {{DOMxRef("Element.requestFullscreen()")}} on the {{HTMLElement("video")}} element.

If fullscreen mode is already active (`fullscreenElement` is not `null`), we call {{DOMxRef("Document.exitFullscreen", "exitFullscreen()")}} on the `document` to shut off fullscreen mode.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/en-US/docs/Web/HTML/Element/iframe#allowfullscreen)
