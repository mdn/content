---
title: "SourceBuffer: buffered property"
short-title: buffered
slug: Web/API/SourceBuffer/buffered
page-type: web-api-instance-property
browser-compat: api.SourceBuffer.buffered
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`buffered`** read-only property of the
{{domxref("SourceBuffer")}} interface returns the time ranges that are currently
buffered in the `SourceBuffer` as a normalized {{domxref("TimeRanges")}}
object.

## Value

A {{domxref("TimeRanges")}} object.

## Examples

### Reading the buffered ranges

In the [`SourceBuffer` live example](/en-US/docs/Web/API/SourceBuffer#loading_a_video_chunk_by_chunk), add the following code after the `for await...of` loop, before `this.endOfStream()`, to display each buffered time range in seconds.

```js
for (let i = 0; i < sourceBuffer.buffered.length; i++) {
  console.log(
    sourceBuffer.buffered.start(i).toFixed(2),
    sourceBuffer.buffered.end(i).toFixed(2),
  ); // e.g., "0.00" "5.12"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
