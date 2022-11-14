---
title: MediaSourceHandle
slug: Web/API/MediaSourceHandle
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - MSE
  - MediaSource
  - MediaSource Extensions
  - Reference
browser-compat: api.MediaSourceHandle
---

{{APIRef("Media Source Extensions")}}{{seecompattable}}

The **`MediaSourceHandle`** interface of the {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}} is a proxy for a {{domxref("MediaSource")}} that can be transferre from a dedicated worker back to the main thread and attached to a media element via its {{domxref("HTMLMediaElement.srcObject")}} property. `MediaSource` objects are not transferable because they are event targets, hence the need for `MediaSourceHandle`s. Each `MediaSource` object has its own distinct `MediaSourceHandle`.

It can be accessed via the {{domxref("MediaSource.handle")}} property.

{{AvailableInWorkers}}

## Instance properties

None.

## Instance methods

None.

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
