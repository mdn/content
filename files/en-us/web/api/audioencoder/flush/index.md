---
title: "AudioEncoder: flush() method"
short-title: flush()
slug: Web/API/AudioEncoder/flush
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.AudioEncoder.flush
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`flush()`** method of the {{domxref("AudioEncoder")}} interface returns a Promise that resolves once all pending messages in the queue have been completed.

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
  - : Thrown if the Promise is rejected because the {{domxref("AudioEncoder.state","state")}} is not `"configured"`.

## Examples

The following example flushes the `AudioEncoder`.

```js
AudioEncoder.flush();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
