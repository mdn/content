---
title: MediaSource.duration
slug: Web/API/MediaSource/duration
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
  - duration
browser-compat: api.MediaSource.duration
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`duration`** property of the {{domxref("MediaSource")}}
interface gets and sets the duration of the current media being presented.

## Syntax

```js
mediaSource.duration = 5.5; // 5.5 seconds

var myDuration = mediaSource.duration;
```

### Value

A double. A value in seconds is expected.

### Exceptions

The following exceptions may be thrown when setting a new value for this property.

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to set a duration value that was negative or `NaN`.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("MediaSource.readyState")}} is not equal to
        `open`, or one or more of the
        {{domxref("SourceBuffer")}} objects in
        {{domxref("MediaSource.sourceBuffers")}} are being updated
        (i.e. their {{domxref("SourceBuffer.updating")}} property is
      `true`.)

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
      mediaSource.duration = 120;
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
