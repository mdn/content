---
title: MediaSource.sourceBuffers
slug: Web/API/MediaSource/sourceBuffers
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
  - sourceBuffers
browser-compat: api.MediaSource.sourceBuffers
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`sourceBuffers`** read-only property of the
{{domxref("MediaSource")}} interface returns a {{domxref("SourceBufferList")}} object
containing the list of {{domxref("SourceBuffer")}} objects associated with this
`MediaSource`.

## Syntax

```js
var mySourceBuffers = mediaSource.sourceBuffers;
```

### Value

A {{domxref("SourceBufferList")}}.

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
      console.log(mediaSource.sourceBuffers); // will contain the source buffer that was added above
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
