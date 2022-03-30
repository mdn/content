---
title: MediaSource.addSourceBuffer()
slug: Web/API/MediaSource/addSourceBuffer
tags:
  - API
  - Audio
  - MSE
  - Media
  - Media Source Extensions
  - MediaSource
  - Method
  - Reference
  - Video
  - addSourceBuffer
browser-compat: api.MediaSource.addSourceBuffer
---
{{APIRef("Media Source Extensions")}}

The **`addSourceBuffer()`** method of the
{{domxref("MediaSource")}} interface creates a new {{domxref("SourceBuffer")}} of the
given {{Glossary("MIME type")}} and adds it to the `MediaSource`'s
{{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} list. The new
`SourceBuffer` is also returned.

## Syntax

```js
var sourceBuffer = mediaSource.addSourceBuffer(mimeType);
```

### Parameters

- `mimeType`
  - : A {{domxref("DOMString")}} specifying the MIME type of the
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
  - : Thrown if the specified `mimeType` isn't supported by the {{Glossary("user
    agent")}}, or is not compatible with the MIME types of other
    {{domxref("SourceBuffer")}} objects that are already included in the media source's
    {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} list.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the user agent can't handle any more `SourceBuffer` objects, or creating
    a new `SourceBuffer` using the given `mimeType` would result in
    an [unsupported configuration of `SourceBuffer`s](https://w3c.github.io/media-source/#sourcebuffer-configuration).

## Example

The following snippet is from a simple example written by Nick Desaulniers ([view the full demo
live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), or [download
the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation.)

```js
var assetURL = 'frag_bunny.mp4';
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource;
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('Unsupported MIME type or codec: ', mimeCodec);
}

function sourceOpen (_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
