---
title: SourceBuffer.timestampOffset
slug: Web/API/SourceBuffer/timestampOffset
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
  - timestampOffset
browser-compat: api.SourceBuffer.timestampOffset
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}{{draft}}

The **`timestampOffset`** property of the
{{domxref("SourceBuffer")}} interface controls the offset applied to timestamps inside
media segments that are appended to the `SourceBuffer`.

The initial value of `timestampOffset` is 0.

## Syntax

```js
var myOffset = sourceBuffer.timestampOffset;

sourceBuffer.timestampOffset = 2.5;
```

### Value

A double, with the offset amount expressed in seconds.

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
      <td><code>InvalidStateError</code></td>
      <td>
        One or more of the {{domxref("SourceBuffer")}} objects in
        {{domxref("MediaSource.sourceBuffers")}} are being updated
        (i.e. their {{domxref("SourceBuffer.updating")}} property is
        currently <code>true</code>), a media segment inside the
        <code>SourceBuffer</code> is currently being parsed, or this
        <code>SourceBuffer</code> has been removed from the
        {{domxref("MediaSource")}}.
      </td>
    </tr>
  </tbody>
</table>

## Example

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
