---
title: "AudioData: AudioData() constructor"
short-title: AudioData()
slug: Web/API/AudioData/AudioData
page-type: web-api-constructor
browser-compat: api.AudioData.AudioData
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`AudioData()`** constructor creates a new {{domxref("AudioData")}} object which represents an individual audio sample.

## Syntax

```js-nolint
new AudioData(init)
```

### Parameters

- `init`
  - : An object containing the following:
    - `format`
      - : One of:
        - "u8"
        - "s16"
        - "s32"
        - "f32"
        - "u8-planar"
        - "s16-planar"
        - "s32-planar"
        - "f32-planar"
    - `sampleRate`
      - : A decimal containing the sample rate in Hz.
    - `numberOfFrames`
      - : An integer containing the number of frames in this sample.
    - `numberOfChannels`
      - : An integer containing the number of channels in this sample.
    - `timestamp`
      - : An integer indicating the data's time in microseconds.
    - `data`
      - : A typed array of the audio data for this sample.
    - `transfer`
      - : An array of {{jsxref("ArrayBuffer")}}s that `AudioData` will detach and take ownership of. If the array contains the {{jsxref("ArrayBuffer")}} backing `data`, `AudioData` will use that buffer directly instead of copying from it.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `init` is in an incorrect format.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
