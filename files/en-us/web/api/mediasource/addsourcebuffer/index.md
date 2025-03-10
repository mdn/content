---
title: "MediaSource: addSourceBuffer() method"
short-title: addSourceBuffer()
slug: Web/API/MediaSource/addSourceBuffer
page-type: web-api-instance-method
browser-compat: api.MediaSource.addSourceBuffer
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`addSourceBuffer()`** method of the
{{domxref("MediaSource")}} interface creates a new {{domxref("SourceBuffer")}} of the
given {{Glossary("MIME type")}} and adds it to the `MediaSource`'s
{{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} list. The new
`SourceBuffer` is also returned.

## Syntax

```js-nolint
addSourceBuffer(mimeType)
```

### Parameters

- `mimeType`
  - : A string specifying the MIME type of the
    {{domxref("SourceBuffer")}} to create and add to the {{domxref("MediaSource")}}.

### Return value

A {{domxref("SourceBuffer")}} object representing the new source buffer that has been
created and added to the media source.

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if the value specified for `mimeType` is an empty string rather than a valid
    MIME type.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("MediaSource")}} is not in the `"open"`
    {{domxref("MediaSource.readyState", "readyState")}}.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified `mimeType` isn't supported by the {{Glossary("user agent")}}, or is not compatible with the MIME types of other {{domxref("SourceBuffer")}} objects that are already included in the media source's {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} list.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the user agent can't handle any more `SourceBuffer` objects, or creating
    a new `SourceBuffer` using the given `mimeType` would result in
    an [unsupported configuration of `SourceBuffer`s](https://w3c.github.io/media-source/#sourcebuffer-configuration).

## Examples

The following snippet is from an example written by Nick Desaulniers ([view the full demo live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), or [download the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation). The function `getMediaSource()`, which is not defined here, returns a `MediaSource`.

```js
const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
const mediaSource = getMediaSource();

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  console.log(mediaSource.readyState); // closed
  mediaSource.addEventListener("sourceopen", sourceOpen);
  video.src = URL.createObjectURL(mediaSource);
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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
