---
title: SourceBuffer.remove()
slug: Web/API/SourceBuffer/remove
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - MSE
  - Media Source Extensions
  - Method
  - Reference
  - SourceBuffer
  - Video
  - remove
browser-compat: api.SourceBuffer.remove
---
{{APIRef("Media Source Extensions")}}

The **`remove()`** method of the {{domxref("SourceBuffer")}}
interface removes media segments within a specific time range from the
`SourceBuffer`. This method can only be called when
{{domxref("SourceBuffer.updating")}} equals `false`. If
`SourceBuffer.updating` is not equal to `false`, call
{{domxref("SourceBuffer.abort()")}}.

## Syntax

```js
remove(start, end)
```

### Parameters

- `start`
  - : A double representing the start of the time range, in seconds.
- `end`
  - : A double representing the end of the time range, in seconds.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if either the {{domxref("MediaSource.duration")}} property is equal to `NaN`, the `start` parameter is negative or greater than {{domxref("MediaSource.duration")}}, or the `end` parameter is less than or equal to `start` or equal to `NaN`.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("SourceBuffer.updating")}} property is equal
        to `true`, or this `SourceBuffer` has been removed
        from {{domxref("MediaSource")}}.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
