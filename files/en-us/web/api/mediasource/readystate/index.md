---
title: MediaSource.readyState
slug: Web/API/MediaSource/readyState
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - MediaSource
  - Property
  - Reference
  - Video
  - readyState
browser-compat: api.MediaSource.readyState
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`readyState`** read-only property of the
{{domxref("MediaSource")}} interface returns an enum representing the state of the
current `MediaSource`. The three possible values are:

- `closed`: The source is not currently attached to a media element.
- `open`: The source is attached to a media element and ready to receive
  {{domxref("SourceBuffer")}} objects.
- `ended`: The source is attached to a media element but the stream has
  been ended via a call to {{domxref("MediaSource.endOfStream()")}}.

## Syntax

```js
var myReadyState = mediaSource.readyState;
```

### Value

A {{domxref("DOMString")}}.

## Example

The following snippet is from a simple example written by Nick Desaulniers ([view the full demo
live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), or [download
the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation.)

```js
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
