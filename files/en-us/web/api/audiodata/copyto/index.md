---
title: "AudioData: copyTo() method"
short-title: copyTo()
slug: Web/API/AudioData/copyTo
page-type: web-api-instance-method
browser-compat: api.AudioData.copyTo
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`copyTo()`** method of the {{domxref("AudioData")}} interface copies a plane of an `AudioData` object to a destination buffer.

## Syntax

```js-nolint
copyTo(destination, options)
```

### Parameters

- `destination`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} to copy the plane to.
- `options`
  - : An object containing the following:
    - `planeIndex`
      - : The index of the plane to copy from.
    - `frameOffset` {{optional_inline}}
      - : An integer giving the offset of the first frame to copy within the plane. Defaults to `0`.
    - `frameCount` {{optional_inline}}
      - : An integer giving the number of frames to copy. If omitted, all frames from `frameOffset` to the end of the plane are copied.
    - `format` {{optional_inline}}
      - : A string indicating the audio format that the source samples should be converted to when copied to the destination.
      This can be any of the values: `"u8"`, `"s16"`, `"s32"`, `"f32"`, `"u8-planar"`, `"s16-planar"`, `"s32-planar"`, and `"f32-planar"` (see {{domxref("AudioData.format")}} for more information).
      Note that `"f32-planar"` must be supported.
      If omitted, the samples are copied in the `AudioData`'s own format. 

### Return value

Undefined.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `AudioData` object has been [transferred](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).
- {{jsxref("RangeError")}}
  - : Thrown if one of the following conditions is met:
    - The length of the sample is longer than the destination length.
    - The format of the `AudioData` object describes a planar format, but `options.planeIndex` is outside of the number of planes available.
    - The format of the `AudioData` object describes an interleaved format, but `options.planeIndex` is greater than `0`.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified [`format`](#format) to convert the data to is not supported.

## Examples

The following example copies the plane at index `1` to a destination buffer.

```js
AudioData.copyTo(AudioBuffer, { planeIndex: 1 });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
