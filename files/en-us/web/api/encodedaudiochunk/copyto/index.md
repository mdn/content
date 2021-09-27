---
title: EncodedAudioChunk.copyTo()
slug: Web/API/EncodedAudioChunk/copyTo
tags:
  - API
  - Method
  - Reference
  - copyTo
  - EncodedAudioChunk
browser-compat: api.EncodedAudioChunk.copyTo
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`copyTo()`** method of the {{domxref("EncodedAudioChunk")}} interface copies the encoded chunk of audio data.

## Syntax

```js
EncodedAudioChunk.copyTo(destination)
```

### Parameters

- `destination`
  - : A {{domxref("BufferSource")}} that the data can be copied to.

### Return Value

{{jsxref("Undefined")}}.

## Examples

In the following example an {{domxref("EncodedAudioChunk")}} is created then copied.

```js
const init = {
  type: 'key',
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000
};
chunk = EncodedAudioChunk(init);

chunk.copyTo(newBuffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

