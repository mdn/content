---
title: "HTMLMediaElement: abort event"
short-title: abort
slug: Web/API/HTMLMediaElement/abort_event
page-type: web-api-event
browser-compat: api.HTMLMediaElement.abort_event
---

{{APIRef("HTML DOM")}}

The **`abort`** event is fired when media resource loading is stopped before completion, but not as the result of an error.
This is usually achieved by removing the `src` attribute or setting it to the empty string (`""`), then calling `load()`.

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

The following example starts loading a video resource, then provides a button that stops the load.
If the video resource is still loading when `load()` is called, the `abort` event fires.

```js
const video = document.querySelector("video");
const stopButton = document.querySelector("#stopBtn");

video.addEventListener("abort", () => {
  console.log("Video loading aborted");
});

stopButton.addEventListener("click", () => {
  video.removeAttribute("src");
  video.load();
});
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
