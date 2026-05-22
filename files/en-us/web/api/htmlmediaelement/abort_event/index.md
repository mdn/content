---
title: "HTMLMediaElement: abort event"
short-title: abort
slug: Web/API/HTMLMediaElement/abort_event
page-type: web-api-event
browser-compat: api.HTMLMediaElement.abort_event
---

{{APIRef("HTML DOM")}}

The **`abort`** event is fired when the resource was not fully loaded, but not as the result of an error.

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

The following example starts loading one video resource, then starts another load before the
first resource has finished.
If the first resource is still loading when `load()` is called again, the `abort` event fires.

```js
const video = document.querySelector("video");
const firstVideoSrc = "https://example.org/path/to/video.webm";
const secondVideoSrc = "https://example.org/path/to/another-video.webm";

video.addEventListener("abort", () => {
  console.log(`Aborted loading: ${firstVideoSrc}`);
});

video.src = firstVideoSrc;
video.load();

setTimeout(() => {
  video.src = secondVideoSrc;
  video.load();
}, 1000);
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
