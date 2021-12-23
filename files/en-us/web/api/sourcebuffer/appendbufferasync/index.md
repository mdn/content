---
title: SourceBuffer.appendBufferAsync()
slug: Web/API/SourceBuffer/appendBufferAsync
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media
  - Media Source Extensions
  - Method
  - Non-standard
  - Reference
  - SourceBuffer
  - Video
  - appendBufferAsync
browser-compat: api.SourceBuffer.appendBufferAsync
---
{{APIRef("Media Source Extensions")}}{{non-standard_header}}{{SeeCompatTable}}

The **`appendBufferAsync()`** method
of the {{domxref("SourceBuffer")}} interface begins the process of asynchronously
appending media segment data from an {{jsxref("ArrayBuffer")}} or
{{domxref("ArrayBufferView")}} object to the `SourceBuffer`. It
returns a {{jsxref("Promise")}} which is fulfilled once the buffer has been appended.

## Syntax

```js
appendPromise = sourceBuffer.appendBufferAsync(source);
```

### Parameters

- `source`
  - : A {{domxref("BufferSource")}} (that is, either an {{domxref("ArrayBufferView")}} or
    {{jsxref("ArrayBuffer")}}) which contains the media segment data you want to add to
    the `SourceBuffer`.

### Return value

A {{jsxref("Promise")}} which is fulfilled when the buffer has been added successfully
to the `SourceBuffer`, or `null` if the request could not be
initiated.

## Example

This simplified example async function, `fillSourceBuffer()`, takes as input
parameters {{domxref("BufferSource")}}, `buffer`, and a
`SourceBuffer` to which to append the source media from the buffer.

```js
async function fillSourceBuffer(buffer, msBuffer) {
  try {
    while(true) {
      await msBuffer.appendBufferAsync(buffer);
    }
  } catch(e) {
    handleException(e);
  }
}
```

## Specifications

This feature is not part of any specification. It is not on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [Media Source Extensions
  API](/en-US/docs/Web/API/Media_Source_Extensions_API)
- {{domxref("SourceBuffer.appendBuffer()")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
