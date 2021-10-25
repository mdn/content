---
title: AudioData.copyTo()
slug: Web/API/AudioData/copyTo
tags:
  - API
  - Method
  - Reference
  - copyTo
  - AudioData
browser-compat: api.AudioData.copyTo
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`copyTo()`** method of the {{domxref("AudioData")}} interface copies a plane of an `AudioData` object to a destination buffer.

## Syntax

```js
AudioData.copyTo(destination, options)
```

### Parameters

- `destination`
  - : The {{domxref("BufferSource","buffer")}} to copy the plane to.
- `options`
  - : An object containing the following:
    - `planeIndex`
      - : The index of the plane to copy from.
    - `frameOffset`{{optional_inline}}
      - : An integer giving an offset into the plane data indicating which plane to begin copying from. Defaults to `0`.
    - `frameCount`{{optional_inline}}
      - : An integer giving the number of frames to copy. If omitted then all frames in the plane will be copied, beginning with the frame specified in `frameOffset`.

### Return Value

Undefined.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `AudioData` object has been {{Glossary("Transferable Objects","transferred")}}.
- `RangeError` {{domxref("DOMException")}}
  - : Thrown if the length of the sample is longer than the destination length.
- `RangeError` {{domxref("DOMException")}}
  - : Thrown if the format of the `AudioData` object describes a planar format, but `options.planeIndex` is outside of the number of planes available.
- `RangeError` {{domxref("DOMException")}}
  - : Thrown if the format of the `AudioData` object describes an interleaved format, but `options.planeIndex` is greater than `0`.

## Examples

The following example copies the plane at index `1` to a destination buffer.

```js
AudioData.copyTo(AudioBuffer, {planeIndex: 1});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

