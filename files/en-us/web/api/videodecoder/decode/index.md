---
title: VideoDecoder.decode()
slug: Web/API/VideoDecoder/decode
tags:
  - API
  - Method
  - Reference
  - decode
  - VideoDecoder
browser-compat: api.VideoDecoder.decode
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`decode()`** method of the {{domxref("VideoDecoder")}} interface enqueues a control message to decode a given chunk of video.

## Syntax

```js
VideoDecoder.decode(chunk)
```

### Parameters

- `chunk`
  - : An {{domxref("EncodedVideoChunk")}} object representing a chunk of encoded video.

### Return Value

{{jsxref("Undefined")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("VideoDecoder.state","state")}} is not `configured`.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the `chunk` is unable to be decoded due to relying on other frames for decoding.

## Examples

The following example demonstrates how to use the `decode()` method to decode {{domxref("EncodedVideoChunk")}} objects created from encoded video data.

```js
let responses = await downloadVideoChunksFromServer(timestamp);
for (let i = 0; i < responses.length; i++) {
  let chunk = new EncodedVideoChunk({
    timestamp: responses[i].timestamp,
    data: new Uint8Array ( responses[i].body )
  });
  decoder.decode(chunk);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

