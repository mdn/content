---
title: AudioDecoder.flush()
slug: Web/API/AudioDecoder/flush
tags:
  - API
  - Method
  - Reference
  - flush
  - AudioDecoder
browser-compat: api.AudioDecoder.flush
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`flush()`** method of the {{domxref("AudioDecoder")}} interface returns a Promise that resolves once all pending messages in the queue have been completed.

## Syntax

```js
AudioDecoder.flush()
```

### Parameters

None.

### Return Value

A {{jsxref("Promise")}} that resolves with undefined.

### Exceptions

If an error occurs, the promise will resolve with one of the following exceptions:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the Promise is rejected because the {{domxref("AudioDecoder.state","state")}} is not `configured`.

## Examples

The following example flushes the `AudioDecoder`.

```js
AudioDecoder.flush();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

