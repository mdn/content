---
title: MediaSource.endOfStream()
slug: Web/API/MediaSource/endOfStream
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - MediaSource
  - Method
  - Reference
  - Video
  - endOfStream
browser-compat: api.MediaSource.endOfStream
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`endOfStream()`** method of the
{{domxref("MediaSource")}} interface signals the end of the stream.

## Syntax

```js
mediaSource.endOfStream(endOfStreamError);
```

### Parameters

- endOfStreamError {{optional_inline}}

  - : A {{domxref("DOMString")}} representing an error to throw when the end of the stream
    is reached. The possible values are:

    - `network`: Terminates playback and signals that a network error has
      occurred. This can be used create a custom error handler related to media streams.
      For example, you might have a function that handles media chunk requests, separate
      from other network requests. When you make an [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest) call for a media
      chunk, and `onabort` or `onerror` triggers, you might want
      to call `endOfStream('network')`, display a descriptive message in the
      UI, and maybe retry the network request immediately or wait until the network is
      back up (via some kind of polling.)
    - `decode`: Terminates playback and signals that a decoding error has
      occurred. This can be used to indicate that a parsing error has occurred while
      fetching media data; maybe the data is corrupt, or is encoded using a codec that
      the browser doesn't know how to decode.

### Return value

{{jsxref('undefined')}}

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("MediaSource.readyState")}} is not equal to `open`, or one or more of the {{domxref("SourceBuffer")}} objects in {{domxref("MediaSource.sourceBuffers")}} are being updated (i.e. their {{domxref("SourceBuffer.updating")}} property is
      `true`.)

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
