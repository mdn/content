---
title: VideoEncoder.flush()
slug: Web/API/VideoEncoder/flush
page-type: web-api-instance-method
browser-compat: api.VideoEncoder.flush
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}

Forces all pending encodes to complete as soon as possible.

## Syntax

```js-nolint
flush()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves once the encoder's initialization is completed and all {{domxref("EncodedVideoChunk")}}s are returned.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the Promise is rejected because the {{domxref("VideoEncoder.state","state")}} is not `configured`.

## Examples

The following example flushes the `VideoEncoder`.

```js
VideoEncoder.flush();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
