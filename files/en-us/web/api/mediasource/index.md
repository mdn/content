---
title: MediaSource
slug: Web/API/MediaSource
page-type: web-api-interface
browser-compat: api.MediaSource
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`MediaSource`** interface of the {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}} represents a source of media data for an {{domxref("HTMLMediaElement")}} object. A `MediaSource` object can be attached to a {{domxref("HTMLMediaElement")}} to be played in the user agent.

{{InheritanceDiagram}}

## Constructor

- {{domxref("MediaSource.MediaSource", "MediaSource()")}}
  - : Constructs and returns a new `MediaSource` object with no associated source buffers.

## Instance properties

- {{domxref("MediaSource.activeSourceBuffers")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SourceBufferList")}} object containing a subset of the {{domxref("SourceBuffer")}} objects contained within {{domxref("MediaSource.sourceBuffers")}} — the list of objects providing the selected video track, enabled audio tracks, and shown/hidden text tracks.
- {{domxref("MediaSource.duration")}}
  - : Gets and sets the duration of the current media being presented.
- {{domxref("MediaSource.handle")}} {{ReadOnlyInline}}
  - : Inside a dedicated worker, returns a {{domxref("MediaSourceHandle")}} object, a proxy for the `MediaSource` that can be transferred from the worker back to the main thread and attached to a media element via its {{domxref("HTMLMediaElement.srcObject")}} property.
- {{domxref("MediaSource.readyState")}} {{ReadOnlyInline}}
  - : Returns an enum representing the state of the current `MediaSource`, whether it is not currently attached to a media element (`closed`), attached and ready to receive {{domxref("SourceBuffer")}} objects (`open`), or attached but the stream has been ended via {{domxref("MediaSource.endOfStream()")}} (`ended`.)
- {{domxref("MediaSource.sourceBuffers")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SourceBufferList")}} object containing the list of {{domxref("SourceBuffer")}} objects associated with this `MediaSource`.

## Static properties

- {{domxref("MediaSource.canConstructInDedicatedWorker_static", "MediaSource.canConstructInDedicatedWorker")}} {{ReadOnlyInline}}
  - : A boolean; returns `true` if `MediaSource` worker support is implemented, providing a low-latency feature detection mechanism.

## Instance methods

_Inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("MediaSource.addSourceBuffer()")}}
  - : Creates a new {{domxref("SourceBuffer")}} of the given MIME type and adds it to the {{domxref("MediaSource.sourceBuffers")}} list.
- {{domxref("MediaSource.clearLiveSeekableRange()")}}
  - : Clears a seekable range previously set with a call to `setLiveSeekableRange()`.
- {{domxref("MediaSource.endOfStream()")}}
  - : Signals the end of the stream.
- {{domxref("MediaSource.removeSourceBuffer()")}}
  - : Removes the given {{domxref("SourceBuffer")}} from the {{domxref("MediaSource.sourceBuffers")}} list.
- {{domxref("MediaSource.setLiveSeekableRange()")}}
  - : Sets the range that the user can seek to in the media element.

## Static methods

- {{domxref("MediaSource.isTypeSupported_static", "MediaSource.isTypeSupported()")}}
  - : Returns a boolean value indicating if the given MIME type is supported by the current user agent — this is, if it can successfully create {{domxref("SourceBuffer")}} objects for that MIME type.

## Events

- {{domxref("MediaSource.sourceclose_event", "sourceclose")}}
  - : Fired when the `MediaSource` instance is not attached to a media element anymore.
- {{domxref("MediaSource.sourceended_event", "sourceended")}}
  - : Fired when the `MediaSource` instance is still attached to a media element, but {{domxref("MediaSource.endOfStream", "endOfStream()")}} has been called.
- {{domxref("MediaSource.sourceopen_event", "sourceopen")}}
  - : Fired when the `MediaSource` instance has been opened by a media element and is ready for data to be appended to the {{domxref("SourceBuffer")}} objects in {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}}.

## Examples

### Complete basic example

The following simple example loads a video with {{domxref("XMLHttpRequest")}}, playing it as soon as it can. This example was written by Nick Desaulniers and can be [viewed live here](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) (you can also [download the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation). The function `getMediaSource()`, which is not defined here, returns a `MediaSource`.

```js
const video = document.querySelector("video");

const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
let mediaSource;

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = getMediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

function fetchAB(url, cb) {
  console.log(url);
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.responseType = "arraybuffer";
  xhr.onload = () => {
    cb(xhr.response);
  };
  xhr.send();
}
```

### Constructing a `MediaSource` in a dedicated worker and passing it to the main thread

The {{domxref("MediaSource.handle", "handle")}} property can be accessed inside a dedicated worker and the resulting {{domxref("MediaSourceHandle")}} object is then transferred over to the thread that created the worker (in this case the main thread) via a {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} call:

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

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
