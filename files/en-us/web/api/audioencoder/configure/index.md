---
title: AudioEncoder.configure()
slug: Web/API/AudioEncoder/configure
tags:
  - API
  - Method
  - Reference
  - configure
  - AudioEncoder
browser-compat: api.AudioEncoder.configure
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`configure()`** method of the {{domxref("AudioEncoder")}} interface enqueues a control message to configure the audio encoder for encoding chunks.

## Syntax

```js
AudioEncoder.configure(config)
```

### Parameters

- `config`
  - : A dictionary object containing the following members:
    - `codec`
      - : A {{domxref("DOMString","string")}} containing a [valid codec string](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry).
    - `sampleRate`{{Optional_Inline}}
      - : An integer representing the number of frame samples per second.
    - `numberOfChannels`{{Optional_Inline}}
      - : An integer representing the number of audio channels.
    - `bitrate`{{Optional_Inline}}
      - : An integer representing the bitrate.


### Return Value

None.

### Exceptions

- `TypeError` {{domxref("DOMException")}}
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

