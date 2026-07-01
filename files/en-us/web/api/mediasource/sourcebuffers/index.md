---
title: "MediaSource: sourceBuffers property"
short-title: sourceBuffers
slug: Web/API/MediaSource/sourceBuffers
page-type: web-api-instance-property
browser-compat: api.MediaSource.sourceBuffers
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`sourceBuffers`** read-only property of the
{{domxref("MediaSource")}} interface returns a {{domxref("SourceBufferList")}} object
containing the list of {{domxref("SourceBuffer")}} objects associated with this
`MediaSource`.

## Value

A {{domxref("SourceBufferList")}}.

## Examples

The following snippet is based on an example written by Nick Desaulniers ([view the full demo live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), or [download the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation). The function `getMediaSource()`, which is not defined here, returns a `MediaSource`.

```js
const mediaSource = getMediaSource();

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      console.log(mediaSource.sourceBuffers); // will contain the source buffer that was added above
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
