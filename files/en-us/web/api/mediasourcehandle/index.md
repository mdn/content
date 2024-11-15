---
title: MediaSourceHandle
slug: Web/API/MediaSourceHandle
page-type: web-api-interface
browser-compat: api.MediaSourceHandle
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`MediaSourceHandle`** interface of the {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}} is a proxy for a {{domxref("MediaSource")}} that can be transferred from a dedicated worker back to the main thread and attached to a media element via its {{domxref("HTMLMediaElement.srcObject")}} property. `MediaSource` objects are not transferable because they are event targets, hence the need for `MediaSourceHandle`s.

It can be accessed via the {{domxref("MediaSource.handle")}} property.

Each `MediaSource` object created inside a dedicated worker has its own distinct `MediaSourceHandle`. The `MediaSource.handle` getter will always return the `MediaSourceHandle` instance specific to the associated dedicated worker `MediaSource` instance. If the handle has already been transferred to the main thread using {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}}, the handle instance in the worker is technically detached and can't be transferred again.

`MediaSourceHandle` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

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

> **Note:** `MediaSourceHandle`s cannot be successfully transferred into or via a shared worker or service worker.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MSE-in-Workers Demo by Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
