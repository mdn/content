---
title: AudioDecoder.state
slug: Web/API/AudioDecoder/state
tags:
  - API
  - Property
  - Reference
  - state
  - AudioDecoder
browser-compat: api.AudioDecoder.state
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`state`** read-only property of the {{domxref("AudioDecoder")}} interface returns the current state of the underlying codec.

## Value

A string containing one of the following values:

- `"unconfigured"`
  - : The codec is not configured for decoding.
- `"configured"`
  - : The codec has a valid configuration and is ready.
- `"closed"`
  - : The codec is no longer usable and system resources have been released.

## Examples

The following example prints the state of the `AudioDecoder` to the console.

```js
console.log(AudioDecoder.state);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


