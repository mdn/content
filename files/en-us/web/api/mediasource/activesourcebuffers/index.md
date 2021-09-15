---
title: MediaSource.activeSourceBuffers
slug: Web/API/MediaSource/activeSourceBuffers
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - MediaSource
  - MediaSourceExtensions
  - Property
  - Reference
  - Video
  - activeSourceBuffers
browser-compat: api.MediaSource.activeSourceBuffers
---
{{APIRef("Media Source Extensions")}}

The **`activeSourceBuffers`** read-only property of the
{{domxref("MediaSource")}} interface returns a {{domxref("SourceBufferList")}} object
containing a subset of the {{domxref("SourceBuffer")}} objects contained within
{{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} — the list of objects
providing the selected video track, enabled audio tracks, and shown/hidden text tracks.

## Syntax

```js
var myActiveSourceBuffers = mediaSource.activeSourceBuffers;
```

### Value

A {{domxref("SourceBufferList")}} containing the {{domxref("SourceBuffer")}} objects
for each of the active tracks.

## Example

The following snippet is based on a simple example written by Nick Desaulniers ([view the full demo
live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), or [download
the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation.)

```js
function sourceOpen (_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream();
      console.log(mediaSource.activeSourceBuffers);
      // will contain the source buffer that was added above,
      // as it is selected for playing in the video player
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
};

...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
