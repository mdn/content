---
title: Fullscreen API
slug: Web/API/Fullscreen_API
page-type: web-api-overview
browser-compat: api.Element.requestFullscreen
---

{{DefaultAPISidebar("Fullscreen API")}}

The **Fullscreen API** adds methods to present a specific {{DOMxRef("Element")}} (and its descendants) in fullscreen mode, and to exit fullscreen mode once it is no longer needed.
This makes it possible to present desired content—such as an online game—using the user's entire screen, removing all browser user interface elements and other applications from the screen until fullscreen mode is shut off.

See the article [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide) for details on how to use the API.

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

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : The `fullscreenElement` property tells you the {{DOMxRef("Element")}} that's currently being displayed in fullscreen mode on the DOM (or shadow DOM).
    If this is `null`, the document (or shadow DOM) is not in fullscreen mode.
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : The `fullscreenEnabled` property tells you whether or not it is possible to engage fullscreen mode.
    This is `false` if fullscreen mode is not available for any reason (such as the `"fullscreen"` feature not being allowed, or fullscreen mode not being supported).

### Obsolete properties

- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}
  - : A Boolean value which is `true` if the document has an element currently being displayed in fullscreen mode; otherwise, this returns `false`.

    > [!NOTE]
    > Use the {{DOMxRef("Document.fullscreenElement", "fullscreenElement")}} property on the {{DOMxRef("Document")}} or {{DOMxRef("ShadowRoot")}} instead; if it's not `null`, then it's an {{DOMxRef("Element")}} currently being displayed in fullscreen mode.

## Events

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : Sent to an {{DOMxRef("Element")}} when it transitions into or out of fullscreen mode.
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : Sent to an `Element` if an error occurs while attempting to switch it into or out of fullscreen mode.

## Security considerations

[Transient user activation](/en-US/docs/Web/Security/Defenses/User_activation) is required to enter fullscreen mode (the user has to interact with the page or a UI element in order for this feature to work).

Fullscreen mode is controlled by the [Permissions-Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) directive {{HTTPHeader("Permissions-Policy/fullscreen","fullscreen")}}.

The default allowlist for `fullscreen` is `self`.
This allows fullscreen usage in same-origin nested frames but prevents it in third-party content.
Third-party usage can be enabled by the server first setting the `Permissions-Policy` header to grant permission to a particular third-party origin.

```http
Permissions-Policy: fullscreen=(self "https://b.example.com")
```

Then the `allow="fullscreen"` attribute must be added to the frame container element for sources from that origin:

```html
<iframe src="https://b.example.com" allow="fullscreen"></iframe>
```

The [Permissions API](/en-US/docs/Web/API/Permissions_API) `fullscreen` permission can be used to test whether access to use the mode is `granted`, `denied` or `prompt` (requires user acknowledgement of a prompt).

## Examples

### Simple fullscreen usage

In this example, a video is presented in a web page. Pressing the <kbd>Enter</kbd> key lets the user toggle between windowed and fullscreen presentation of the video.

[View Live Example](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Watching for the Enter key

When the page is loaded, this code is run to set up an event listener to watch for the <kbd>Enter</kbd> key.

```js
const video = document.getElementById("video");

// On pressing ENTER call toggleFullScreen method
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    toggleFullScreen(video);
  }
});
```

#### Toggling fullscreen mode

This code is called by the event handler above when the user hits the <kbd>Enter</kbd> key.

```js
function toggleFullScreen(video) {
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    video.requestFullscreen();
  } else {
    // Otherwise exit the full screen
    document.exitFullscreen?.();
  }
}
```

This starts by looking at the value of the {{DOMxRef("Document", "document")}}'s `fullscreenElement` attribute. If the value is `null`, the document is currently in windowed mode, so we need to switch to fullscreen mode; otherwise, it's the element that's currently in fullscreen mode. Switching to fullscreen mode is done by calling {{DOMxRef("Element.requestFullscreen()")}} on the {{HTMLElement("video")}} element.

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
- [`allowfullscreen`](/en-US/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
