---
title: "AudioDecoder: flush() method"
short-title: flush()
slug: Web/API/AudioDecoder/flush
page-type: web-api-instance-method
browser-compat: api.AudioDecoder.flush
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`flush()`** method of the {{domxref("AudioDecoder")}} interface returns a Promise that resolves once all pending messages in the queue have been completed.

## Syntax

```js-nolint
flush()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with undefined.

### Exceptions

If an error occurs, the promise will resolve with one of the following exceptions:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the Promise is rejected because the {{domxref("AudioDecoder.state","state")}} is not `configured`.

## Examples

The following example flushes the `AudioDecoder`.

```js
await audioDecoder.flush();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
