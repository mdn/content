---
title: VideoDecoder.flush()
slug: Web/API/VideoDecoder/flush
tags:
  - API
  - Method
  - Reference
  - flush
  - VideoDecoder
browser-compat: api.VideoDecoder.flush
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`flush()`** method of the {{domxref("VideoDecoder")}} interface returns a Promise that resolves once all pending messages in the queue have been completed.

## Syntax

```js
VideoDecoder.flush()
```

### Parameters

None.

### Return Value

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

