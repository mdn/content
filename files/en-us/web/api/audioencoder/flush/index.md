---
title: AudioEncoder.flush()
slug: Web/API/AudioEncoder/flush
tags:
  - API
  - Method
  - Reference
  - flush
  - AudioEncoder
browser-compat: api.AudioEncoder.flush
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`flush()`** method of the {{domxref("AudioEncoder")}} interface returns a Promise that resolves once all pending messages in the queue have been completed.

## Syntax

```js
AudioEncoder.flush()
```

### Parameters

None.

### Return Value

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

