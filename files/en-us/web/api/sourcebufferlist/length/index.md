---
title: "SourceBufferList: length property"
short-title: length
slug: Web/API/SourceBufferList/length
page-type: web-api-instance-property
browser-compat: api.SourceBufferList.length
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`length`** read-only property of the
{{domxref("SourceBufferList")}} interface returns the number of
{{domxref("SourceBuffer")}} objects in the list.

## Value

An unsigned long number.

## Examples

### Counting source buffers

In the [`SourceBuffer` live example](/en-US/docs/Web/API/SourceBuffer#loading_a_video_chunk_by_chunk), add the following code immediately after `sourceBuffer` is created to count the source buffers attached to the media source.

```js
console.log(this.sourceBuffers.length); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
