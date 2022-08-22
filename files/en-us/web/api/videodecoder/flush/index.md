---
title: VideoDecoder.flush()
slug: Web/API/VideoDecoder/flush
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - flush
  - VideoDecoder
  - Experimental
browser-compat: api.VideoDecoder.flush
---
{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`flush()`** method of the {{domxref("VideoDecoder")}} interface returns a Promise that resolves once all pending messages in the queue have been completed.

## Syntax

```js
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
