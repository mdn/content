---
title: "OfflineAudioContext: resume() method"
short-title: resume()
slug: Web/API/OfflineAudioContext/resume
page-type: web-api-instance-method
browser-compat: api.OfflineAudioContext.resume
---

{{ APIRef("Web Audio API") }}

The **`resume()`** method of the
{{domxref("OfflineAudioContext")}} interface resumes the progression of time in an audio
context that has been suspended. The promise resolves immediately because the
`OfflineAudioContext` does not require the audio hardware.

## Syntax

```js-nolint
resume()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} resolving to {{jsxref('undefined')}}.

### Exceptions

The promise is rejected when an exception is encountered.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the context is not currently suspended or the rendering has not started.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
