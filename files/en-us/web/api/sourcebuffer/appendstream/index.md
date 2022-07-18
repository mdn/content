---
title: SourceBuffer.appendStream()
slug: Web/API/SourceBuffer/appendStream
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Method
  - Reference
  - SourceBuffer
  - Video
  - appendstream
browser-compat: api.SourceBuffer.appendStream
---
{{APIRef("Media Source Extensions")}}{{deprecated_header}}

The **`appendStream()`** method of the
{{domxref("SourceBuffer")}} interface appends media segment data from a
`ReadableStream` object to the `SourceBuffer`.

## Syntax

```js
appendStream(stream, maxSize)
```

### Parameters

- `stream`
  - : The {{domxref("ReadableStream")}} that is the source of the media segment data you
    want to append to the `SourceBuffer`.
- `maxSize`
  - : An unsigned long value indicating the maximum number of bytes that can be appended
    in this operation.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

None.

## Examples

TBD.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
