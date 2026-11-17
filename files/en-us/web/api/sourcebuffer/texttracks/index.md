---
title: "SourceBuffer: textTracks property"
short-title: textTracks
slug: Web/API/SourceBuffer/textTracks
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SourceBuffer.textTracks
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

The **`textTracks`** read-only property of the
{{domxref("SourceBuffer")}} interface returns a list of the text tracks currently
contained inside the `SourceBuffer`.

## Value

A {{domxref("TextTrackList")}} object.

## Examples

### Counting text tracks

In the [`SourceBuffer` live example](/en-US/docs/Web/API/SourceBuffer#loading_a_video_chunk_by_chunk), add the following code after the `for await...of` loop, before `this.endOfStream()`, to count the text tracks after the video data has been appended.

```js
console.log(sourceBuffer.textTracks.length); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
