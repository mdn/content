---
title: Fullscreen API
slug: Web/API/Fullscreen_API
tags:
  - API
  - DOM
  - Full
  - Full-screen
  - Fullscreen API
  - Games
  - Graphics
  - Guide
  - Intermediate
  - Overview
  - Reference
  - View
  - fullscreen
  - screen
---
{{DefaultAPISidebar("Fullscreen API")}}

The **Fullscreen API** adds methods to present a specific {{DOMxRef("Element")}} (and its descendants) in full-screen mode, and to exit full-screen mode once it is no longer needed. This makes it possible to present desired content—such as an online game—using the user's entire screen, removing all browser user interface elements and other applications from the screen until full-screen mode is shut off.

See the article [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide) for details on how to use the API.

> **Note:** Support for this API varies somewhat across browsers, with many requiring vendor prefixes and/or not implementing the latest specification. See the {{anch("Browser compatibility")}} section below for details on support for this API. You may wish to consider using a library such as [Fscreen](https://github.com/rafrex/fscreen) for vendor agnostic access to the Fullscreen API.

## Interfaces

_The Fullscreen API has no interfaces of its own. Instead, it augments several other interfaces to add the methods, properties, and event handlers needed to provide full-screen functionality. These are listed in the following sections._

## Methods

The Fullscreen API adds methods to the {{DOMxRef("Document")}} and {{DOMxRef("Element")}} interfaces to allow turning off and on full-screen mode.

### Methods on the Document interface

- {{DOMxRef("Document.exitFullscreen()")}}
  - : Requests that the {{Glossary("user agent")}} switch from full-screen mode back to windowed mode. Returns a {{jsxref("Promise")}} which is resolved once full-screen mode has been completely shut off.

### Methods on the Element interface

- {{DOMxRef("Element.requestFullscreen()")}}
  - : Asks the user agent to place the specified element (and, by extension, its descendants) into full-screen mode, removing all of the browser's UI elements as well as all other applications from the screen. Returns a {{jsxref("Promise")}} which is resolved once full-screen mode has been activated.

## Properties

_The {{DOMxRef("Document")}} interface provides properties that can be used to determine if full-screen mode is supported and available, and if full-screen mode is currently active, which element is using the screen._

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : The `fullscreenElement` property tells you the {{DOMxRef("Element")}} that's currently being displayed in full-screen mode on the DOM (or shadow DOM). If this is `null`, the document (or shadow DOM) is not in full-screen mode.
- {{DOMxRef("document.fullscreenEnabled")}}
  - : The `fullscreenEnabled` property tells you whether or not it is possible to engage full-screen mode. This is `false` if full-screen mode is not available for any reason (such as the `"fullscreen"` feature not being allowed, or full-screen mode not being supported).

### Event handlers

_The Fullscreen API defines two events which can be used to detect when full-screen mode is turned on and off, as well as when errors occur during the process of changing between full-screen and windowed modes. Event handlers for these events are available on the {{DOMxRef("Document")}} and {{DOMxRef("Element")}} interfaces._

> **Note:** These event handler properties are _not_ available as HTML content attributes. In other words, you cannot specify event handlers for {{Event("fullscreenchange")}} and {{Event("fullscreenerror")}} in the HTML content. They must be added by JavaScript code.

#### Event handlers on documents

- {{DOMxRef("Document.onfullscreenchange")}}
  - : An event handler for the {{Event("fullscreenchange")}} event that's bubbled up to the {{DOMxRef("Document")}} when any {{DOMxRef("Element")}} in that document is placed into full-screen mode, or exits full-screen mode.
- {{DOMxRef("Document.onfullscreenerror")}}
  - : An event handler for the {{Event("fullscreenerror")}} event that gets bubbled up to the {{DOMxRef("Document")}} when an error occurs while trying to enable or disable full-screen mode for any {{DOMxRef("Element")}} in that document.

#### Event handlers on elements

- {{DOMxRef("Element.onfullscreenchange")}}
  - : An event handler which is called when the {{Event("fullscreenchange")}} event is sent to the element, indicating that the element has been placed into, or removed from, full-screen mode.
- {{DOMxRef("Element.onfullscreenerror")}}
  - : An event handler for the {{Event("fullscreenerror")}} event when sent to an element which has encountered an error while transitioning into or out of full-screen mode.

### Obsolete properties

- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}

  - : A Boolean value which is `true` if the document has an element currently being displayed in full-screen mode; otherwise, this returns `false`.

    > **Note:** Use the {{DOMxRef("Document.fullscreenElement", "fullscreenElement")}} property on the {{DOMxRef("Document")}} or {{DOMxRef("ShadowRoot")}} instead; if it's not `null`, then it's an {{DOMxRef("Element")}} currently being displayed in full-screen mode.

