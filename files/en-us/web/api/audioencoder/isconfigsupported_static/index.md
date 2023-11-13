---
title: "AudioEncoder: isConfigSupported() static method"
short-title: isConfigSupported()
slug: Web/API/AudioEncoder/isConfigSupported_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.AudioEncoder.isConfigSupported_static
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`isConfigSupported()`** static method of the {{domxref("AudioEncoder")}} interface checks if the given config is supported (that is, if {{domxref("AudioEncoder")}} objects can be successfully configured with the given config).

## Syntax

```js-nolint
AudioEncoder.isConfigSupported(config)
```

### Parameters

- `config`
  - : The dictionary object accepted by {{domxref("AudioEncoder.configure")}}

### Return value

A {{jsxref("Promise")}} that resolves with an object containing the following members:

- `supported`
  - : A boolean value which is `true` if the given config is supported by the encoder.
- `config`
  - : A copy of the given config with all the fields recognized by the encoder.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the provided `config` is invalid; that is, if doesn't have required values (such as an empty `codec` field) or has invalid values (such as a negative `sampleRate`).

## Examples

The following example tests if the browser supports several audio codecs.

```js
const codecs = ["mp4a.40.2", "mp3", "alaw", "ulaw"];
const configs = [];
for (const codec of codecs) {
  configs.push({
    codec,
    sampleRate: 48000,
    numberOfChannels: 1,
    not_supported_field: 123,
  });
}
for (const config of configs) {
  const support = await AudioEncoder.isConfigSupported(config);
  console.log(
    `AudioEncoder's config ${JSON.stringify(support.config)} support: ${
      support.supported
    }`,
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
