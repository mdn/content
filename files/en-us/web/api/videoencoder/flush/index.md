---
title: "VideoEncoder: flush() method"
short-title: flush()
slug: Web/API/VideoEncoder/flush
page-type: web-api-instance-method
browser-compat: api.VideoEncoder.flush
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`flush()`** method of the {{domxref("VideoEncoder")}} interface forces all pending encodes to complete.

## Syntax

```js-nolint
flush()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves once the encoder's initialization is completed and all pending {{domxref("EncodedVideoChunk")}}s are returned.

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
