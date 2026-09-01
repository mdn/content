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

### Abort loading a media resource

The following example demonstrates how to abort a video.
When you press the button it starts loading a video resource.
After a short timeout it aborts the load by removing the `src` attribute and calling the `load()` method.
If the video resource is still loading when `load()` is called, the `abort` event fires.

#### HTML

```html
<video controls width="250"></video>

<button id="loadAndAbort">Load and abort video</button>

<pre id="log"></pre>
```

#### CSS

```css
video,
button,
pre {
  display: block;
  margin-block: 1rem;
}
```

#### JavaScript

```js
const video = document.querySelector("video");
const loadAndAbortButton = document.querySelector("#loadAndAbort");
const log = document.querySelector("#log");

video.addEventListener("abort", () => {
  log.textContent += "Video loading aborted\n";
});

loadAndAbortButton.addEventListener("click", () => {
  log.textContent = "Loading video...\n";

  video.src = `/shared-assets/videos/flower.webm?nocache=${Date.now()}`;
  video.load();

  setTimeout(() => {
    video.removeAttribute("src");
    video.load();
  }, 50);
});
```

#### Result

{{EmbedLiveSample("Abort_loading_a_media_resource", "100%", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
