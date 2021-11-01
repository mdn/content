---
title: OfflineAudioContext.resume()
slug: Web/API/OfflineAudioContext/resume
tags:
  - API
  - Method
  - NeedsExample
  - OfflineAudioContext
  - Reference
  - Web Audio API
  - resume
browser-compat: api.OfflineAudioContext.resume
---
{{ APIRef("Web Audio API") }}

The **`resume()`** method of the
{{domxref("OfflineAudioContext")}} interface resumes the progression of time in an audio
context that has been suspended. The promise resolves immediately because the
`OfflineAudioContext` does not require the audio hardware. If the context is
not currently suspended or the rendering has not started, the promise is rejected with
{{exception("InvalidStateError")}}.

## Syntax

```js
OfflineAudioContext.resume().then(function() { ... });
```

### Parameters

None.

### Returns

A {{jsxref("Promise")}} resolving to void.

### Exceptions

The promise is rejected when an exception is encountered.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the context is not currently suspended or the rendering has not started.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
