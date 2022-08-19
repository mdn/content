---
title: SourceBuffer.mode
slug: Web/API/SourceBuffer/mode
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
  - mode
browser-compat: api.SourceBuffer.mode
---
{{APIRef("Media Source Extensions")}}

The **`mode`** property of the {{domxref("SourceBuffer")}}
interface controls whether media segments can be appended to the
`SourceBuffer` in any order, or in a strict sequence.

The two available values are:

- `segments`: The media segment timestamps determine the order in which the
  segments are played. The segments can be appended to the `SourceBuffer` in
  any order.
- `sequence`: The order in which the segments are appended to the
  `SourceBuffer` determines the order in which they are played. Segment
  timestamps are generated automatically for the segments that observe this order.

The mode value is initially set when the `SourceBuffer` is created using
`MediaSource.addSourceBuffer()`. If timestamps already exist for the media
segments, then the value will be set to `segments`; if they don't, then the
value will be set to `sequence`.

If you try to set the `mode` property value to `segments` when
the initial value is `sequence`, an exception will be thrown. The existing
segment order must be maintained in `sequence` mode. You can, however, change
the value from `segments` to `sequence`. It just means the play
order will be fixed, and new timestamps generated to reflect this.

This property cannot be changed during while the `SourceBuffer` is
processing either an {{domxref("SourceBuffer.appendBuffer","appendBuffer()")}} or
{{domxref("SourceBuffer.remove","remove()")}} call.

## Value

A string.

### Exceptions

The following exceptions may be thrown when setting a new value for this property:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to set the value to `segments` when the
        initial value is `sequence`.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("SourceBuffer")}} object is being updated (i.e.
        its {{domxref("SourceBuffer.updating")}} property is
        currently `true`), the last media segment appended to this
        `SourceBuffer` is incomplete, or this
        `SourceBuffer` has been removed from the
        {{domxref("MediaSource")}}.

## Examples

This snippet sets the `sourceBuffer` mode to `'sequence'` if it
is currently set to `'segments'`, thus setting the play order to the sequence
in which media segments are appended.

```js
const curMode = sourceBuffer.mode;
if (curMode === 'segments') {
  sourceBuffer.mode = 'sequence';
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
