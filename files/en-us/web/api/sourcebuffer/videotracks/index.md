---
title: "SourceBuffer: videoTracks property"
short-title: videoTracks
slug: Web/API/SourceBuffer/videoTracks
page-type: web-api-instance-property
browser-compat: api.SourceBuffer.videoTracks
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`videoTracks`** read-only property of the
{{domxref("SourceBuffer")}} interface returns a list of the video tracks currently
contained inside the `SourceBuffer`.

## Value

A {{domxref("VideoTrackList")}} object.

## Examples

### Counting video tracks

In the [`SourceBuffer` live example](/en-US/docs/Web/API/SourceBuffer#loading_a_video_chunk_by_chunk), add the following code after the `for await...of` loop, before `this.endOfStream()`, to count the video tracks after the video data has been appended.

```js
console.log(sourceBuffer.videoTracks.length); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
