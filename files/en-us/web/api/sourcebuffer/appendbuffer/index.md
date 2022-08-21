---
title: SourceBuffer.appendBuffer()
slug: Web/API/SourceBuffer/appendBuffer
page-type: web-api-instance-method
tags:
  - API
  - Audio
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
{{APIRef("Media Source Extensions")}}

The **`appendBuffer()`** method of the
{{domxref("SourceBuffer")}} interface appends media segment data from an
{{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object
to the `SourceBuffer`.

## Syntax

```js
appendBuffer(source)
```

### Parameters

- `source`
  - : Either an {{domxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object
    that contains the media segment data you want to add to the `SourceBuffer`.

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
