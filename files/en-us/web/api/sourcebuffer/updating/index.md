---
title: SourceBuffer.updating
slug: Web/API/SourceBuffer/updating
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - SourceBuffer
  - Updating
  - Video
browser-compat: api.SourceBuffer.updating
---
{{APIRef("Media Source Extensions")}}

The **`updating`** read-only property of the
{{domxref("SourceBuffer")}} interface indicates whether the `SourceBuffer` is
currently being updated — i.e. whether an {{domxref("SourceBuffer.appendBuffer()")}},
{{domxref("SourceBuffer.appendStream()")}}, or {{domxref("SourceBuffer.remove()")}}
operation is currently in progress.

## Value

A boolean value.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
