---
title: AudioDecoder.decode()
slug: Web/API/AudioDecoder/decode
tags:
  - API
  - Method
  - Reference
  - decode
  - AudioDecoder
browser-compat: api.AudioDecoder.decode
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`decode()`** method of the {{domxref("AudioDecoder")}} interface enqueues a control message to decode a given chunk of audio.

## Syntax

```js
AudioDecoder.decode(chunk)
```

### Parameters

- `chunk`
  - : An {{domxref("EncodedAudioChunk")}} object representing a chunk of encoded audio.

### Return Value

{{jsxref("Undefined")}}.

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

