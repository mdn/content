---
title: "SourceBuffer: updating property"
short-title: updating
slug: Web/API/SourceBuffer/updating
page-type: web-api-instance-property
browser-compat: api.SourceBuffer.updating
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`updating`** read-only property of the
{{domxref("SourceBuffer")}} interface indicates whether the `SourceBuffer` is
currently being updated — i.e., whether an {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} or {{domxref("SourceBuffer.remove", "remove()")}}
operation is currently in progress.

## Value

A boolean value.

## Examples

### Observing the updating state

In the [`SourceBuffer` live example](/en-US/docs/Web/API/SourceBuffer#loading_a_video_chunk_by_chunk), add the following code immediately after `sourceBuffer.appendBuffer(chunk)` inside the promise executor to read `updating` while the append operation is in progress.

```js
console.log(sourceBuffer.updating); // true
```

Add the following code inside the `for await...of` loop, immediately after `await new Promise(...)`, to read it after each append operation finishes.

```js
console.log(sourceBuffer.updating); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
