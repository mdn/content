---
title: AudioEncoder.AudioEncoder()
slug: Web/API/AudioEncoder/AudioEncoder
tags:
  - API
  - Constructor
  - Reference
  - AudioEncoder
browser-compat: api.AudioEncoder.AudioEncoder
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`AudioEncoder()`** constructor creates a new {{domxref("AudioEncoder")}} object with the provided `init.output` callback assigned as the output callback, the provided `init.error` callback as the error callback, and the {{domxref("AudioEncoder.state")}} set to `"unconfigured"`.

## Syntax

```js
new AudioEncoder(init);
```

### Parameters

- `init`
  - : An object containing two required callbacks.
    - `output`
      - : A callback which takes a {{domxref("EncodedAudioChunk")}} object as the first argument, and an optional metadata object as the second. The metadata object has one member, `decoderConfig` which has an object as its value containing:
        - `codec`
          - : A {{domxref("DOMString","string")}} containing a [valid codec string](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry).
        - `sampleRate`
          - : An integer representing the number of frame samples per second.
        - `numberOfChannels`
          - : An integer representing the number of audio channels.
        - `description`{{Optional_Inline}}
          - : A {{domxref("BufferSource")}} containing a sequence of codec specific bytes, commonly known as extradata.
    - `error`
      - : A callback which takes an {{jsxref("Error")}} object as its only argument.

## Examples

In the following example an `AudioEncoder` is created with the two required callback functions, one to deal with the decoded frame and the other to handle errors.

```js
const audioEncoder = new AudioEncoder({
  output: processAudio,
  error: onEncoderError,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

