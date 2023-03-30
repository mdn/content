---
title: EncodedVideoChunk.copyTo()
slug: Web/API/EncodedVideoChunk/copyTo
page-type: web-api-instance-method
browser-compat: api.EncodedVideoChunk.copyTo
---

{{APIRef("WebCodecs API")}}

The **`copyTo()`** method of the {{domxref("EncodedVideoChunk")}} interface copies the encoded chunk of video data.

## Syntax

```js-nolint
copyTo(destination)
```

### Parameters

- `destination`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} that the data can be copied to.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In the following example an {{domxref("EncodedVideoChunk")}} is created then copied.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedVideoChunk(init);

chunk.copyTo(newBuffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
