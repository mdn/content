---
title: "AudioEncoder: state property"
short-title: state
slug: Web/API/AudioEncoder/state
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.AudioEncoder.state
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`state`** read-only property of the {{domxref("AudioEncoder")}} interface returns the current state of the underlying codec.

## Value

A string containing one of the following values:

- `"unconfigured"`
  - : The codec is not configured for decoding.
- `"configured"`
  - : The codec has a valid configuration and is ready.
- `"closed"`
  - : The codec is no longer usable and system resources have been released.

## Examples

The following example prints the state of the `AudioEncoder` to the console.

```js
console.log(AudioEncoder.state);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
