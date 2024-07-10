---
title: "MediaSource: handle property"
short-title: handle
slug: Web/API/MediaSource/handle
page-type: web-api-instance-property
browser-compat: api.MediaSource.handle
---

{{APIRef("Media Source Extensions")}} {{AvailableInWorkers}}

The **`handle`** read-only property of the {{domxref("MediaSource")}} interface returns a {{domxref("MediaSourceHandle")}} object, a proxy for the `MediaSource` that can be transferred from a dedicated worker back to the main thread and attached to a media element via its {{domxref("HTMLMediaElement.srcObject")}} property.

> **Note:** `handle` is only visible on {{domxref("MediaSource")}} instances inside dedicated workers.

Each `MediaSource` object created inside a dedicated worker has its own distinct `MediaSourceHandle`. The `handle` getter will always return the `MediaSourceHandle` instance specific to the associated dedicated worker `MediaSource` instance. If the handle has already been transferred to the main thread using {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}}, the handle instance in the worker is technically detached and can't be transferred again.

## Value

A {{domxref("MediaSourceHandle")}} object instance.

## Examples

The `handle` property can be accessed inside a dedicated worker and the resulting {{domxref("MediaSourceHandle")}} object is then transferred over to the thread that created the worker (in this case the main thread) via a {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} call:

```js
// Inside dedicated worker
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// Transfer the handle to the context that created the worker
postMessage({ arg: handle }, [handle]);

mediaSource.addEventListener("sourceopen", () => {
  // Await sourceopen on MediaSource before creating SourceBuffers
  // and populating them with fetched media — MediaSource won't
  // accept creation of SourceBuffers until it is attached to the
  // HTMLMediaElement and its readyState is "open"
});
```

Over in the main thread, we receive the handle via a {{domxref("Worker.message_event", "message")}} event handler, attach it to a {{htmlelement("video")}} via its {{domxref("HTMLMediaElement.srcObject")}} property, and {{domxref("HTMLMediaElement.play()", "play")}} the video:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
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
