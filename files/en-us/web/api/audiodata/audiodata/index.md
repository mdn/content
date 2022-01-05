---
title: AudioData.AudioData()
slug: Web/API/AudioData/AudioData
tags:
  - API
  - Constructor
  - Reference
  - AudioData
browser-compat: api.AudioData.AudioData
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`AudioData()`** constructor creates a new {{domxref("AudioData")}} object which represents an individual audio sample.

## Syntax

```js
new AudioData(init);
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
        - "f32-planer"
    - `sampleRate`
      - : A decimal containing the sample rate in Hz.
    - `numberOfFrames`
      - : An integer containing the number of frames in this sample.
    - `numberOfChannels`
      - : An integer containing the number of channels in this sample.
    - `timestamp`
      - : An integer indicating the data's time in microseconds .
    - `data`
      - : A typed array of the audio data for this sample.

## Exceptions

- {{domxref("DOMException")}} `TypeError`
  - : Thrown if `init` is in an incorrect format.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

