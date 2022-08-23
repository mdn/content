---
title: VideoEncoder.isConfigSupported()
slug: Web/API/VideoEncoder/isConfigSupported
page-type: web-api-static-method
tags:
  - API
  - Method
  - Reference
  - isConfigSupported
  - VideoEncoder
  - Experimental
browser-compat: api.VideoEncoder.isConfigSupported
---
{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`isConfigSupported()`** static method of the {{domxref("VideoEncoder")}} interface checks if the given config is supported (that is, if {{domxref("VideoEncoder")}} objects can be successfully configured with the given config).

## Syntax

```js
isConfigSupported(config)
```

### Parameters

- `config`
  - : The dictionary object accepted by {{domxref("VideoEncoder.configure")}}

### Return value

A {{jsxref("Promise")}} that resolves with an object containing the following members:

- `supported` {{optional_inline}}
  - : A boolean value which is `true` if the given config is supported by the encoder.
- `config` {{optional_inline}}
  - : A copy of the given config with all the fields recognized by the encoder.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the provided `config` is invalid; that is, if doesn't have required values (such as an empty `codec` field) or has invalid values (such as a negative `width`)

## Examples

The following example tests if the browser supports accelerated and un-accelerated
versions of several video codecs.

```js
const codecs = ['avc1.42001E', 'vp8', 'vp09.00.10.08', 'av01.0.04M.08'];
const accelerations = ['prefer-hardware', 'prefer-software']

const configs = [];
for (const codec of codecs) {
  for (const acceleration of accelerations) {
    configs.push({
      codec,
      hardwareAcceleration: acceleration,
      width: 1280,
      height: 720,
      bitrate: 2_000_000,
      bitrateMode: 'constant',
      framerate: 30,
      not_supported_field: 123
    });
  }
}

for (const config of configs) {
  const support = await VideoEncoder.isConfigSupported(config);
  console.log(`VideoEncoder's config ${JSON.stringify(support.config)} support: ${support.supported}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
