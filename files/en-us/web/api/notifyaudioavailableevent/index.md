---
title: NotifyAudioAvailableEvent
slug: Web/API/NotifyAudioAvailableEvent
page-type: web-api-interface
status:
  - deprecated
  - non-standard
---

{{APIRef("Web Audio API")}}{{Non-standard_header}}{{Deprecated_header}}

The non-standard, obsolete, **`NotifyAudioAvailableEvent`** interface defines the event sent to audio elements when the audio buffer is full.

## Instance properties

- `frameBuffer` {{ReadOnlyInline}}
  - : A {{jsxref("Float32Array")}} containing the raw 32-bit floating-point audio data obtained from decoding the audio (e.g., the raw data being sent to the audio hardware vs. encoded audio). The data is a series of audio samples, each sample containing one 32-bit value per audio channel. All audio frames are normalized to contain 1024 samples by default, but could be any length between 512 and 16384 samples if the user has set a different length using the **`mozFrameBufferLength`** attribute.
- `time`
  - : A floating-point value indicating the time in seconds at which the first sample in the `frameBuffer` occurs, relative to the start of the audio track.
