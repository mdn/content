---
title: SourceBuffer.timestampOffset
slug: Web/API/SourceBuffer/timestampOffset
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - SourceBuffer
  - Video
  - timestampOffset
browser-compat: api.SourceBuffer.timestampOffset
---
{{APIRef("Media Source Extensions")}}

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
        (i.e. their {{domxref("SourceBuffer.updating")}} property is
        currently `true`), a media segment inside the
        `SourceBuffer` is currently being parsed, or this
        `SourceBuffer` has been removed from the
        {{domxref("MediaSource")}}.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
