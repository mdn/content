---
title: MediaSource.handle
slug: Web/API/MediaSource/handle
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - handle
  - MSE
  - Media Source Extensions
  - MediaSource
  - Property
  - Reference
browser-compat: api.MediaSource.handle
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`handle`** read-only property of the {{domxref("MediaSource")}} interface returns a {{domxref("MediaSourceHandle")}} object, a proxy for the `MediaSource` that can be transferred from a dedicated worker back to the main thread and attached to a media element via its {{domxref("HTMLMediaElement.srcObject")}} property.

{{AvailableInWorkers}}

## Value

A {{domxref("MediaSourceHandle")}} object instance.

## Examples

The `handle` property can be accessed inside a dedicated worker and the resulting `MediaSourceHandle` object is then transferred over to the main thread via a {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} call:

```js
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
postMessage({arg: handle}, [handle]);

// Fetch the media, buffer it, and pass it into the MediaSource
```

Over in the main thread, we receive the handle via a {{domxref("Worker.message_event", "message")}} event handler, attach it to a {{htmlelement("video")}} via its {{domxref("HTMLMediaElement.srcObject")}} property, and {{domxref("HTMLMediaElement.play()", "play")}} the video:

```js
worker.addEventListener('message', (msg) => {
  video.srcObject = msg.data.arg;
  video.play();
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MSE-in-Workers Demo by Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
