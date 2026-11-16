---
title: "AudioPlaybackStats: maximumLatency property"
short-title: maximumLatency
slug: Web/API/AudioPlaybackStats/maximumLatency
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.AudioPlaybackStats.maximumLatency
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

The **`maximumLatency`** read-only property of the {{domxref("AudioPlaybackStats")}} interface is a number indicating the maximum latency since the audio context was initialized or since {{domxref("AudioPlaybackStats.resetLatency()")}} was last called.

## Value

A double-precision floating point number indicating the maximum latency, in seconds. Initialized to `0`.

## Examples

### Basic usage

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log maximum latency
console.log(stats.maximumLatency);
```

See also the main {{domxref("AudioPlaybackStats")}} reference page for a more in-depth example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
