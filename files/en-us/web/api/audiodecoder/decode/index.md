---
title: AudioDecoder.decode()
slug: Web/API/AudioDecoder/decode
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - decode
  - AudioDecoder
  - Experimental
browser-compat: api.AudioDecoder.decode
---
{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`decode()`** method of the {{domxref("AudioDecoder")}} interface enqueues a control message to decode a given chunk of audio.

## Syntax

```js
decode(chunk)
```

### Parameters

- `chunk`
  - : An {{domxref("EncodedAudioChunk")}} object representing a chunk of encoded audio.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("AudioDecoder.state","state")}} is not `"configured"`.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the `chunk` is unable to be decoded due to relying on other frames for decoding.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
