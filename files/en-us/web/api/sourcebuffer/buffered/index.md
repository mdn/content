---
title: SourceBuffer.buffered
slug: Web/API/SourceBuffer/buffered
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - SourceBuffer
  - Video
  - buffered
browser-compat: api.SourceBuffer.buffered
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}{{draft}}

The **`buffered`** read-only property of the
{{domxref("SourceBuffer")}} interface returns the time ranges that are currently
buffered in the `SourceBuffer` as a normalized {{domxref("TimeRanges")}}
object.

## Syntax

```js
var myBufferedRange = sourceBuffer.buffered;
```

### Value

A {{domxref("TimeRanges")}} object.

## Example

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
