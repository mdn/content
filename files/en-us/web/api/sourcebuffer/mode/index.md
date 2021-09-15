---
title: SourceBuffer.mode
slug: Web/API/SourceBuffer/mode
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
  - mode
browser-compat: api.SourceBuffer.mode
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`mode`** property of the {{domxref("SourceBuffer")}}
interface controls whether media segments can be appended to the
`SourceBuffer` in any order, or in a strict sequence.

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

## Syntax

```js
var myMode = sourceBuffer.mode;

sourceBuffer.mode = 'sequence';
```

### Value

A {{domxref("DOMString")}}.

### Exceptions

The following exceptions may be thrown when setting a new value for this property.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>InvalidAccessError</code></td>
      <td>
        An attempt was made to set the value to <code>segments</code> when the
        initial value is <code>sequence</code>.
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        The {{domxref("SourceBuffer")}} object is being updated (i.e.
        its {{domxref("SourceBuffer.updating")}} property is
        currently <code>true</code>), the last media segment appended to this
        <code>SourceBuffer</code> is incomplete, or this
        <code>SourceBuffer</code> has been removed from the
        {{domxref("MediaSource")}}.
      </td>
    </tr>
  </tbody>
</table>

## Example

This snippet sets the `sourceBuffer` mode to `'sequence'` if it
is currently set to `'segments'`, thus setting the play order to the sequence
in which media segments are appended.

```js
var curMode = sourceBuffer.mode;
if (curMode == 'segments') {
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
