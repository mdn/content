---
title: "VideoDecoder: flush() method"
short-title: flush()
slug: Web/API/VideoDecoder/flush
page-type: web-api-instance-method
browser-compat: api.VideoDecoder.flush
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`flush()`** method of the {{domxref("VideoDecoder")}} interface returns a Promise that resolves once all pending messages in the queue have been completed.

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
  - : Returned if the Promise is rejected because the {{domxref("VideoDecoder.state","state")}} is not `configured`.

## Examples

The following example flushes the `VideoDecoder`.

```js
VideoDecoder.flush();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
