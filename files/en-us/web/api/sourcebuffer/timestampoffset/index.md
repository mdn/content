---
title: "SourceBuffer: timestampOffset property"
short-title: timestampOffset
slug: Web/API/SourceBuffer/timestampOffset
page-type: web-api-instance-property
browser-compat: api.SourceBuffer.timestampOffset
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`timestampOffset`** property of the
{{domxref("SourceBuffer")}} interface controls the offset applied to timestamps inside
media segments that are appended to the `SourceBuffer`.

The initial value of `timestampOffset` is 0.

## Value

A double, with the offset amount expressed in seconds.

### Exceptions

The following exception may be thrown when setting a new value for this property:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if one or more of the {{domxref("SourceBuffer")}} objects in
    {{domxref("MediaSource.sourceBuffers")}} are being updated
    (i.e., their {{domxref("SourceBuffer.updating")}} property is
    currently `true`), a media segment inside the
    `SourceBuffer` is currently being parsed, or this
    `SourceBuffer` has been removed from the
    {{domxref("MediaSource")}}.

## Examples

### Setting a timestamp offset

In the [`SourceBuffer` live example](/en-US/docs/Web/API/SourceBuffer#loading_a_video_chunk_by_chunk), add the following code immediately after `sourceBuffer` is created to shift the timestamps of the appended media forward by 10 seconds.

```js
sourceBuffer.timestampOffset = 10;
console.log(sourceBuffer.timestampOffset); // 10
```

Also add the following code after the `for await...of` loop, before `this.endOfStream()`, to start playback at the beginning of the buffered range.

```js
video.currentTime = sourceBuffer.buffered.start(0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
