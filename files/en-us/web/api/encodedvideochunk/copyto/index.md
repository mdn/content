---
title: EncodedVideoChunk.copyTo()
slug: Web/API/EncodedVideoChunk/copyTo
tags:
  - API
  - Method
  - Reference
  - copyTo
  - EncodedVideoChunk
browser-compat: api.EncodedVideoChunk.copyTo
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`copyTo()`** method of the {{domxref("EncodedVideoChunk")}} interface copies the encoded chunk of video data.

## Syntax

```js
EncodedVideoChunk.copyTo(destination)
```

### Parameters

- `destination`
  - : A {{domxref("BufferSource")}} that the data can be copied to.

### Return Value

{{jsxref("Undefined")}}.

## Examples

In the following example an {{domxref("EncodedVideoChunk")}} is created then copied.

```js
const init = {
  type: 'key',
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000
};
chunk = EncodedVideoChunk(init);

chunk.copyTo(newBuffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
