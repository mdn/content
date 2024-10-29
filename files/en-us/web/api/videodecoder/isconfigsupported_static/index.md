---
title: "VideoDecoder: isConfigSupported() static method"
short-title: isConfigSupported()
slug: Web/API/VideoDecoder/isConfigSupported_static
page-type: web-api-static-method
browser-compat: api.VideoDecoder.isConfigSupported_static
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`isConfigSupported()`** static method of the {{domxref("VideoDecoder")}} interface checks if the given config is supported (that is, if {{domxref("VideoDecoder")}} objects can be successfully configured with the given config).

## Syntax

```js-nolint
VideoDecoder.isConfigSupported(config)
```

### Parameters

- `config`
  - : The dictionary object accepted by {{domxref("VideoDecoder.configure")}}

### Return value

A {{jsxref("Promise")}} that resolves with an object containing the following members:

- `supported`
  - : A boolean value which is `true` if the given config is supported by the decoder.
- `config`
  - : A copy of the given config with all the fields recognized by the decoder.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the provided `config` is invalid; that is, if doesn't have required values (such as an empty `codec` field) or has invalid values (such as a negative `codedWidth`).

## Examples

The following example tests if the browser supports accelerated and un-accelerated
versions of several video codecs.

```js
const codecs = [
  "avc1.42001E",
  "hvc1.1.6.L123.00",
  "vp8",
  "vp09.00.10.08",
  "av01.0.04M.08",
];
const accelerations = ["prefer-hardware", "prefer-software"];

const configs = [];
for (const codec of codecs) {
  for (const acceleration of accelerations) {
    configs.push({
      codec,
      hardwareAcceleration: acceleration,
      codedWidth: 1280,
      codedHeight: 720,
      not_supported_field: 123,
    });
  }
}

for (const config of configs) {
  const support = await VideoDecoder.isConfigSupported(config);
  console.log(
    `VideoDecoder's config ${JSON.stringify(support.config)} support: ${
      support.supported
    }`,
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
