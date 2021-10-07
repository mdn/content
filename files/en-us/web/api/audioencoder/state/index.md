---
title: AudioEncoder.state
slug: Web/API/AudioEncoder/state
tags:
  - API
  - Property
  - Reference
  - state
  - AudioEncoder
browser-compat: api.AudioEncoder.state
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

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
