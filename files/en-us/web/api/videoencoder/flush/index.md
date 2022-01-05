---
title: VideoEncoder.flush()
slug: Web/API/VideoEncoder/flush
tags:
  - API
  - Method
  - Reference
  - flush
  - VideoEncoder
browser-compat: api.VideoEncoder.flush
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`flush()`** method of the {{domxref("VideoEncoder")}} interface returns a Promise that resolves once all pending messages in the queue have been completed.

## Syntax

```js
VideoEncoder.flush()
```

### Parameters

None.

### Return Value

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

