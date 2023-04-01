---
title: VideoDecoder.decode()
slug: Web/API/VideoDecoder/decode
page-type: web-api-instance-method
browser-compat: api.VideoDecoder.decode
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}

The **`decode()`** method of the {{domxref("VideoDecoder")}} interface enqueues a control message to decode a given chunk of video.

## Syntax

```js-nolint
decode(chunk)
```

### Parameters

- `chunk`
  - : An {{domxref("EncodedVideoChunk")}} object representing a chunk of encoded video.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("VideoDecoder.state","state")}} is not `configured`.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the `chunk` is unable to be decoded due to relying on other frames for decoding.

## Examples

The following example demonstrates how to use the `decode()` method to decode {{domxref("EncodedVideoChunk")}} objects created from encoded video data.

```js
const responses = await downloadVideoChunksFromServer(timestamp);
for (const response of responses) {
  const chunk = new EncodedVideoChunk({
    timestamp: response.timestamp,
    data: new Uint8Array(response.body),
  });
  decoder.decode(chunk);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
