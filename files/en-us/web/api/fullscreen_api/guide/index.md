---
title: Guide to the Fullscreen API
slug: Web/API/Fullscreen_API/Guide
page-type: guide
tags:
  - API
  - Drawing
  - Full
  - Fullscreen API
  - Games
  - Graphics
  - Guide
  - display
  - full screen
  - fullscreen
  - screen
browser-compat:
  - api.Document.fullscreen
  - api.Document.fullscreenEnabled
---
{{DefaultAPISidebar("Fullscreen API")}}

This article demonstrates how to use the [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API) to place a given element into fullscreen mode, as well as how to detect when the browser enters or exits fullscreen mode.

## Activating fullscreen mode

Given an element that you'd like to present in fullscreen mode (such as a {{HTMLElement("video")}}, for example), you can present it in fullscreen mode by calling its {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} method.

Let's consider this {{HTMLElement("video")}} element:

```html
<video controls id="myvideo">
  <source src="somevideo.webm"></source>
  <source src="somevideo.mp4"></source>
</video>
```

We can put that video into fullscreen mode as follows:

```js
const elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

This code checks for the existence of the `requestFullscreen()` method before calling it.

### Presentation differences

It's worth noting a key difference here between the Gecko and WebKit implementations at this time: Gecko automatically adds CSS rules to the element to stretch it to fill the screen: "`width: 100%; height: 100%`". WebKit doesn't do this; instead, it centers the fullscreen element at the same size in a screen that's otherwise black. To get the same fullscreen behavior in WebKit, you need to add your own "`width: 100%; height: 100%;`" CSS rules to the element yourself:

```css
#myvideo:-webkit-full-screen {
  width: 100%;
  height: 100%;
}
```

On the other hand, if you're trying to emulate WebKit's behavior on Gecko, you need to place the element you want to present inside another element, which you'll make fullscreen instead, and use CSS rules to adjust the inner element to match the appearance you want.

### Notification

When fullscreen mode is successfully engaged, the document which contains the element receives a {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} event. When fullscreen mode is exited, the document again receives a {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} event. Note that the {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} event doesn't provide any information itself as to whether the document is entering or exiting fullscreen mode, but if the document has a non null {{DOMxRef("document.fullscreenElement", "fullscreenElement")}}, you know you're in fullscreen mode.

### When a fullscreen request fails

It's not guaranteed that you'll be able to switch into fullscreen mode. For example, {{HTMLElement("iframe")}} elements have the {{HTMLAttrXRef("allowfullscreen", "iframe")}} attribute in order to opt-in to allowing their content to be displayed in fullscreen mode. In addition, certain kinds of content, such as windowed plug-ins, cannot be presented in fullscreen mode. Attempting to put an element which can't be displayed in fullscreen mode (or the parent or descendant of such an element) won't work. Instead, the element which requested fullscreen will receive a `mozfullscreenerror` event. When a fullscreen request fails, Firefox will log an error message to the Web Console explaining why the request failed. In Chrome and newer versions of Opera however, no such warning is generated.

> **Note:** Fullscreen requests need to be called from within an event handler or otherwise they will be denied.

## Getting out of full screen mode

The user always has the ability to exit fullscreen mode of their own accord; see [Things your users want to know](#things_your_users_want_to_know). You can also do so programmatically by calling the {{DOMxRef("Document.exitFullscreen()")}} method.

## Other information

The {{DOMxRef("Document")}} provides some additional information that can be useful when developing fullscreen web applications:

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : The `fullscreenElement` property tells you the {{DOMxRef("Element")}} that's currently being displayed fullscreen. If this is non-null, the document (or shadow DOM) is in fullscreen mode. If this is null, the document (or shadow DOM) is not in fullscreen mode.
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : The `fullscreenEnabled` property tells you whether or not the document is currently in a state that would allow fullscreen mode to be requested.

## Things your users want to know

You'll want to be sure to let your users know that they can press the <kbd>Esc</kbd> key (or <kbd>F11</kbd>) to exit fullscreen mode.

In addition, navigating to another page, changing tabs, or switching to another application (using, for example, <kbd>Alt</kbd>-<kbd>Tab</kbd>) while in fullscreen mode exits fullscreen mode as well.

## Example

In this example, a video is presented in a web page. Pressing the <kbd>Return</kbd> or <kbd>Enter</kbd> key lets the user toggle between windowed and fullscreen presentation of the video.

[View Live Examples](https://media.prod.mdn.mozit.cloud/samples/domref/fullscreen.html)

### Watching for the Enter key

When the page is loaded, this code is run to set up an event listener to watch for the <kbd>Enter</kbd> key.

```js
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    toggleFullScreen();
  }
}, false);
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

This starts by looking at the value of the `fullscreenElement` attribute on the {{DOMxRef("document")}} (checking it prefixed with both `moz`, `ms`, or `webkit`). If it's `null`, the document is currently in windowed mode, so we need to switch to fullscreen mode. Switching to fullscreen mode is done by calling {{DOMxRef("element.requestFullscreen()")}}.

If fullscreen mode is already active (`fullscreenElement` is non-`null`), we call {{DOMxRef("document.exitFullscreen()")}}.

## Prefixing

For the moment not all browsers are implementing the unprefixed version of the API (for vendor agnostic access to the Fullscreen API you can use [Fscreen](https://github.com/rafgraph/fscreen)). Here is the table summarizing the prefixes and name differences between them:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Standard</th>
      <th scope="col">WebKit (Safari) / Blink (Chrome &#x26; Opera) / Edge</th>
      <th scope="col">Gecko (Firefox)</th>
      <th scope="col">Internet Explorer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}
      </th>
      <td><code>webkitIsFullScreen</code></td>
      <td><code>mozFullScreen</code></td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">
        {{DOMxRef("Document.fullscreenEnabled")}}
      </th>
      <td><code>webkitFullscreenEnabled</code></td>
      <td><code>mozFullScreenEnabled</code></td>
      <td><code>msFullscreenEnabled</code></td>
    </tr>
    <tr>
      <th scope="row">
        {{DOMxRef("Document.fullscreenElement")}}
      </th>
      <td><code>webkitFullscreenElement</code></td>
      <td><code>mozFullScreenElement</code></td>
      <td><code>msFullscreenElement</code></td>
    </tr>
    <tr>
      <th scope="row">{{DOMxRef("Document.exitFullscreen()")}}</th>
      <td><code>webkitExitFullscreen()</code></td>
      <td><code>mozCancelFullScreen()</code></td>
      <td><code>msExitFullscreen()</code></td>
    </tr>
    <tr>
      <th scope="row">
        {{DOMxRef("Element.requestFullscreen()")}}
      </th>
      <td><code>webkitRequestFullscreen()</code></td>
      <td><code>mozRequestFullScreen()</code></td>
      <td><code>msRequestFullscreen()</code></td>
    </tr>
  </tbody>
</table>

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
- {{HTMLAttrXRef("allowfullscreen", "iframe")}}
