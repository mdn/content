---
title: "AudioPlaybackStats: minimumLatency property"
short-title: minimumLatency
slug: Web/API/AudioPlaybackStats/minimumLatency
page-type: web-api-instance-property
browser-compat: api.AudioPlaybackStats.minimumLatency
---

{{APIRef("Web Audio API")}}

The **`minimumLatency`** read-only property of the {{domxref("AudioPlaybackStats")}} interface is a number indicating the minimum latency since the audio context was first initialized, or since {{domxref("AudioPlaybackStats.resetLatency()")}} was last called.

## Value

A floating point number indicating the minimum latency, in seconds. Initialized to `0`.

## Examples

### Basic usage

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log current minimum latency
console.log(stats.minimumLatency);
```

See also the main {{domxref("AudioPlaybackStats")}} reference page for a more in-depth example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
