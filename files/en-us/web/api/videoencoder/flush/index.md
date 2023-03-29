---
title: VideoEncoder.flush()
slug: Web/API/VideoEncoder/flush
page-type: web-api-instance-method
browser-compat: api.VideoEncoder.flush
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}

The **`flush()`** method of the {{domxref("VideoEncoder")}} interface returns a Promise that resolves once all pending messages in the queue have been completed.

## Syntax

```js-nolint
flush()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with undefined.

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
