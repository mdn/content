---
title: SourceBuffer.appendWindowEnd
slug: Web/API/SourceBuffer/appendWindowEnd
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
  - appendWindowEnd
browser-compat: api.SourceBuffer.appendWindowEnd
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}{{draft}}

The **`appendWindowEnd`** property of the
{{domxref("SourceBuffer")}} interface controls the timestamp for the end of the [append window](https://w3c.github.io/media-source/#append-window), a
timestamp range that can be used to filter what media data is appended to the
`SourceBuffer`. Coded media frames with timestamps wthin this range will be
appended, whereas those outside the range will be filtered out.

The default value of `appendWindowEnd` is positive infinity.

## Syntax

```js
var myAppendWindowEnd = sourceBuffer.appendWindowEnd;

sourceBuffer.appendWindowEnd = 120.0;
```

### Value

A double, indicating the end time of the append window, in seconds.

### Exceptions

The following exceptions may be thrown when setting a new value for this property:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to set the value to less than or equal to
        {{domxref("SourceBuffer.appendWindowStart")}} or `Nan`.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("SourceBuffer")}} object is being updated (i.e.
        its {{domxref("SourceBuffer.updating")}} property is
        currently <code>true</code>), or this <code>SourceBuffer</code> has been
        removed from the {{domxref("MediaSource")}}.

## Example

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
