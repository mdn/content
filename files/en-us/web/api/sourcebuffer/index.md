---
title: SourceBuffer
slug: Web/API/SourceBuffer
page-type: web-api-interface
browser-compat: api.SourceBuffer
---

{{APIRef("Media Source Extensions")}}

The **`SourceBuffer`** interface represents a chunk of media to be passed into an {{domxref("HTMLMediaElement")}} and played, via a {{domxref("MediaSource")}} object. This can be made up of one or several media segments.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("SourceBuffer.appendWindowEnd")}}
  - : Controls the timestamp for the end of the append window.
- {{domxref("SourceBuffer.appendWindowStart")}}
  - : Controls the timestamp for the start of the [append window](https://w3c.github.io/media-source/#append-window). This is a timestamp range that can be used to filter what media data is appended to the `SourceBuffer`. Coded media frames with timestamps within this range will be appended, whereas those outside the range will be filtered out.
- {{domxref("SourceBuffer.audioTracks")}} {{ReadOnlyInline}}
  - : A list of the audio tracks currently contained inside the `SourceBuffer`.
- {{domxref("SourceBuffer.buffered")}} {{ReadOnlyInline}}
  - : Returns the time ranges that are currently buffered in the `SourceBuffer`.
- {{domxref("SourceBuffer.mode")}}
  - : Controls how the order of media segments in the `SourceBuffer` is handled, in terms of whether they can be appended in any order, or they have to be kept in a strict sequence.
- {{domxref("SourceBuffer.textTracks")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A list of the text tracks currently contained inside the `SourceBuffer`.
- {{domxref("SourceBuffer.timestampOffset")}}
  - : Controls the offset applied to timestamps inside media segments that are subsequently appended to the `SourceBuffer`.
- {{domxref("SourceBuffer.updating")}} {{ReadOnlyInline}}
  - : A boolean indicating whether the `SourceBuffer` is currently being updated — i.e. whether an {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.remove()")}} operation is currently in progress.
- {{domxref("SourceBuffer.videoTracks")}} {{ReadOnlyInline}}
  - : A list of the video tracks currently contained inside the `SourceBuffer`.

## Instance methods

_Inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("SourceBuffer.abort()")}}
  - : Aborts the current segment and resets the segment parser.
- {{domxref("SourceBuffer.appendBuffer()")}}
  - : Appends media segment data from an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object to the `SourceBuffer`.
- {{domxref("SourceBuffer.appendBufferAsync()")}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Starts the process of asynchronously appending the specified buffer to the `SourceBuffer`. Returns a {{jsxref("Promise")}} which is fulfilled once the buffer has been appended.
- {{domxref("SourceBuffer.changeType()")}}
  - : Changes the {{Glossary("MIME type")}} that future calls to {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} will expect the new data to conform to.
- {{domxref("SourceBuffer.remove()")}}
  - : Removes media segments within a specific time range from the `SourceBuffer`.
- {{domxref("SourceBuffer.removeAsync()")}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Starts the process of asynchronously removing media segments in the specified range from the `SourceBuffer`. Returns a {{jsxref("Promise")}} which is fulfilled once all matching segments have been removed.

## Events

- {{domxref("SourceBuffer.abort_event", "abort")}}
  - : Fired whenever {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.appendStream()")}} is ended by a call to {{domxref("SourceBuffer.abort()")}}. {{domxref("SourceBuffer.updating")}} changes from `true` to `false`.
- {{domxref("SourceBuffer.error_event", "error")}}
  - : Fired whenever an error occurs during {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.appendStream()")}}. {{domxref("SourceBuffer.updating")}} changes from `true` to `false`.
- {{domxref("SourceBuffer.update_event", "update")}}
  - : Fired whenever {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.remove()")}} completes. {{domxref("SourceBuffer.updating")}} changes from `true` to `false`. This event is fired before `updateend`.
- {{domxref("SourceBuffer.updateend_event", "updateend")}}
  - : Fired after {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.remove()")}} ends. This event is fired after `update`.
- {{domxref("SourceBuffer.updatestart_event", "updatestart")}}
  - : Fired whenever the value of {{domxref("SourceBuffer.updating")}} changes from `false` to `true`.

## Examples

The following simple example loads a video chunk by chunk as fast as possible, playing it as soon as it can. This example was written by Nick Desaulniers and can be [viewed live here](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) (you can also [download the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation).

```js
const video = document.querySelector("video");

const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  const mediaSource = new MediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error(`Unsupported MIME type or codec: ${mimeCodec}`);
}

function sourceOpen() {
  console.log(this.readyState); // open
  const mediaSource = this;
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
