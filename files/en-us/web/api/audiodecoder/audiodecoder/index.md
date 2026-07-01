---
title: "AudioDecoder: AudioDecoder() constructor"
short-title: AudioDecoder()
slug: Web/API/AudioDecoder/AudioDecoder
page-type: web-api-constructor
browser-compat: api.AudioDecoder.AudioDecoder
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`AudioDecoder()`** constructor creates a new {{domxref("AudioDecoder")}} object with the provided `init.output` callback assigned as the output callback, the provided `init.error` callback as the error callback, and the {{domxref("AudioDecoder.state")}} set to `"unconfigured"`.

## Syntax

```js-nolint
new AudioDecoder(init)
```

### Parameters

- `init`
  - : A dictionary object containing two required callbacks.
    - `output`
      - : A callback which is passed a single argument of an {{domxref("AudioData")}} object.
    - `error`
      - : A callback which is passed a single argument of the error that has been thrown.

## Examples

In the following example an `AudioDecoder` is created with the two required callback functions, one to deal with the decoded chunk and the other to handle errors.

```js
const audioDecoder = new AudioDecoder({
  output: processAudio,
  error: onEncoderError,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
