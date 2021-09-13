---
title: MediaSource()
slug: Web/API/MediaSource/MediaSource
tags:
  - API
  - Audio
  - Constructor
  - Experimental
  - MSE
  - Media Source Extensions
  - MediaSource
  - Reference
  - Video
browser-compat: api.MediaSource.MediaSource
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`MediaSource()`** constructor of the
{{domxref("MediaSource")}} interface constructs and returns a new
`MediaSource` object with no associated source buffers.

## Syntax

```js
var mediaSource = new MediaSource();
```

### Parameters

None.

## Example

The following snippet is taken from a simple example written by Nick Desaulniers ([view the full demo
live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), or [download
the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation.)

```js
var video = document.querySelector('video');

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

...
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
