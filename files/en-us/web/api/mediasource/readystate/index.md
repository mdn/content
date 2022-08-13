---
title: MediaSource.readyState
slug: Web/API/MediaSource/readyState
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - MSE
  - Media Source Extensions
  - MediaSource
  - Property
  - Reference
  - Video
  - readyState
browser-compat: api.MediaSource.readyState
---
{{APIRef("Media Source Extensions")}}

The **`readyState`** read-only property of the
{{domxref("MediaSource")}} interface returns an enum representing the state of the
current `MediaSource`. The three possible values are:

- `closed`: The source is not currently attached to a media element.
- `open`: The source is attached to a media element and ready to receive
  {{domxref("SourceBuffer")}} objects.
- `ended`: The source is attached to a media element but the stream has
  been ended via a call to {{domxref("MediaSource.endOfStream()")}}.

## Value

A string.

## Examples

The following snippet is from a simple example written by Nick Desaulniers ([view the full demo live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), or [download the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation). The function `getMediaSource()`, which is not defined here, returns a `MediaSource`.

```js
let mediaSource;

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = getMediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('Unsupported MIME type or codec: ', mimeCodec);
}

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener('updateend', () => {
      mediaSource.endOfStream();
      video.play();
      console.log(mediaSource.readyState); // ended
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