## Events

_The Fullscreen API defines two events which can be used to detect when full-screen mode is turned on and off, as well as when errors occur during the process of changing between full-screen and windowed modes._

- {{Event("fullscreenchange")}}
  - : Sent to an {{DOMxRef("Element")}} when it transitions into or out of full-screen mode.
- {{Event("fullscreenerror")}}
  - : Sent to an `Element` if an error occurs while attempting to switch it into or out of full-screen mode.

## Controlling access

The availability of full-screen mode can be controlled using [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy). The full-screen mode feature is identified by the string `"fullscreen"`, with a default allow-list value of `"self"`, meaning that full-screen mode is permitted in top-level document contexts, as well as to nested browsing contexts loaded from the same origin as the top-most document.

See [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy) to learn more about using Feature Policy to control access to an API.

## Usage notes

Users can choose to exit full-screen mode by pressing the <kbd>ESC</kbd> (or <kbd>F11</kbd>) key, rather than waiting for the site or app to programmatically do so. Make sure you provide, somewhere in your user interface, appropriate user interface elements that inform the user that this option is available to them.

> **Note:** Navigating to another page, changing tabs, or switching to another application using any application switcher (or <kbd>Alt</kbd>-<kbd>Tab</kbd>) will likewise exit full-screen mode.

## Examples

### Simple fullscreen usage

In this example, a video is presented in a web page. Pressing the <kbd>Enter</kbd> key lets the user toggle between windowed and full-screen presentation of the video.

[View Live Example](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Watching for the Enter key

When the page is loaded, this code is run to set up an event listener to watch for the <kbd>Enter</kbd> key.

```js
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    toggleFullScreen();
  }
}, false);
```

#### Toggling full-screen mode

This code is called by the event handler above when the user hits the <kbd>Enter</kbd> key.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
```

This starts by looking at the value of the {{DOMxRef("Document", "document")}}'s `fullscreenElement` attribute. In a real-world deployment, at this time, you'll want to check for prefixed versions of this (`mozFullScreenElement`, `msFullscreenElement`, or `webkitFullscreenElement`, for example). If the value is `null`, the document is currently in windowed mode, so we need to switch to full-screen mode; otherwise, it's the element that's currently in full-screen mode. Switching to full-screen mode is done by calling {{DOMxRef("Element.requestFullscreen()")}} on the {{HTMLElement("video")}} element.

If full-screen mode is already active (`fullscreenElement` is not `null`), we call {{DOMxRef("Document.exitFullscreen", "exitFullscreen()")}} on the `document` to shut off full-screen mode.

## Specifications

| Specification                        | Status                           |
| ------------------------------------ | -------------------------------- |
| {{SpecName("Fullscreen")}} | {{Spec2("Fullscreen")}} |

## Browser compatibility

### `Document.fullscreen`

{{Compat("api.Document.fullscreen")}}

### `Document.fullscreenElement`

{{Compat("api.Document.fullscreenElement")}}

### `Document.fullscreenEnabled`

{{Compat("api.Document.fullscreenEnabled")}}

### `Document.exitFullscreen`

{{Compat("api.Document.exitFullscreen")}}

### `Element.requestFullscreen`

{{Compat("api.Element.requestFullscreen")}}

## See also

- [Using full-screen mode](/en-US/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- {{HTMLAttrXRef("allowfullscreen", "iframe")}}
