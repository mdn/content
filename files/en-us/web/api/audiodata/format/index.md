---
title: AudioData.format
slug: Web/API/AudioData/format
tags:
  - API
  - Property
  - Reference
  - format
  - AudioData
browser-compat: api.AudioData.format
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`format`** read-only property of the {{domxref("AudioData")}} interface returns the sample format of the `AudioData` object.

### Value

A string. One of:

- `"u8"`
  - : 8-bit unsigned integer samples, in an interleaved format.
- `"s16"`
  - : 16-bit unsigned integer samples, in an interleaved format.
- `"s32"`
  - : 32-bit unsigned integer samples, in an interleaved format.
- `"f32"`
  - : 32-bit float samples, in an interleaved format.
- `"u8-planar"`
  - : 8-bit unsigned integer samples, in a planar format.
- `"s16-planar"`
  - : 16-bit unsigned integer samples, in a planar format.
- `"s32-planar"`
  - : 32-bit unsigned integer samples, in a planar format.
- `"f32-planar"`
  - : 32-bit float samples, in a planar format.

## Examples

The below example prints the value of `format` to the console.

```js
console.log(AudioData.format);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


