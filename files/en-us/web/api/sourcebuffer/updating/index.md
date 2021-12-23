---
title: SourceBuffer.updating
slug: Web/API/SourceBuffer/updating
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - SourceBuffer
  - Updating
  - Video
browser-compat: api.SourceBuffer.updating
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}{{draft}}

The **`updating`** read-only property of the
{{domxref("SourceBuffer")}} interface indicates whether the `SourceBuffer` is
currently being updated — i.e. whether an {{domxref("SourceBuffer.appendBuffer()")}},
{{domxref("SourceBuffer.appendStream()")}}, or {{domxref("SourceBuffer.remove()")}}
operation is currently in progress.

## Syntax

```js
var isUpdating = sourceBuffer.updating;
```

### Value

A boolean value.

## Example

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
