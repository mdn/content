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

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`MediaSourceHandle`** interface of the {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}} is a proxy for a {{domxref("MediaSource")}} that can be transferred from a dedicated worker back to the main thread and attached to a media element via its {{domxref("HTMLMediaElement.srcObject")}} property. `MediaSource` objects are not transferable because they are event targets, hence the need for `MediaSourceHandle`s. Each `MediaSource` object created inside a dedicated worker has its own distinct `MediaSourceHandle`.

It can be accessed via the {{domxref("MediaSource.handle")}} property.

{{AvailableInWorkers}}

## Instance properties

None.

## Instance methods

None.

## Examples

The {{domxref("MediaSource.handle", "handle")}} property can be accessed inside a dedicated worker and the resulting `MediaSourceHandle` object is then transferred over to the thread that created the worker (in this case the main thread) via a {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} call:

```js
// Inside dedicated worker
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// Transfer the handle to the context that created the worker
postMessage({arg: handle}, [handle]);
```

Over in the main thread, we receive the handle via a {{domxref("Worker.message_event", "message")}} event handler, attach it to a {{htmlelement("video")}} via its {{domxref("HTMLMediaElement.srcObject")}} property, and {{domxref("HTMLMediaElement.play()", "play")}} the video:

```js
worker.addEventListener('message', (msg) => {
  let mediaSource = msg.data.arg;
  video.srcObject = mediaSource;
  video.play();

  mediaSource.addEventListener('sourceopen', () => {
    // Await sourceopen on MediaSource before creating SourceBuffers
    // and populating them with fetched media — the dedicated worker
    // MediaSource won't accept creation of SourceBuffers until it is
    // attached to the HTMLMediaElement its readyState is "open"
  })
})
```

> **Note:** {{domxref("MediaSourceHandle")}}s cannot be successfully transferred into or via a shared worker or service worker.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MSE-in-Workers Demo by Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
