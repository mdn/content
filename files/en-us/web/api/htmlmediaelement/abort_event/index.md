---
title: "HTMLMediaElement: abort event"
short-title: abort
slug: Web/API/HTMLMediaElement/abort_event
page-type: web-api-event
browser-compat: api.HTMLMediaElement.abort_event
---

{{APIRef("HTML DOM")}}

The **`abort`** event is fired when the loading of a media resource is canceled before it completes, but not as the result of an error. Common triggers include the user pressing the browser's stop button, or the page changing or clearing the element's `src` while the load is in progress.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("abort", (event) => { })

onabort = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
const video = document.querySelector("video");

video.addEventListener("abort", () => {
  console.log("Video loading was aborted.");
});

// Start loading a video.
video.setAttribute("src", "https://example.org/path/to/video.webm");

// While the load is still in progress, changing `src` to a different
// resource (or clearing it) cancels the in-progress load and fires the
// `abort` event. The user pressing the browser's stop button has the
// same effect.
video.setAttribute("src", "https://example.org/path/to/other-video.webm");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
