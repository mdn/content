---
title: "AudioData: copyTo() method"
short-title: copyTo()
slug: Web/API/AudioData/copyTo
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.AudioData.copyTo
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

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
      - : An integer giving an offset into the plane data indicating which plane to begin copying from. Defaults to `0`.
    - `frameCount` {{optional_inline}}
      - : An integer giving the number of frames to copy. If omitted then all frames in the plane will be copied, beginning with the frame specified in `frameOffset`.

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

## Examples

The following example copies the plane at index `1` to a destination buffer.

```js
AudioData.copyTo(AudioBuffer, { planeIndex: 1 });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
