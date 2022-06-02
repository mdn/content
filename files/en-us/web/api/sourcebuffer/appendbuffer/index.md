---
title: SourceBuffer.appendBuffer()
slug: Web/API/SourceBuffer/appendBuffer
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media
  - Media Source Extensions
  - Method
  - Reference
  - SourceBuffer
  - Video
  - appendBuffer
browser-compat: api.SourceBuffer.appendBuffer
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`appendBuffer()`** method of the
{{domxref("SourceBuffer")}} interface appends media segment data from an
{{jsxref("ArrayBuffer")}} or `ArrayBufferView` object to the
`SourceBuffer`.

## Syntax

```js
appendBuffer(source)
```

### Parameters

- `source`
  - : A {{domxref("BufferSource")}} (that is, either an {{domxref("ArrayBufferView")}} or
    {{jsxref("ArrayBuffer")}}) which contains the media segment data you want to add to
    the `SourceBuffer`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

None.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
