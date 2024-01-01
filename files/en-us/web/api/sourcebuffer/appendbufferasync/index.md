---
title: "SourceBuffer: appendBufferAsync() method"
short-title: appendBufferAsync()
slug: Web/API/SourceBuffer/appendBufferAsync
page-type: web-api-instance-method
status:
  - experimental
  - non-standard
browser-compat: api.SourceBuffer.appendBufferAsync
---

{{APIRef("Media Source Extensions")}}{{Non-standard_Header}}{{SeeCompatTable}}

The **`appendBufferAsync()`** method
of the {{domxref("SourceBuffer")}} interface begins the process of asynchronously
appending media segment data from an {{jsxref("ArrayBuffer")}},
a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object to the `SourceBuffer` object.
It returns a {{jsxref("Promise")}} which is fulfilled once the buffer has been appended.

## Syntax

```js-nolint
appendBufferAsync(source)
```

### Parameters

- `source`
  - : Either an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object that contains the media segment data you want to add to the `SourceBuffer`.

### Return value

A {{jsxref("Promise")}} which is fulfilled when the buffer has been added successfully to the `SourceBuffer` object,
or `null`, if the request could not be initiated.

## Examples

This simplified example async function, `fillSourceBuffer()`, takes as input
parameters `buffer`, an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}, and a
`SourceBuffer` object to which to append the source media from the buffer.

```js
async function fillSourceBuffer(buffer, msBuffer) {
  try {
    while (true) {
      await msBuffer.appendBufferAsync(buffer);
    }
  } catch (e) {
    handleException(e);
  }
}
```

## Specifications

This feature is not part of any specification. It is not on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [Media Source Extensions API](/en-US/docs/Web/API/Media_Source_Extensions_API)
- {{domxref("SourceBuffer.appendBuffer()")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
