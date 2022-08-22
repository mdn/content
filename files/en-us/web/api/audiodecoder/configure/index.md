---
title: AudioDecoder.configure()
slug: Web/API/AudioDecoder/configure
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - configure
  - AudioDecoder
  - Experimental
browser-compat: api.AudioDecoder.configure
---
{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`configure()`** method of the {{domxref("AudioDecoder")}} interface enqueues a control message to configure the audio decoder for decoding chunks.

## Syntax

```js
configure(config)
```

### Parameters

- `config`
  - : A dictionary object containing the following members:
    - `codec`
      - : A string containing a [valid codec string](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry).
    - `sampleRate`
      - : An integer representing the number of frame samples per second.
    - `numberOfChannels`
      - : An integer representing the number of audio channels.
    - `description` {{optional_inline}}
      - : Aa {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} containing a sequence of codec specific bytes, commonly known as extradata.

> **Note:** The registrations in the [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) link to a specification detailing whether and how to populate the optional `description` member.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the provided `config` is invalid.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("AudioDecoder.state","state")}} is `"closed"`.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the provided `config` is valid but the user agent cannot provide a codec that can decode this profile.

## Examples

The following example configures the `AudioDecoder` with the `opus` codec.

```js
AudioDecoder.configure({ codec: 'opus', sampleRate: 44100, numberOfChannels: 2 });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
