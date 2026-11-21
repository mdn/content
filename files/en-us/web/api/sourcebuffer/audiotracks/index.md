---
title: "SourceBuffer: audioTracks property"
short-title: audioTracks
slug: Web/API/SourceBuffer/audioTracks
page-type: web-api-instance-property
browser-compat: api.SourceBuffer.audioTracks
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`audioTracks`** read-only property of the
{{domxref("SourceBuffer")}} interface returns a list of the audio tracks currently
contained inside the `SourceBuffer`.

## Value

An {{domxref("AudioTrackList")}} object.

## Examples

### Counting audio tracks

In the [`SourceBuffer` live example](/en-US/docs/Web/API/SourceBuffer#loading_a_video_chunk_by_chunk), add the following code after the `for await...of` loop, before `this.endOfStream()`, to count the audio tracks after the video data has been appended.

```js
console.log(sourceBuffer.audioTracks.length); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
