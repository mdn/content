---
title: "SourceBuffer: appendWindowStart property"
short-title: appendWindowStart
slug: Web/API/SourceBuffer/appendWindowStart
page-type: web-api-instance-property
browser-compat: api.SourceBuffer.appendWindowStart
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`appendWindowStart`** property of the
{{domxref("SourceBuffer")}} interface controls the timestamp for the start of the [append window](https://w3c.github.io/media-source/#append-window), a
timestamp range that can be used to filter what media data is appended to the
`SourceBuffer`. Coded media frames with timestamps within this range will be
appended, whereas those outside the range will be filtered out.

The default value of `appendWindowStart` is the presentation start time,
which is the beginning time of the playable media.

## Value

A double, indicating the start time of the append window, in seconds.

### Exceptions

The following exceptions may be thrown when setting a new value for this property:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to set the value to less than 0 or to a value greater
    than or equal to
    {{domxref("SourceBuffer.appendWindowEnd")}}.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("SourceBuffer")}} object is being updated (i.e.
    its {{domxref("SourceBuffer.updating")}} property is
    currently `true`), or this `SourceBuffer` has been
    removed from the {{domxref("MediaSource")}}.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
