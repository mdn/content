---
title: EncodedAudioChunk.copyTo()
slug: Web/API/EncodedAudioChunk/copyTo
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - copyTo
  - EncodedAudioChunk
  - Experimental
browser-compat: api.EncodedAudioChunk.copyTo
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`copyTo()`** method of the {{domxref("EncodedAudioChunk")}} interface copies the encoded chunk of audio data.

## Syntax

```js
copyTo(destination)
```

### Parameters

- `destination`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} that the data can be copied to.

### Return value

None ({{jsxref("undefined")}}).

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
