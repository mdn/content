---
title: Guide to the Fullscreen API
slug: Web/API/Fullscreen_API/Guide
page-type: guide
browser-compat:
  - api.Document.fullscreenEnabled
  - api.Document.fullscreen
---

{{DefaultAPISidebar("Fullscreen API")}}

This article demonstrates how to use the [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API) to place a given element into fullscreen mode, as well as how to detect when the browser enters or exits fullscreen mode.

## Activating fullscreen mode

Given an element that you'd like to present in fullscreen mode (such as a {{HTMLElement("video")}}, for example), you can present it in fullscreen mode by calling its {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} method.

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

### Notification

When fullscreen mode is successfully engaged, the document which contains the element receives a {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} event. When fullscreen mode is exited, the document again receives a {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} event. Note that the {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} event doesn't provide any information itself as to whether the document is entering or exiting fullscreen mode, but if the document has a non null {{DOMxRef("document.fullscreenElement", "fullscreenElement")}}, you know you're in fullscreen mode.

### When a fullscreen request fails

It's not guaranteed that you'll be able to switch into fullscreen mode. For example, {{HTMLElement("iframe")}} elements have the [`allowfullscreen`](/en-US/docs/Web/HTML/Element/iframe#allowfullscreen) attribute in order to opt-in to allowing their content to be displayed in fullscreen mode. In addition, certain kinds of content, such as windowed plug-ins, cannot be presented in fullscreen mode. Attempting to put an element which can't be displayed in fullscreen mode (or the parent or descendant of such an element) won't work. Instead, the element which requested fullscreen will receive a `fullscreenerror` event. When a fullscreen request fails, Firefox will log an error message to the Web Console explaining why the request failed. In Chrome and newer versions of Opera however, no such warning is generated.

> [!NOTE]
> Fullscreen requests need to be called from within an event handler or otherwise they will be denied.

## Getting out of full screen mode

The user always has the ability to exit fullscreen mode of their own accord; see [Things your users want to know](#things_your_users_want_to_know). You can also do so programmatically by calling the {{DOMxRef("Document.exitFullscreen()")}} method.

## Other information

The {{DOMxRef("Document")}} provides some additional information that can be useful when developing fullscreen web applications:

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : The `fullscreenElement` property tells you the {{DOMxRef("Element")}} that's currently being displayed fullscreen. If this is non-null, the document (or shadow DOM) is in fullscreen mode. If this is null, the document (or shadow DOM) is not in fullscreen mode.
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : The `fullscreenEnabled` property tells you whether or not the document is currently in a state that would allow fullscreen mode to be requested.

### Viewport scaling in mobile browsers

Some mobile browsers while in fullscreen mode ignore viewport meta-tag settings and block user scaling; for example: a "pinch to zoom" gesture may not work on a page presented in fullscreen mode — even if, when not in fullscreen mode, the page can be scaled using pinch to zoom.

## Things your users want to know

You'll want to be sure to let your users know that they can press the <kbd>Esc</kbd> key (or <kbd>F11</kbd>) to exit fullscreen mode.

In addition, navigating to another page, changing tabs, or switching to another application (using, for example, <kbd>Alt</kbd>-<kbd>Tab</kbd>) while in fullscreen mode exits fullscreen mode as well.

## Example

In this example, a video is presented in a web page. Pressing the <kbd>Return</kbd> or <kbd>Enter</kbd> key lets the user toggle between windowed and fullscreen presentation of the video.

[View Live Examples](https://mdn.dev/archives/media/samples/domref/fullscreen.html)

### Watching for the Enter key

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

### Toggling fullscreen mode

This code is called when the user hits the <kbd>Enter</kbd> key, as seen above.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

This starts by looking at the value of the `fullscreenElement` attribute on the {{DOMxRef("document")}}. If it's `null`, the document is currently in windowed mode, so we need to switch to fullscreen mode. Switching to fullscreen mode is done by calling {{DOMxRef("Element.requestFullscreen()")}}.

If fullscreen mode is already active (`fullscreenElement` is non-`null`), we call {{DOMxRef("document.exitFullscreen()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using fullscreen mode](/en-US/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/en-US/docs/Web/HTML/Element/iframe#allowfullscreen)
