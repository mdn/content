---
title: AudioEncoder.configure()
slug: Web/API/AudioEncoder/configure
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - configure
  - AudioEncoder
  - Experimental
browser-compat: api.AudioEncoder.configure
---
{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`configure()`** method of the {{domxref("AudioEncoder")}} interface enqueues a control message to configure the audio encoder for encoding chunks.

## Syntax

```js
configure(config)
```

### Parameters

- `config`
  - : A dictionary object containing the following members:
    - `codec`
      - : A string containing a [valid codec string](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry).
    - `sampleRate` {{optional_inline}}
      - : An integer representing the number of frame samples per second.
    - `numberOfChannels` {{optional_inline}}
      - : An integer representing the number of audio channels.
    - `bitrate` {{optional_inline}}
      - : An integer representing the bitrate.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the provided `config` is invalid.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("AudioEncoder.state","state")}} is `"closed"`.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the provided `config` is valid but the user agent cannot provide a codec that can decode this profile.

## Examples

The following example creates a new {{domxref("AudioEncoder")}} and configures it with some of the available options.

```js
const init = {
  output: handleOutput,
  error: (e) => {
    console.log(e.message);
  }
};

let config = {
  codec: 'vp8',
  bitrate: 2_000_000, // 2 Mbps
};

let encoder = new AudioEncoder(init);
encoder.configure(config);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
