---
title: AudioDecoder.configure()
slug: Web/API/AudioDecoder/configure
tags:
  - API
  - Method
  - Reference
  - configure
  - AudioDecoder
browser-compat: api.AudioDecoder.configure
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`configure()`** method of the {{domxref("AudioDecoder")}} interface enqueues a control message to configure the audio decoder for decoding chunks.

## Syntax

```js
AudioDecoder.configure(config)
```

### Parameters

- `config`
  - : A dictionary object containing the following members:
    - `codec`
      - : A {{domxref("DOMString","string")}} containing a [valid codec string](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry).
    - `sampleRate`
      - : An integer representing the number of frame samples per second.
    - `numberOfChannels`
      - : An integer representing the number of audio channels.
    - `description`{{Optional_Inline}}
      - A {{domxref("BufferSource")}} containing a sequence of codec specific bytes, commonly known as extradata.

> **Note:** The registrations in the [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) link to a specification detailing whether and how to populate the optional `description` member.

### Return Value

{{jsxref("Undefined")}}.

### Exceptions

- `TypeError` {{domxref("DOMException")}}
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

