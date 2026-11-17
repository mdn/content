---
title: "SourceBuffer: remove() method"
short-title: remove()
slug: Web/API/SourceBuffer/remove
page-type: web-api-instance-method
browser-compat: api.SourceBuffer.remove
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`remove()`** method of the {{domxref("SourceBuffer")}}
interface removes media segments within a specific time range from the
`SourceBuffer`. This method can only be called when
{{domxref("SourceBuffer.updating")}} equals `false`. If
`SourceBuffer.updating` is not equal to `false`, call
{{domxref("SourceBuffer.abort()")}}.

## Syntax

```js-nolint
remove(start, end)
```

### Parameters

- `start`
  - : A double representing the start of the time range, in seconds.
- `end`
  - : A double representing the end of the time range, in seconds.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if either the {{domxref("MediaSource.duration")}} property is equal to `NaN`, the `start` parameter is negative or greater than {{domxref("MediaSource.duration")}}, or the `end` parameter is less than or equal to `start` or equal to `NaN`.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("SourceBuffer.updating")}} property is equal
    to `true`, or this `SourceBuffer` has been removed
    from {{domxref("MediaSource")}}.

## Examples

### Removing a time range

In the [`SourceBuffer` live example](/en-US/docs/Web/API/SourceBuffer#loading_a_video_chunk_by_chunk), add the following code after the `for await...of` loop, before `this.endOfStream()`, to remove the video data from 3 seconds onward. The stream ends after the removal finishes.

```js
await new Promise((resolve) => {
  sourceBuffer.addEventListener("updateend", resolve, { once: true });
  sourceBuffer.remove(3, Infinity);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
